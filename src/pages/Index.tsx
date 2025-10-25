"use client";

import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem("profileImage", base64String);
        showSuccess("Foto profil berhasil diunggah!");
      };
      reader.onerror = () => {
        showError("Gagal mengunggah foto profil.");
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
        <div className="relative w-40 h-40 mb-8 group">
          <img
            src={profileImage || "/placeholder.svg"}
            alt="Foto Profil Muhammad Rafli Sugita"
            className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white hover:text-primary mr-2"
              onClick={handleButtonClick}
              aria-label="Unggah Foto"
            >
              <CameraIcon className="h-6 w-6" />
            </Button>
            {profileImage && (
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white hover:text-destructive"
                onClick={handleRemoveImage}
                aria-label="Hapus Foto"
              >
                <Trash2 className="h-6 w-6" />
              </Button>
            )}
          </div>
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