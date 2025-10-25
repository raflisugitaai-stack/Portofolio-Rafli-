"use client";

import React from "react"; // Menghapus useState dan useEffect
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Menghapus state profileImage dan useEffect karena gambar akan statis
  const staticProfileImage = "/placeholder.svg"; // Ganti dengan path gambar profil Anda, contoh: "/profile.jpg"

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="relative w-40 h-40 mb-8">
          <img
            src={staticProfileImage} // Menggunakan gambar profil statis
            alt="Foto Profil Muhammad Rafli Sugita"
            className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
          />
        </div>

        <h1 className="text-6xl font-extrabold mb-4 text-foreground leading-tight">
          Halo, Saya <span className="text-primary">Muhammad Rafli Sugita</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-4xl">
          Perkenalkan, saya Muhammad Rafli Sugita, lulusan S1 Ilmu Kelautan dari Universitas Syiah Kuala. Selama masa studi, saya aktif mengembangkan keterampilan kepemimpinan dan manajemen waktu melalui organisasi kemahasiswaan. Saya juga memiliki pengalaman sebagai Asisten Laboratorium, yang menumbuhkan kemampuan komunikasi, ketelitian, serta tanggung jawab dalam bekerja. Di samping itu, saya terbiasa menggunakan aplikasi Microsoft Office, seperti Word dan Excel, untuk mendukung produktivitas kerja.
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
    </Layout>
  );
};

export default HomePage;