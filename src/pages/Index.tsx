"use client";

import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
        {/* Baris teks yang dihapus */}
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