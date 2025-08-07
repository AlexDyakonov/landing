import React, { useState, useEffect, useRef, useCallback } from 'react'

interface TrailChunk {
  id: number
  x: number
  y: number
  timestamp: number
  color: string
  size: number
  life: number
}

interface GlitchBurst {
  id: number
  x: number
  y: number
  intensity: number
  life: number
  color: string
}

interface DynamicCursorProps {
  enabled?: boolean
}

export const DynamicCursor: React.FC<DynamicCursorProps> = ({ enabled = true }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<TrailChunk[]>([])
  const [glitchBursts, setGlitchBursts] = useState<GlitchBurst[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [cursorScale, setCursorScale] = useState(1)
  const [glitchIntensity, setGlitchIntensity] = useState(0)
  
  const chunkIdRef = useRef(0)
  const glitchIdRef = useRef(0)
  const animationRef = useRef<number>()
  const lastUpdateRef = useRef(0)
  const glitchTimerRef = useRef<number>()

  // Color palette from cursor.json
  const colorPalette = {
    primary: '#CFEA6F',
    secondary: '#80A6F5', 
    accent: '#3C2A25',
    glitchColors: ['#FF005D', '#00FFF0', '#3C2A25']
  }

  // Увеличенные размеры для лучшей видимости
  const cursorSize = 10 // увеличено с 6 до 10
  const trailChunkSize = 6 // увеличено с 4 до 6

  // Управление видимостью стандартного курсора
  useEffect(() => {
    if (enabled) {
      document.body.classList.add('cursor-hidden')
      document.body.classList.remove('cursor-default')
    } else {
      document.body.classList.remove('cursor-hidden')
      document.body.classList.add('cursor-default')
    }

    // Cleanup при размонтировании
    return () => {
      document.body.classList.remove('cursor-hidden', 'cursor-default')
    }
  }, [enabled])

  // Get cycling glitch color
  const getGlitchColor = useCallback((index: number) => {
    return colorPalette.glitchColors[index % colorPalette.glitchColors.length]
  }, [])

  // Glitch burst effect
  const createGlitchBurst = useCallback((x: number, y: number, intensity: number = 1) => {
    const burst: GlitchBurst = {
      id: glitchIdRef.current++,
      x,
      y,
      intensity,
      life: 15, // frames at 15fps
      color: getGlitchColor(Math.floor(Math.random() * 3))
    }
    setGlitchBursts(prev => [...prev.slice(-5), burst])
  }, [getGlitchColor])

  // Handle mouse events
  useEffect(() => {
    if (!enabled) return

    let lastMoveTime = 0
    let velocity = 0

    const updateCursor = (e: MouseEvent) => {
      const now = Date.now()
      const deltaTime = now - lastMoveTime
      
      if (deltaTime > 0) {
        const deltaX = e.clientX - position.x
        const deltaY = e.clientY - position.y
        velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaTime
      }

      setPosition({ x: e.clientX, y: e.clientY })
      
      // Create trail chunk с увеличенным размером
      const chunk: TrailChunk = {
        id: chunkIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: now,
        color: velocity > 0.5 ? getGlitchColor(chunkIdRef.current) : colorPalette.secondary,
        size: Math.min(trailChunkSize + velocity * 3, 12), // увеличенный размер трейла
        life: 20
      }
      
      setTrail(prev => [...prev.slice(-19), chunk])
      
      // Random glitch burst on fast movement
      if (velocity > 1.2 && Math.random() < 0.1) {
        createGlitchBurst(e.clientX, e.clientY, velocity)
      }

      lastMoveTime = now
    }

    const handleClick = (e: MouseEvent) => {
      setIsClicked(true)
      createGlitchBurst(e.clientX, e.clientY, 2)
      setTimeout(() => setIsClicked(false), 200)
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('button, a, [role="button"], .cursor-target')
      setIsHovering(!!isInteractive)
      setCursorScale(isInteractive ? 1.3 : 1) // увеличен масштаб при ховере
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('click', handleClick)
    document.addEventListener('mouseover', handleHover)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('mouseover', handleHover)
    }
  }, [position, getGlitchColor, createGlitchBurst, enabled])

  // Animation loop at 15fps for retro feel
  useEffect(() => {
    if (!enabled) return

    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current >= 66.67) { // ~15fps
        // Update trail life
        setTrail(prev => prev
          .map(chunk => ({ ...chunk, life: chunk.life - 1 }))
          .filter(chunk => chunk.life > 0)
        )

        // Update glitch bursts
        setGlitchBursts(prev => prev
          .map(burst => ({ ...burst, life: burst.life - 1 }))
          .filter(burst => burst.life > 0)
        )

        lastUpdateRef.current = timestamp
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [enabled])

  // Random glitch effect
  useEffect(() => {
    if (!enabled) return

    const triggerGlitch = () => {
      if (Math.random() < 0.02) { // 2% chance every interval
        setGlitchIntensity(0.8)
        createGlitchBurst(position.x, position.y, 0.5)
        setTimeout(() => setGlitchIntensity(0), 100)
      }
    }

    glitchTimerRef.current = window.setInterval(triggerGlitch, 200)
    return () => {
      if (glitchTimerRef.current) {
        clearInterval(glitchTimerRef.current)
      }
    }
  }, [position, createGlitchBurst, enabled])

  // Check for reduced motion preference and enabled state
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (reducedMotion || !enabled) {
    return null // Disable cursor effect for accessibility or when disabled
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{ mixBlendMode: 'difference' }}>
      {/* Trail chunks */}
      {trail.map((chunk, index) => (
        <div
          key={chunk.id}
          className="absolute pixel-perfect"
          style={{
            left: chunk.x - chunk.size / 2,
            top: chunk.y - chunk.size / 2,
            width: chunk.size,
            height: chunk.size,
            backgroundColor: chunk.color,
            opacity: chunk.life / 20,
            transform: `scale(${1 - (20 - chunk.life) * 0.05})`,
            border: '1px solid ' + colorPalette.accent,
            imageRendering: 'pixelated',
            transition: 'none'
          }}
        />
      ))}

      {/* Glitch bursts */}
      {glitchBursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute pixel-perfect"
          style={{
            left: burst.x - 5,
            top: burst.y - 5,
            width: 10 + burst.intensity * 3, // увеличенный размер глитч-всплесков
            height: 10 + burst.intensity * 3,
            backgroundColor: burst.color,
            opacity: burst.life / 15,
            transform: `scale(${burst.intensity}) rotate(${burst.life * 24}deg)`,
            border: '2px solid ' + colorPalette.accent, // увеличенная граница
            imageRendering: 'pixelated',
            animation: 'glitch-pop 0.1s ease-out'
          }}
        />
      ))}

      {/* Main cursor core - увеличенный */}
      <div
        className="absolute pixel-perfect cursor-core"
        style={{
          left: position.x - cursorSize / 2,
          top: position.y - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          backgroundColor: colorPalette.secondary,
          border: `3px solid ${colorPalette.accent}`, // увеличенная граница
          transform: `scale(${cursorScale}) ${glitchIntensity > 0 ? `translate(${Math.random() * 3 - 1.5}px, ${Math.random() * 3 - 1.5}px)` : ''}`,
          imageRendering: 'pixelated',
          transition: isHovering ? 'transform 0.1s cubic-bezier(1, 0, 0, 1)' : 'none',
          boxShadow: isHovering ? `3px 3px 0px ${colorPalette.accent}` : `2px 2px 0px ${colorPalette.accent}`, // увеличенная тень
          zIndex: 1000
        }}
      >
        {/* Hover state indicator */}
        {isHovering && (
          <div
            className="absolute -inset-2 pixel-perfect" // увеличенный отступ
            style={{
              border: `2px solid ${colorPalette.primary}`,
              backgroundColor: 'transparent',
              animation: 'pixel-blink 0.5s infinite'
            }}
          />
        )}

        {/* Click state burst */}
        {isClicked && (
          <div
            className="absolute -inset-3 pixel-perfect" // увеличенный отступ
            style={{
              border: `3px solid ${colorPalette.primary}`,
              backgroundColor: colorPalette.primary + '40',
              animation: 'click-burst 0.2s ease-out'
            }}
          />
        )}
      </div>
    </div>
  )
} 