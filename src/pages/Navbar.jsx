import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const styles = {
    navbar: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 5px 3px rgba(0, 0, 0, 0.1)'
    },
    navbarContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    navbarContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: '600',
      fontFamily: "'Pilcrow Rounded', sans-serif",
      color: '#111827',
      textDecoration: 'none'
    },
    logoAccent: {
      color: '#2563eb'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: '#111827',
      textDecoration: 'none',
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
      fontWeight: '400',
      fontFamily: "'Hind', sans-serif",
      fontWeight:'600',
      transition: 'all 0.2s ease',
      borderRadius: '0.375rem',
      position: 'relative'
    },
    ctaButton: {
      backgroundColor: '#f3f4f6',
      color: '#111827',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      fontFamily: "'Pilcrow Rounded', sans-serif",
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      transition: 'background-color 0.2s ease'
    },
    hamburger: {
      width: '24px',
      height: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    hamburgerSpan: {
      display: 'block',
      height: '2px',
      width: '100%',
      backgroundColor: '#111827',
      transition: 'all 0.3s ease'
    },
    mobileMenu: {
      display: isMobileMenuOpen ? 'block' : 'none',
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      padding: '1rem'
    },
    mobileNavLinks: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      margin: 0,
      padding: 0
    },
    mobileNavLink: {
      color: '#111827',
      textDecoration: 'none',
      padding: '0.75rem',
      fontWeight: '400',
      fontFamily: "'Hind', sans-serif",
      borderRadius: '0.375rem',
      transition: 'background-color 0.2s ease',
      display: 'block'
    },
    mobileCta: {
      marginTop: '1rem'
    },
    mobileCtaButton: {
      width: '100%',
      backgroundColor: '#f3f4f6',
      color: '#111827',
      padding: '0.75rem 1rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontWeight: '600',
      fontFamily: "'Pilcrow Rounded', sans-serif",
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    }
  };

  // CSS for hover effects and responsive design
  const cssStyles = `
    @import url('https://api.fontshare.com/v2/css?f[]=hind@400&f[]=pilcrow-rounded@600&display=swap');
    
    .nav-link {
      position: relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 3px;
      border-radius:50px;
      background-color: #2563eb;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    .nav-link:hover {
      color: #2563eb !important;
    }
    
    .nav-link:hover::after {
      width: 20%;
    }
    
    .cta-button:hover {
      background-color: #e5e7eb !important;
    }
    
    .mobile-menu-btn:hover {
      background-color: #f3f4f6 !important;
    }
    
    .mobile-nav-link:hover {
      background-color: #f3f4f6 !important;
    }
    
    .mobile-cta-button:hover {
      background-color: #e5e7eb !important;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        display: none !important;
      }
      
      .cta-button {
        display: none !important;
      }
      
      .mobile-menu-btn {
        display: block !important;
      }
    }
  `;

  return (
    <>
      <style>{cssStyles}</style>
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <div style={styles.navbarContent}>
            {/* Logo */}
            <a href="#" style={styles.logo}>
              Yajurva<span style={styles.logoAccent}>*</span>
            </a>

            {/* Desktop Navigation */}
            <ul style={styles.navLinks} className="nav-links">
              <li>
                <a href="#" style={styles.navLink} className="nav-link">
                  Design
                </a>
              </li>

              <li>
                <a href="#" style={styles.navLink} className="nav-link">
                  Development
                </a>
              </li>
              <li>
                <a href="#" style={styles.navLink} className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" style={styles.navLink} className="nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" style={styles.navLink} className="nav-link">
                  Contact
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <button style={styles.ctaButton} className="cta-button">
              HIRE US!
            </button>

            {/* Mobile Menu Button */}
            <button 
              style={styles.mobileMenuBtn} 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
            >
              <div style={styles.hamburger}>
                <span style={styles.hamburgerSpan}></span>
                <span style={styles.hamburgerSpan}></span>
                <span style={styles.hamburgerSpan}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div style={styles.mobileMenu}>
            <ul style={styles.mobileNavLinks}>
              <li>
                <a href="#" style={styles.mobileNavLink} className="mobile-nav-link">
                  Design
                </a>
              </li>
              
              <li>
                <a href="#" style={styles.mobileNavLink} className="mobile-nav-link">
                  Development
                </a>
              </li>
              <li>
                <a href="#" style={styles.mobileNavLink} className="mobile-nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" style={styles.mobileNavLink} className="mobile-nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" style={styles.mobileNavLink} className="mobile-nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div style={styles.mobileCta}>
              <button style={styles.mobileCtaButton} className="mobile-cta-button">
                HIRE US!
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}