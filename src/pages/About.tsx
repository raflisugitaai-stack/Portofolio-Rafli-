"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-12 px-4">
        {/* Bagian Hero dengan Foto Profil dan Ajakan Bertindak */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <img
            src="/placeholder.svg" // Menggunakan placeholder untuk foto profil profesional
            alt="Foto Profil Lulusan Ilmu Kelautan"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg mb-6"
          />
          <h2 className="text-5xl font-extrabold mb-4 text-foreground leading-tight">
            Mengenal Saya: <span className="text-primary">Pencinta Laut & Inovator</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl font-light">
            Lulusan Ilmu Kelautan yang bersemangat untuk menjaga dan memahami lautan kita melalui sains dan teknologi.
          </p>
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/contact">Hubungi Saya</Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Perkenalan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Halo! Nama saya <span className="font-semibold text-foreground">[Nama Anda]</span>. Sebagai lulusan baru Ilmu Kelautan, saya memiliki hasrat mendalam untuk berkontribusi pada kelestarian laut, penelitian kelautan, dan penerapan teknologi maritim modern. Saya percaya pada pendekatan yang tenang, cerdas, dan berkelas dalam setiap proyek yang saya tangani, memastikan hasil yang inovatif dan berkualitas tinggi untuk masa depan laut yang berkelanjutan. Saya adalah individu yang memiliki rasa ingin tahu tinggi, berkomitmen pada kerja sama tim, dan berdedikasi penuh terhadap kelestarian lingkungan.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Keterampilan & Alat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Keterampilan (Skills)</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Analisis Data Oseanografi</li>
                    <li>Pemetaan Laut (GIS)</li>
                    <li>Penelitian Terumbu Karang</li>
                    <li>Konservasi Ekosistem Laut</li>
                    <li>Komunikasi Ilmiah</li>
                    <li>Pemodelan Data Lingkungan</li>
                    <li>Penginderaan Jauh Kelautan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Alat & Teknologi (Tools)</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>ArcGIS / QGIS</li>
                    <li>R / Python (untuk analisis data)</li>
                    <li>Microsoft Office Suite</li>
                    <li>Drone & ROV (konseptual/pengenalan)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Pengalaman & Visi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Selama studi saya di Ilmu Kelautan, saya aktif terlibat dalam berbagai proyek penelitian yang berfokus pada konservasi ekosistem laut dan pemanfaatan teknologi untuk pemantauan lingkungan. Saya memiliki pengalaman dalam pengumpulan dan analisis data oseanografi, pemetaan habitat laut, serta penelitian terumbu karang. Saya bersemangat untuk menerapkan pengetahuan dan keterampilan saya dalam pemodelan data, penginderaan jauh, dan bahkan potensi Kecerdasan Buatan (AI) untuk mengembangkan solusi berkelanjutan bagi tantangan kelautan global. Visi saya adalah menjadi bagian dari upaya kolektif untuk menciptakan masa depan laut yang sehat dan lestari.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Minat & Dedikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Selain fokus pada kelestarian laut, saya juga memiliki minat besar dalam fotografi bawah air, eksplorasi maritim, dan edukasi lingkungan. Saya percaya bahwa inovasi sejati seringkali lahir dari persimpangan berbagai disiplin ilmu, dan saya selalu mencari cara untuk mengintegrasikan sains kelautan dengan teknologi dan ekspresi kreatif untuk menginspirasi perubahan positif. Dedikasi saya terhadap lingkungan laut tidak hanya sebatas profesional, tetapi juga merupakan bagian integral dari identitas pribadi saya.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;