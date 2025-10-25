"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-foreground">Halo, Saya [Nama Anda]</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Seorang pengembang web yang bersemangat dengan fokus pada pembuatan pengalaman digital yang indah dan fungsional.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link to="/projects">Lihat Proyek Saya</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/contact">Hubungi Saya</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;