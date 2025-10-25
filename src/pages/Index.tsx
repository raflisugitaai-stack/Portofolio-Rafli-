"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GenerativeAIProjectCard from "@/components/GenerativeAIProjectCard";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  const featuredProjects = [
    {
      title: "Generator Gambar AI",
      description: "Membuat gambar unik dari deskripsi teks menggunakan model difusi canggih.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Pembuat Video Otomatis",
      description: "Mengubah skrip teks menjadi video dinamis dengan narasi dan visual yang dihasilkan AI.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Asisten Penulisan Teks AI",
      description: "Membantu pembuatan konten, ringkasan, dan ide tulisan dengan model bahasa besar.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img
          src="/placeholder.svg" // Ganti dengan URL foto profil profesional Anda
          alt="Foto Profil [Nama Anda]"
          className="w-40 h-40 rounded-full object-cover mb-8 border-4 border-primary shadow-lg"
        />
        <h1 className="text-6xl font-extrabold mb-4 text-foreground leading-tight">
          Halo, Saya <span className="text-primary">[Nama Anda]</span>
        </h1>
        <p className="text-2xl text-muted-foreground mb-8 max-w-3xl font-light">
          Pakar Generative AI & Inovasi Digital, Membangun Masa Depan Kreatif dengan Teknologi.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-4xl">
          Dengan latar belakang yang kuat dalam pengembangan perangkat lunak dan kecerdasan buatan, saya bersemangat untuk menciptakan solusi inovatif yang mendorong batas-batas kreativitas digital. Saya fokus pada pengembangan aplikasi yang memanfaatkan kekuatan Generative AI untuk menghasilkan konten yang unik dan bermakna.
        </p>
        <div className="space-x-4 mb-20">
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/projects">Lihat Proyek Saya</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/contact">Hubungi Saya</Link>
          </Button>
        </div>
      </div>

      <Separator className="my-12 max-w-6xl mx-auto" />

      <section className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Proyek Unggulan Generative AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <GenerativeAIProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/projects">Lihat Semua Proyek</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;