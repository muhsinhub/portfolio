'use client'

import { useEffect, useRef } from 'react'
import styles from './Portfolio.module.css'

/*
 * Fixed full-screen starfield behind the page: white specks of varying
 * size and brightness that drift slowly upward and gently twinkle.
 * Bigger stars move a little faster for a soft parallax feel. Each star is
 * a small bright core with a soft glow, drawn from one pre-rendered sprite.
 * With prefers-reduced-motion the stars are drawn once and stay still.
 */
export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars = []

    // glow sprite: tiny white core fading into a soft halo
    const sprite = document.createElement('canvas')
    sprite.width = sprite.height = 64
    const sctx = sprite.getContext('2d')
    const g = sctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.12, 'rgba(255,255,255,0.95)')
    g.addColorStop(0.25, 'rgba(255,255,255,0.5)')
    g.addColorStop(0.5, 'rgba(255,255,255,0.16)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    sctx.fillStyle = g
    sctx.fillRect(0, 0, 64, 64)

    let w = 0
    let h = 0
    let raf = 0

    const makeStar = (y) => {
      // most stars are tiny; a few are bright and larger
      const size = Math.random() < 0.08 ? 1.1 + Math.random() * 0.7 : 0.45 + Math.random() * 0.6
      return {
        x: Math.random() * w,
        y: y ?? Math.random() * h,
        r: size,
        a: 0.6 + Math.random() * 0.4,
        tw: Math.random() * Math.PI * 2, // twinkle phase
        ts: 0.004 + Math.random() * 0.012, // twinkle speed
        vy: -(0.03 + size * 0.06), // px per frame, upward drift
        vx: (Math.random() - 0.5) * 0.02,
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(650, Math.round((w * h) / 2600))
      stars = Array.from({ length: count }, () => makeStar())
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        const twinkle = 0.7 + 0.3 * Math.sin(s.tw)
        ctx.globalAlpha = s.a * twinkle
        const d = s.r * 11 // halo diameter; the bright core stays ~1–3px
        ctx.drawImage(sprite, s.x - d / 2, s.y - d / 2, d, d)
      }
      ctx.globalAlpha = 1
    }

    const step = () => {
      for (const s of stars) {
        s.y += s.vy
        s.x += s.vx
        s.tw += s.ts
        if (s.y < -3) Object.assign(s, makeStar(h + 3))
        if (s.x < -3) s.x = w + 3
        else if (s.x > w + 3) s.x = -3
      }
      draw()
      raf = requestAnimationFrame(step)
    }

    resize()
    if (still) draw()
    else raf = requestAnimationFrame(step)

    const onResize = () => { resize(); if (still) draw() }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.starfield} aria-hidden="true" />
}
