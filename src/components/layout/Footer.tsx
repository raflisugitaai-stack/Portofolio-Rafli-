"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border p-4 text-center text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Portofolio Saya. Semua Hak Dilindungi.</p>
      <MadeWithDyad />
    </footer>
  );
};

export default Footer;