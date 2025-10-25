"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Tentang Saya</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Perkenalan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Halo! Nama saya [Nama Anda]. Saya adalah seorang [Profesi Anda, misal: pengembang frontend, desainer UI/UX] dengan pengalaman [Jumlah Tahun] tahun dalam membangun aplikasi web yang responsif dan menarik. Saya memiliki hasrat untuk menciptakan solusi yang inovatif dan berpusat pada pengguna.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Keterampilan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Bahasa & Framework</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Alat & Teknologi</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB / PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pengalaman</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Selama karir saya, saya telah bekerja pada berbagai proyek, mulai dari situs web e-commerce hingga aplikasi SaaS yang kompleks. Saya bangga dengan kemampuan saya untuk belajar dengan cepat dan beradaptasi dengan teknologi baru.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;