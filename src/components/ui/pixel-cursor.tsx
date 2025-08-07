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
  size: number
  rotation: number
  rotationSpeed: number
}

export const PixelCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 })
  const particleIdRef = useRef(0)
  const animationRef = useRef<number>()

  const gradientColors = ['#ff66cc', '#66ccff', '#ffffff']
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY
      
      setPosition({ x: newX, y: newY })
      
      // Calculate speed for dynamic emission
      const dx = newX - lastPosition.x
      const dy = newY - lastPosition.y
      const speed = Math.sqrt(dx * dx + dy * dy)
      
      // Create particles based on JSON spec - emit rate 50, but scale with speed
      if (speed > 0.5) {
        const baseEmitRate = 3 // Reduced from 50 for performance
        const particleCount = Math.min(Math.floor(baseEmitRate * (speed / 10)), 8)
        
        for (let i = 0; i < particleCount; i++) {
          // Random emit angle with 45-degree spread
          const baseAngle = Math.atan2(dy, dx)
          const spread = (45 * Math.PI / 180) // 45 degrees in radians
          const angle = baseAngle + (Math.random() - 0.5) * spread
          
          // Emit speed between 100-200 (scaled down for pixels)
          const emitSpeed = (100 + Math.random() * 100) * 0.5
          
          // Random size between 2-6px
          const size = 2 + Math.random() * 4
          
          // Random acceleration
          const accelX = (Math.random() - 0.5) * 100
          const accelY = (Math.random() - 0.5) * 100
          
          const newParticle: Particle = {
            id: particleIdRef.current++,
            x: newX,
            y: newY,
            vx: Math.cos(angle) * emitSpeed + accelX * 0.01,
            vy: Math.sin(angle) * emitSpeed + accelY * 0.01,
            life: 1,
            maxLife: 30 + Math.random() * 60, // 1.5-3 seconds at 60fps
            color: gradientColors[Math.floor(Math.random() * gradientColors.length)],
            size: size,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 360 // -180 to 180 degrees per second
          }
          
          setParticles(prev => [...prev.slice(-120), newParticle])
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

  // Animate particles and trail with physics from JSON spec
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev
          .map(particle => {
            // Apply physics according to JSON spec
            const gravityX = 0
            const gravityY = 300 * 0.016 // 300 units/s converted to per-frame at 60fps
            
            // Apply drag (0.05) and velocity decay (0.98)
            const newVx = particle.vx * 0.98 * (1 - 0.05)
            const newVy = (particle.vy * 0.98 * (1 - 0.05)) + gravityY
            
            return {
              ...particle,
              x: particle.x + newVx,
              y: particle.y + newVy,
              vx: newVx + gravityX,
              vy: newVy,
              rotation: particle.rotation + particle.rotationSpeed * 0.016, // Convert to per-frame
              life: particle.life - 1
            }
          })
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
            left: `${particle.x - particle.size/2}px`,
            top: `${particle.y - particle.size/2}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            border: '1px solid rgba(60, 42, 37, 0.5)',
            opacity: particle.life / particle.maxLife,
            transform: `rotate(${particle.rotation}deg)`,
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
            transition: 'none'
          }}
        />
      ))}
    </>
  )
}