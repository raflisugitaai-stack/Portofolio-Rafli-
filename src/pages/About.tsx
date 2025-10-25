"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Tentang Saya</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Perkenalan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Halo! Nama saya [Nama Anda]. Saya adalah seorang <span className="font-semibold text-foreground">Pakar Generative AI dan Inovasi Digital</span> dengan pengalaman [Jumlah Tahun] tahun dalam merancang dan mengembangkan solusi AI yang transformatif. Saya memiliki hasrat mendalam untuk mengeksplorasi potensi AI dalam menciptakan konten baru, mengotomatisasi proses kreatif, dan mendorong batas-batas teknologi. Saya percaya pada pendekatan yang tenang, cerdas, dan berkelas dalam setiap proyek yang saya tangani, memastikan hasil yang inovatif dan berkualitas tinggi.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Keterampilan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Keahlian Generative AI</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Model Bahasa Besar (LLMs) & NLP</li>
                    <li>Generasi Gambar & Video (Diffusion Models, GANs)</li>
                    <li>Pembelajaran Mendalam (Deep Learning)</li>
                    <li>Arsitektur Transformer</li>
                    <li>Fine-tuning Model AI</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Alat & Teknologi</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Python, TensorFlow, PyTorch</li>
                    <li>Hugging Face Transformers</li>
                    <li>Docker, Kubernetes</li>
                    <li>Cloud Platforms (AWS, GCP, Azure)</li>
                    <li>Git & GitHub</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Pengalaman</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Selama karir saya, saya telah memimpin dan berkontribusi pada berbagai proyek Generative AI, mulai dari mengembangkan sistem rekomendasi konten berbasis AI hingga menciptakan alat otomatisasi kreatif untuk industri media. Saya bangga dengan kemampuan saya untuk menerjemahkan ide-ide kompleks menjadi solusi yang fungsional dan berdampak, selalu dengan fokus pada inovasi dan keunggulan teknis. Saya terus belajar dan beradaptasi dengan perkembangan terbaru di bidang AI untuk memastikan saya selalu berada di garis depan inovasi digital.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;