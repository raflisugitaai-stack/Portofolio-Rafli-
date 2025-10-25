"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-primary">
        Portofolio Saya
      </Link>
      <div className="space-x-4">
        <Button variant="ghost" asChild>
          <Link to="/">Beranda</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/about">Tentang Saya</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/projects">Proyek</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/contact">Kontak</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;