'use client'

import { useEffect, useRef } from 'react'
import styles from './Portfolio.module.css'

/*
 * Fixed full-screen starfield behind the page: white specks of varying
 * size and brightness that drift slowly upward and gently twinkle.
 * Bigger stars move a little faster for a soft parallax feel.
 * With prefers-reduced-motion the stars are drawn once and stay still.
 */
export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars = []
    let w = 0
    let h = 0
    let raf = 0

    const makeStar = (y) => {
      // most stars are tiny; a few are bright and larger
      const size = Math.random() < 0.06 ? 1.2 + Math.random() * 0.9 : 0.35 + Math.random() * 0.8
      return {
        x: Math.random() * w,
        y: y ?? Math.random() * h,
        r: size,
        a: 0.35 + Math.random() * 0.65,
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
        const twinkle = 0.75 + 0.25 * Math.sin(s.tw)
        ctx.globalAlpha = s.a * twinkle
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
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
