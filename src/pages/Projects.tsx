"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import GenerativeAIProjectCard from "@/components/GenerativeAIProjectCard"; // Menggunakan komponen baru

const ProjectsPage = () => {
  const projects = [
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
    {
      title: "Platform Desain UI/UX Berbasis AI",
      description: "Alat yang menghasilkan prototipe desain antarmuka pengguna berdasarkan preferensi dan data pengguna.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sistem Rekomendasi Musik Generatif",
      description: "Menciptakan melodi dan harmoni baru berdasarkan preferensi musik pengguna.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Chatbot Interaktif dengan AI Percakapan",
      description: "Mengembangkan chatbot yang dapat berinteraksi secara alami dan menghasilkan respons yang relevan.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Layout>
      <div className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Proyek Generative AI Saya</h2>
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