"use client"

import type React from "react"
import { useState, useEffect } from "react"

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  }

  const cardStyle: React.CSSProperties = {
    width: isMobile ? "300px" : "350px",
    height: isMobile ? "220px" : "250px",
    perspective: "1000px",
    cursor: "pointer",
  }

  const cardInnerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  }

  const cardFaceStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    boxSizing: "border-box",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "500",
    lineHeight: "1.4",
  }

  const frontStyle: React.CSSProperties = {
    ...cardFaceStyle,
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "2px solid #e1e5e9",
  }

  const backStyle: React.CSSProperties = {
    ...cardFaceStyle,
    backgroundColor: "#f0f9ff",
    color: "#0369a1",
    border: "2px solid #bae6fd",
    transform: "rotateY(180deg)",
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle} onClick={handleFlip}>
        <div style={cardInnerStyle}>
          <div style={frontStyle}>💸 Can I withdraw from my TFSA whenever I want?</div>
          <div style={backStyle}>✅ Yes — but you lose that contribution space until next tax year.</div>
        </div>
      </div>
    </div>
  )
}
