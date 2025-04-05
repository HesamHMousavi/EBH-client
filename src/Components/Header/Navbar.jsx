import React, { useState, useEffect } from "react";
import fullLogo from "../../Images/logo.png";
import smallLogo from "../../Images/logo.png";
import { Link } from "react-router-dom"; // Corrected import
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

const Header = () => {
  const nav = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to update state when resizing
    const handleResize = () => {
      if (Number(window.innerWidth) < 1110) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className={`nav`}>
        <Link to='/balloons' onClick={() => setMenuOpen(false)}>
          Balloons
        </Link>
        <Link to='/bouquets ' onClick={() => setMenuOpen(false)}>
          Bouquets
        </Link>
        <Link to='/bloomandboxes' onClick={() => setMenuOpen(false)}>
          Bloom & Bubbles
        </Link>
      </nav>
      <img
        alt=''
        src={scrolled ? smallLogo : fullLogo}
        onClick={() => nav("/")}
        className={`logo ${!scrolled ? "" : ""}`}
      />
      <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        <RxHamburgerMenu color='#333' size={30} />
      </button>
      <nav className={`nav`}>
        <Link to='/hatboxes' onClick={() => setMenuOpen(false)}>
          Hat Boxes
        </Link>

        <Link to='/funeral' onClick={() => setMenuOpen(false)}>
          Funeral Flowers
        </Link>
        <Link to='/about' onClick={() => setMenuOpen(false)}>
          About
        </Link>
      </nav>

      <nav className={`nav ${menuOpen ? "open" : "dis-none"} `}>
        <Link to='/' onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to='/balloons' onClick={() => setMenuOpen(false)}>
          Balloons
        </Link>
        <Link to='/bouquets' onClick={() => setMenuOpen(false)}>
          Bouquets
        </Link>
        <Link to='/bloomandboxes' onClick={() => setMenuOpen(false)}>
          Bloom & Bubbles
        </Link>
        <Link to='/hatboxes' onClick={() => setMenuOpen(false)}>
          Hat Boxes
        </Link>
        <Link to='/funeral' onClick={() => setMenuOpen(false)}>
          Funeral Flowers
        </Link>
        <Link to='/about' onClick={() => setMenuOpen(false)}>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
