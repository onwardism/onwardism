'use client'

import { useState, useEffect } from 'react'

interface TextTypeProps {
  text: string[]
  typingSpeed?: number
  pauseDuration?: number
  showCursor?: boolean
  cursorCharacter?: string
  className?: string
}

export default function TextType({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  className = ''
}: TextTypeProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = text[currentTextIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentCharIndex < currentText.length) {
          setCurrentCharIndex(prev => prev + 1)
        } else {
          // Finished typing current text, pause before deleting
          setIsPaused(true)
        }
      } else {
        // Deleting backward
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex(prev => (prev + 1) % text.length)
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentTextIndex, currentCharIndex, isDeleting, isPaused, text, typingSpeed, pauseDuration])

  const displayText = text[currentTextIndex].substring(0, currentCharIndex)
  const cursor = showCursor ? (
    <span className="animate-pulse">{cursorCharacter}</span>
  ) : null

  return (
    <span className={className}>
      {displayText}
      {cursor}
    </span>
  )
}