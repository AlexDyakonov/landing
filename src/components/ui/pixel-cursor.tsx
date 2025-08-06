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
      if (speed > 2) {
        const particleCount = Math.min(Math.floor(speed / 10), 8)
        
        for (let i = 0; i < particleCount; i++) {
          const angle = Math.random() * Math.PI * 2
          const velocity = speed * 0.2 + Math.random() * 3
          
          const newParticle: Particle = {
            id: particleIdRef.current++,
            x: newX + (Math.random() - 0.5) * 20,
            y: newY + (Math.random() - 0.5) * 20,
            vx: Math.cos(angle) * velocity + dx * 0.1,
            vy: Math.sin(angle) * velocity + dy * 0.1,
            life: 1,
            maxLife: 60 + Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)]
          }
          
          setParticles(prev => [...prev.slice(-50), newParticle])
        }
      }
      
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

  // Animate particles
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98 + 0.2, // gravity
            life: particle.life - 1
          }))
          .filter(particle => particle.life > 0)
      )
      
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
      
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x - 8}px`,
          top: `${position.y - 8}px`,
          transition: 'none'
        }}
      >
        <div className="w-4 h-4 bg-pixel-dark border border-pixel-lime pixel-perfect relative">
          <div className="absolute inset-0 border border-pixel-blue pixel-perfect animate-pulse"></div>
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