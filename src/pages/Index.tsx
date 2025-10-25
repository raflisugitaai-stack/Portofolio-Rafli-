"use client";

import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GenerativeAIProjectCard from "@/components/GenerativeAIProjectCard";
import { Separator } from "@/components/ui/separator";
import { CameraIcon, Trash2 } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";

const HomePage = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        showError("Hanya file gambar yang diizinkan.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileImage(result);
        localStorage.setItem("profileImage", result);
        showSuccess("Foto profil berhasil diunggah!");
      };
      reader.onerror = () => {
        showError("Gagal membaca file gambar.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    localStorage.removeItem("profileImage");
    showSuccess("Foto profil berhasil dihapus!");
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

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
        <div className="relative w-40 h-40 mb-8">
          <img
            src={profileImage || "/placeholder.svg"}
            alt="Foto Profil Muhammad Rafli Sugita"
            className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute bottom-0 right-0 rounded-full w-10 h-10"
            onClick={handleButtonClick}
            aria-label="Unggah Foto Profil"
          >
            <CameraIcon className="h-5 w-5" />
          </Button>
          {profileImage && (
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-0 right-0 rounded-full w-8 h-8"
              onClick={handleRemoveImage}
              aria-label="Hapus Foto Profil"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>

        <h1 className="text-6xl font-extrabold mb-4 text-foreground leading-tight">
          Halo, Saya <span className="text-primary">Muhammad Rafli Sugita</span>
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