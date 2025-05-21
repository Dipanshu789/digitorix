import React from "react";

export default function Footer() {
  return (
    <footer className="footer-custom bg-dark text-white mt-5 pt-4 pb-2 position-relative">
      {/* Decorative color parts */}
      <div className="color-part2"></div>
      <div className="color-part"></div>
      <div className="container-fluid">
        <div className="row block-content">
          {/* Logo & About */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <img src="/digitornix.png" width="160" alt="Digitornix" className="mb-2" />
            <p>
              Next-gen IT consulting, digital solutions, and custom software development.
            </p>
            <div className="footer-icons mb-2">
              <a href="https://x.com/DipanshuSa74918" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter-square fa-2x mx-1"></i>
              </a>
              <a href="https://www.instagram.com/dipanshu.uu/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram fa-2x mx-1"></i>
              </a>
              <a href="http://www.youtube.com/@funnydaspallia667" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube-square fa-2x mx-1"></i>
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+917852979968&text=Hello this is the starting message"
              className="btn btn-danger btn-sm mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT US TODAY
            </a>
          </div>
          {/* What We Offer */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h5 className="text-light">WHAT WE OFFER</h5>
            <nav className="footer-nav d-flex flex-column">
              <a href="#" className="footer-link">Custom Web & App Development</a>
              <a href="#" className="footer-link">Trading</a>
              <a href="#" className="footer-link">Tele Caller</a>
               <a href="#" className="footer-link">Data Analytics</a>
                <a href="#" className="footer-link">IT Consulting</a>
             
            </nav>
          </div>
          {/* Main Links */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h5 className="text-light">MAIN LINKS</h5>
            <nav className="footer-nav d-flex flex-column">
              <a href="/" className="footer-link">Home</a>
              <a href="/services" className="footer-link">Services</a>
              <a href="/blog" className="footer-link">Blog</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/contact" className="footer-link">Contact</a>
            </nav>
          </div>
          {/* Contact Info */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <h5 className="text-secondary">CONTACT INFO</h5>
            <div className="contact-info mt-2">
              <div>
                <i className="fa fa-location-arrow fa-fw me-2" style={{ color: "#fff" }}></i>
                <strong>Digitornix</strong><br />
                Daspalla 752084, Odisha, India
              </div>
              <div>
                <i className="fa fa-phone fa-fw me-2" style={{ color: "#fff" }}></i>
                <strong>+91-7852979968</strong>
              </div>
              <div>
                <i className="fa fa-envelope fa-fw me-2" style={{ color: "#fff" }}></i>
                <strong>bullgreeninfo@gmail.com</strong>
              </div>
              <div>
                <i className="fa fa-clock-o fa-fw me-2" style={{ color: "#fff" }}></i>
                <strong>Mon - Sun 24 HOURS</strong>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12 text-center small text-muted">
            <a id="to-top" href="#this-is-top" className="text-light me-2">
              <i className="fa fa-chevron-up"></i>
            </a>
            Created by Dipanshu Sahoo &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
      {/* Optional: Add your custom CSS for .color-part, .color-part2, .footer-link, etc. */}
    </footer>
  );
}