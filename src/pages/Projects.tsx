"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import GenerativeAIProjectCard from "@/components/GenerativeAIProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Tugas 1 – Studi Kasus AI di Bidang Tertentu",
      description: "Analisis mendalam tentang penerapan Generative AI dalam industri spesifik, menyoroti tantangan dan solusi inovatif.",
      imageUrl: "/tugas1-ai-pertanian.png", // Menggunakan gambar yang diunggah
      liveUrl: "#", // Ganti dengan URL detail proyek jika ada
    },
    {
      title: "Tugas 2 – Konten Carousel Instagram",
      description: "Pembuatan serangkaian konten visual dan teks untuk Instagram menggunakan Generative AI, dirancang untuk engagement tinggi.",
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
    },
    {
      title: "Tugas 3 – Branding Visual dan Konten Carousel",
      description: "Pengembangan identitas visual lengkap dan konten carousel yang kohesif untuk merek, didukung oleh alat Generative AI.",
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
    },
    {
      title: "Tugas 4 – Pembuatan Komik dengan AI",
      description: "Proses kreatif pembuatan komik dari skrip hingga visualisasi panel menggunakan teknologi Generative AI.",
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
    },
    {
      title: "Tugas 5 – Mp3 Jingle UMKM",
      description: "Penciptaan jingle audio yang unik dan menarik untuk Usaha Mikro, Kecil, dan Menengah (UMKM) menggunakan Generative AI.",
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
    },
    {
      title: "Tugas 6 – Video Generator",
      description: "Pengembangan sistem atau aplikasi yang mampu menghasilkan video pendek dari input teks atau data tertentu.",
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
    },
    {
      title: "Tugas 7 – Short Movie",
      description: "Produksi film pendek dengan bantuan Generative AI untuk skenario, visual, atau elemen kreatif lainnya.",
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
    },
  ];

  return (
    <Layout>
      <div className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Proyek Portofolio Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <GenerativeAIProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;