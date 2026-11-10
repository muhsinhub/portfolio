'use client'

import { useEffect, useRef } from 'react'
import styles from './Portfolio.module.css'

/*
 * Fixed full-screen "falling code" background in monochrome: columns of
 * grey characters slide slowly down the screen, each with a brighter head
 * and a fading trail. Characters occasionally flicker to a new glyph.
 * Kept dim (see .codeRain opacity) so it never competes with the content.
 * With prefers-reduced-motion a single still frame is drawn.
 */
const GLYPHS =
  'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnrsty0123456789#$%&*+=<>?@§¶±№¤' +
  'БГДЖЗИЙЛПФЦЧШЩЪЫЬЭЮЯђћџЉЊЋЏЂЃЄЅІЇЈ'

const pick = () => GLYPHS[(Math.random() * GLYPHS.length) | 0]

export default function CodeRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const family = getComputedStyle(document.body).fontFamily || 'monospace'
    let w = 0, h = 0, size = 16, rows = 0
    let cols = []
    let raf = 0
    let last = 0

    const newDrop = (col, fromTop) => {
      col.len = 8 + ((Math.random() * 22) | 0) // trail length in rows
      col.speed = 2.5 + Math.random() * 5 // rows per second
      col.y = fromTop ? -Math.random() * rows * 0.6 : Math.random() * (rows + col.len)
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
      size = w < 600 ? 13 : 16
      rows = Math.ceil(h / size) + 1
      const count = Math.ceil(w / (size * 1.15))
      cols = Array.from({ length: count }, (_, i) => {
        const col = {
          x: i * size * 1.15,
          depth: 0.35 + Math.random() * 0.65, // farther columns are dimmer
          glyphs: Array.from({ length: rows }, pick),
        }
        newDrop(col, false)
        return col
      })
      ctx.font = `${size}px ${family}`
      ctx.textBaseline = 'top'
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const c of cols) {
        const head = Math.floor(c.y)
        for (let k = 0; k < c.len; k++) {
          const r = head - k
          if (r < 0 || r >= rows) continue
          const fade = Math.pow(1 - k / c.len, 1.4)
          ctx.globalAlpha = c.depth * fade
          ctx.fillStyle = k === 0 ? '#f4f4f5' : '#9b9ba1'
          ctx.fillText(c.glyphs[r], c.x, r * size)
        }
      }
      ctx.globalAlpha = 1
    }

    const step = (t) => {
      raf = requestAnimationFrame(step)
      const dt = Math.min((t - last) / 1000, 0.1)
      if (dt < 1 / 30) return // ~30fps is plenty for slow motion
      last = t
      for (const c of cols) {
        c.y += c.speed * dt
        if (c.y - c.len > rows) newDrop(c, true)
        if (Math.random() < 0.08) c.glyphs[(Math.random() * rows) | 0] = pick()
      }
      draw()
    }

    resize()
    if (still) draw()
    else raf = requestAnimationFrame((t) => { last = t; step(t) })

    const onResize = () => { resize(); if (still) draw() }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`${styles.starfield} ${styles.codeRain}`} aria-hidden="true" />
}
