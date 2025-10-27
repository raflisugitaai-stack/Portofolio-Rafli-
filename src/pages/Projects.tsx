"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import GenerativeAIProjectCard from "@/components/GenerativeAIProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Tugas 1 – Studi Kasus AI di Bidang Tertentu",
      description: "Analisis mendalam tentang penerapan Generative AI dalam industri spesifik, menyoroti tantangan dan solusi inovatif.",
      imageUrl: "/tugas1-ai-case-study.png", // Menggunakan gambar yang baru diunggah
      liveUrl: "https://docs.google.com/presentation/d/11XsUdibnxwEdNXtWvfQlIQtXngj4kTU0/edit?usp=drive_link&ouid=106638102450918179473&rtpof=true&sd=true", // Tautan Google Slides yang diperbarui
    },
    {
      title: "Tugas 2 – Konten Carousel Instagram",
      description: "Pembuatan serangkaian konten visual dan teks untuk Instagram menggunakan Generative AI, dirancang untuk engagement tinggi.",
      imageUrl: "/tugas2-carousel-instagram.png", // Menggunakan gambar yang diunggah
      liveUrl: "https://drive.google.com/drive/folders/1p_kmdRfJZigZZU-jTDafmVrH0jJwhE5W?usp=drive_link", // Tautan Google Drive baru
    },
    {
      title: "Tugas 3 – Branding Visual dan Konten Carousel",
      description: "Pengembangan identitas visual lengkap dan konten carousel yang kohesif untuk merek, didukung oleh alat Generative AI.",
      imageUrl: "/tugas3-branding-visual.png", // Menggunakan gambar yang diunggah
      liveUrl: "https://drive.google.com/drive/folders/1MRV1sf1WqaWnYpQljzBoscLI2tYcrjwV?usp=drive_link",
    },
    {
      title: "Tugas 4 – Pembuatan Komik dengan AI",
      description: "Proses kreatif pembuatan komik dari skrip hingga visualisasi panel menggunakan teknologi Generative AI.",
      imageUrl: "/tugas4-komik-ai.png", // Menggunakan gambar yang diunggah
      liveUrl: "https://drive.google.com/drive/folders/1DhIm2osD6BXL9aOgbLPrFdc7deGekjdM?usp=drive_link",
    },
    {
      title: "Tugas 5 – Mp3 Jingle UMKM",
      description: "Penciptaan jingle audio yang unik dan menarik untuk Usaha Mikro, Kecil, dan Menengah (UMKM) menggunakan Generative AI.",
      imageUrl: "/tugas5-mp3-jingle-umkm.png",
      liveUrl: "https://drive.google.com/drive/folders/1pPrynijsdXRfC8rMmuvQcndp_SgMUWjH?usp=drive_link",
    },
    {
      title: "Tugas 6 – Video Generator",
      description: "Pengembangan sistem atau aplikasi yang mampu menghasilkan video pendek dari input teks atau data tertentu.",
      imageUrl: "/tugas6-video-generator.png", // Menggunakan gambar yang diunggah
      liveUrl: "https://drive.google.com/drive/folders/1DFoWvIzeDOtsYv-xSC2ZVVCWEU97AUKG?usp=drive_link",
    },
    {
      title: "Tugas 7 – Short Movie",
      description: "Produksi film pendek dengan bantuan Generative AI untuk skenario, visual, atau elemen kreatif lainnya.",
      imageUrl: "/tugas7-short-movie.png",
      liveUrl: "https://drive.google.com/drive/folders/1CmwOAhAj1xr1P9o3rwZmQ2UL3Rpv6PJM?usp=drive_link",
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