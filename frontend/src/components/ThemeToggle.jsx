import { useState, useEffect } from 'react'

// Decide which theme to start with: the saved choice, or the device's setting
function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Runs after every change to `theme`
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle