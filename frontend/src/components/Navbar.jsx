import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        LAKSHYA<span>.</span>
      </a>

      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#preview">Preview</a>
        <a href="#faq">FAQ</a>
      </div>

      <div className="navbar-actions">
        <ThemeToggle />
        <a href="#get-started" className="navbar-cta">
          Get Started <span>↗</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar