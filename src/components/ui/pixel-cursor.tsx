import { useEffect, useState, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
}

export const PixelCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 })
  const particleIdRef = useRef(0)
  const animationRef = useRef<number>()

  const colors = ['#CFEA6F', '#80A6F5', '#3C2A25']
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY
      
      setPosition({ x: newX, y: newY })
      
      // Calculate speed
      const dx = newX - lastPosition.x
      const dy = newY - lastPosition.y
      const speed = Math.sqrt(dx * dx + dy * dy)
      
      // Create particles based on speed
      if (speed > 1) {
        const particleCount = Math.min(Math.floor(speed / 8), 12)
        
        for (let i = 0; i < particleCount; i++) {
          const angle = Math.random() * Math.PI * 2
          const velocity = (speed * 0.3) + Math.random() * 4
          
          const newParticle: Particle = {
            id: particleIdRef.current++,
            x: newX + (Math.random() - 0.5) * 16,
            y: newY + (Math.random() - 0.5) * 16,
            vx: Math.cos(angle) * velocity + dx * 0.2,
            vy: Math.sin(angle) * velocity + dy * 0.2,
            life: 1,
            maxLife: 45 + Math.random() * 25,
            color: colors[Math.floor(Math.random() * colors.length)]
          }
          
          setParticles(prev => [...prev.slice(-60), newParticle])
        }
      }
      
      // Update trail
      setTrail(prev => [
        ...prev.slice(-8),
        { x: newX, y: newY, id: Date.now() + Math.random() }
      ])
      
      setLastPosition({ x: newX, y: newY })
    }

    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [lastPosition])

  // Animate particles and trail
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.96,
            vy: particle.vy * 0.96 + 0.3, // gravity
            life: particle.life - 1
          }))
          .filter(particle => particle.life > 0)
      )
      
      // Fade out trail
      setTrail(prev => prev.slice(-6))
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
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
      `}</style>
      
      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9997] pixel-perfect"
          style={{
            left: `${point.x - 2}px`,
            top: `${point.y - 2}px`,
            width: '4px',
            height: '4px',
            backgroundColor: '#CFEA6F',
            border: '1px solid #3C2A25',
            opacity: (index + 1) / trail.length * 0.6,
            transition: 'none'
          }}
        />
      ))}

      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x - 8}px`,
          top: `${position.y - 8}px`,
          transition: 'none'
        }}
      >
        <div className="w-4 h-4 bg-pixel-dark border-2 border-pixel-lime pixel-perfect relative">
          <div className="absolute inset-[1px] bg-pixel-lime border border-pixel-dark pixel-perfect animate-pulse"></div>
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-pixel-blue border border-pixel-dark pixel-perfect"></div>
        </div>
      </div>

      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] pixel-perfect"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: '3px',
            height: '3px',
            backgroundColor: particle.color,
            border: '1px solid #3C2A25',
            opacity: particle.life / particle.maxLife,
            transition: 'none'
          }}
        />
      ))}
    </>
  )
}