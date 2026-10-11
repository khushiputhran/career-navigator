function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a href="#" className="footer-logo">
          LAKSHYA<span>.</span>
        </a>

        <p>
          Find your direction.
          <br />
          Build your future.
        </p>
      </div>

      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#get-started">Get started</a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} LAKSHYA</span>
        <span>Built with purpose. 💗</span>
      </div>
    </footer>
  )
}

export default Footer