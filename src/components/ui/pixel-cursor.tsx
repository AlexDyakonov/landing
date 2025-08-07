import { useEffect, useState, useRef, useCallback } from 'react'

interface TrailChunk {
  id: number
  x: number
  y: number
  color: string
  age: number
  size: number
}

interface GlitchBurst {
  id: number
  x: number
  y: number
  intensity: number
  life: number
}

export const PixelCursor = () => {
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

  // Color palette from JSON
  const colorPalette = {
    primary: '#CFEA6F',
    secondary: '#80A6F5', 
    accent: '#3C2A25',
    glitchColors: ['#FF005D', '#00FFF0', '#3C2A25']
  }

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
      life: 15 // frames at 15fps
    }
    setGlitchBursts(prev => [...prev.slice(-5), burst])
  }, [])

  // Handle mouse events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY
      
      setPosition({ x: newX, y: newY })
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           !!target.closest('button') ||
                           !!target.closest('a')
      
      setIsHovering(isInteractive)
      setCursorScale(isInteractive ? 1.15 : 1)

      // Create trail chunks every few pixels of movement
      const now = performance.now()
      if (now - lastUpdateRef.current > 66) { // ~15fps (1000/15 = 66ms)
        lastUpdateRef.current = now
        
        const chunk: TrailChunk = {
          id: chunkIdRef.current++,
          x: newX,
          y: newY,
          color: getGlitchColor(chunkIdRef.current),
          age: 0,
          size: 4 // chunk_size from JSON
        }
        
        setTrail(prev => [...prev.slice(-19), chunk]) // max_length 20
        
        // Random glitch burst (frequency 0.8)
        if (Math.random() < 0.8) {
          createGlitchBurst(newX, newY, Math.random() * 0.5 + 0.5)
        }
      }
    }

    const handleMouseDown = () => {
      setIsClicked(true)
      setGlitchIntensity(1)
      createGlitchBurst(position.x, position.y, 1.5)
      
      // Reset after glitch pop animation
      setTimeout(() => {
        setIsClicked(false)
        setGlitchIntensity(0)
      }, 200)
    }

    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 })
      setIsHovering(false)
      setCursorScale(1)
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [position, getGlitchColor, createGlitchBurst])

  // Animation loop at 15fps for pixelated effect
  useEffect(() => {
    const animate = () => {
      const now = performance.now()
      
      // Update trail chunks (age them and fade)
      setTrail(prev => 
        prev
          .map(chunk => ({
            ...chunk,
            age: chunk.age + 1
          }))
          .filter(chunk => chunk.age < 24) // 0.4s * 60fps converted to frames
      )

      // Update glitch bursts
      setGlitchBursts(prev =>
        prev
          .map(burst => ({
            ...burst,
            life: burst.life - 1
          }))
          .filter(burst => burst.life > 0)
      )

      // Continue animation
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate)
      }, 66) // ~15fps
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Periodic glitch pulses
  useEffect(() => {
    const startGlitchTimer = () => {
      glitchTimerRef.current = window.setTimeout(() => {
        if (Math.random() < 0.3) {
          setGlitchIntensity(0.8)
          setTimeout(() => setGlitchIntensity(0), 150)
        }
        startGlitchTimer()
      }, 1000 + Math.random() * 2000)
    }
    
    startGlitchTimer()
    
    return () => {
      if (glitchTimerRef.current) {
        clearTimeout(glitchTimerRef.current)
      }
    }
  }, [])

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        body {
          cursor: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .pixel-cursor * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      
      <div className="pixel-cursor">
        {/* Trail - Square Chunks */}
        {trail.map((chunk, index) => {
          const opacity = Math.max(0, 1 - (chunk.age / 24)) // pixelated fade
          const scale = 1 - (chunk.age / 48)
          
          return (
            <div
              key={chunk.id}
              className="fixed pointer-events-none z-[9997] pixel-perfect"
              style={{
                left: `${chunk.x - chunk.size/2}px`,
                top: `${chunk.y - chunk.size/2}px`,
                width: `${chunk.size}px`,
                height: `${chunk.size}px`,
                backgroundColor: chunk.color,
                border: `1px solid ${colorPalette.accent}`,
                opacity: opacity > 0.1 ? opacity : 0,
                transform: `scale(${Math.max(0.3, scale)})`,
                transition: 'none',
                imageRendering: 'pixelated',
                boxShadow: `2px 2px 0 ${colorPalette.accent}`
              }}
            />
          )
        })}

        {/* Glitch Bursts */}
        {glitchBursts.map(burst => (
          <div
            key={burst.id}
            className="fixed pointer-events-none z-[9996] pixel-perfect"
            style={{
              left: `${burst.x - 3}px`,
              top: `${burst.y - 3}px`,
              width: '6px',
              height: '6px',
              backgroundColor: colorPalette.glitchColors[burst.id % 3],
              border: `1px solid ${colorPalette.accent}`,
              opacity: burst.life / 15,
              transform: `scale(${burst.intensity}) rotate(${burst.life * 24}deg)`,
              transition: 'none',
              imageRendering: 'pixelated',
              animation: glitchIntensity > 0 ? 'glitch-pop 0.1s ease-out' : 'none'
            }}
          />
        ))}

        {/* Cursor Core - Pixel Dot */}
        <div
          className="fixed pointer-events-none z-[9999] pixel-perfect"
          style={{
            left: `${position.x - 3}px`,
            top: `${position.y - 3}px`,
            transform: `scale(${cursorScale})`,
            transition: isHovering ? 'transform 0.1s ease-out' : 'none'
          }}
        >
          {/* Main cursor dot */}
          <div 
            className="w-[6px] h-[6px] pixel-perfect relative"
            style={{
              backgroundColor: colorPalette.secondary,
              border: `1px solid ${colorPalette.accent}`,
              imageRendering: 'pixelated',
              boxShadow: `2px 2px 0 ${colorPalette.accent}`,
              animation: isHovering ? 'pixel-blink 0.5s infinite' : 
                        glitchIntensity > 0 ? 'glitch-core 0.2s ease-out' : 'none'
            }}
          >
            {/* Inner glow effect */}
            <div 
              className="absolute inset-[1px] pixel-perfect"
              style={{
                backgroundColor: isClicked ? colorPalette.glitchColors[0] : colorPalette.primary,
                opacity: 0.8,
                imageRendering: 'pixelated'
              }}
            />
          </div>
          
          {/* Hover outline effect */}
          {isHovering && (
            <div 
              className="absolute -inset-1 border-2 pixel-perfect"
              style={{
                borderColor: colorPalette.primary,
                imageRendering: 'pixelated',
                animation: 'pixel-outline-pulse 0.6s infinite'
              }}
            />
          )}
        </div>
      </div>

      <style>{`
        @keyframes pixel-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.7; }
        }
        
        @keyframes glitch-core {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(1px, -1px); }
          60% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 1px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes glitch-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.5) rotate(90deg); }
          100% { transform: scale(0.8) rotate(180deg); }
        }
        
        @keyframes pixel-outline-pulse {
          0%, 100% { border-width: 2px; opacity: 1; }
          50% { border-width: 3px; opacity: 0.6; }
        }
        
        .pixel-perfect {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
    </>
  )
}