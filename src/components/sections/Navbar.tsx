'use client';

import { useState } from 'react';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar';
import { Button } from '@heroui/button';
import Image from 'next/image';
import type { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
];

function smoothScroll(href: string) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    smoothScroll(href);
    setIsMenuOpen(false);
  };

  return (
    <HeroNavbar
      shouldHideOnScroll={false}
      isBlurred={true}
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'bg-bg-primary/80 backdrop-blur-lg border-b border-border/50',
        wrapper: 'px-4 sm:px-6 lg:px-8',
      }}
    >
      {/* Logo */}
      <NavbarBrand>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
          aria-label="Back to top"
        >
          <Image
            src="/logo.png"
            alt="BuyerRelay"
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </button>
      </NavbarBrand>

      {/* Desktop nav links - center */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <button
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Desktop CTAs - right */}
      <NavbarContent justify="end" className="hidden sm:flex gap-3">
        <NavbarItem>
          <Button
            variant="light"
            className="font-body text-sm font-medium text-text-secondary hover:text-primary rounded-full"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-primary text-white font-body text-sm font-medium rounded-full shadow-brand-sm hover:shadow-brand-md transition-shadow duration-200 active:scale-[0.97] transition-transform"
          >
            Book a Demo
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile hamburger toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden text-text-primary"
      />

      {/* Mobile slide-out menu */}
      <NavbarMenu className="bg-bg-primary/95 backdrop-blur-lg pt-6">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            <button
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left font-body text-base font-medium text-text-secondary hover:text-primary py-2 transition-colors duration-200"
            >
              {link.label}
            </button>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-4">
          <Button
            variant="light"
            className="w-full font-body text-sm font-medium text-text-secondary hover:text-primary rounded-full"
          >
            Login
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            className="w-full bg-primary text-white font-body text-sm font-medium rounded-full shadow-brand-sm"
          >
            Book a Demo
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
}
