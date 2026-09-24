import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { Code2, Sun, Moon, Menu, X, Rocket } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenQuickstart }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">
            <Code2 size={22} color="#ffffff" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{siteConfig.name}</span>
            <Badge size="sm" variant="glow">STARTER</Badge>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
            Overview
          </NavLink>
          <NavLink to="/quickstart" className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
            Quickstart
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
            Catalog
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
            API & State
          </NavLink>
          <NavLink to="/demo" className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
            Sample App
          </NavLink>
        </nav>

        {/* Actions & Theme Toggle */}
        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button
            size="sm"
            variant="gradient"
            iconLeft={Rocket}
            onClick={onOpenQuickstart}
          >
            Use Template
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="mobile-burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <NavLink to="/" end className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Overview
          </NavLink>
          <NavLink to="/quickstart" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Quickstart
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Catalog
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            API & State
          </NavLink>
          <NavLink to="/demo" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Sample App
          </NavLink>
        </div>
      )}
    </header>
  );
}
