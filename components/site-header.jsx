"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, school, images } from "@/data/school";
import Image from "next/image";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "";
    };
  }, [open]);
  return <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
    <div className="container header-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Dynamic English School home"><Image src={images.logo} alt="" width={45} height={45} priority /><span><strong>Dynamic</strong><small>English School</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>{navigation.map(([label, href]) => <Link className={pathname.startsWith(href) ? "active" : ""} href={href} key={href}>{label}</Link>)}</nav>
      <Link href="/admissions" className="button button-small header-cta">Admissions <ArrowUpRight size={16} /></Link>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={24} /></button>
    </div>
    {open && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation"><div className="mobile-menu-top"><span className="eyebrow">Explore the school</span><button className="menu-button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={24} /></button></div><nav><Link href="/" onClick={() => setOpen(false)}>Home</Link>{navigation.map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}</nav><Link href="/admissions" onClick={() => setOpen(false)} className="button button-dark">Make an enquiry <ArrowUpRight size={17} /></Link><p className="mobile-contact">{school.address}<br />{school.phones.join("  ·  ")}</p></div>}
  </header>;
}
