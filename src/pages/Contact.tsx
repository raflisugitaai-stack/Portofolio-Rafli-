"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react"; // Menghapus import Linkedin dan Github
import { Separator } from "@/components/ui/separator";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logika untuk mengirim formulir kontak
    console.log("Formulir kontak dikirim!");
    // Anda bisa menambahkan logika pengiriman email atau API di sini
  };

  return (
    <Layout>
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Hubungi Saya</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nama Anda</Label>
                  <Input id="name" type="text" placeholder="Nama Lengkap Anda" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Anda</Label>
                  <Input id="email" type="email" placeholder="email@example.com" required />
                </div>
                <div>
                  <Label htmlFor="message">Pesan Anda</Label>
                  <Textarea id="message" placeholder="Tulis pesan Anda di sini..." rows={5} required />
                </div>
                <Button type="submit" className="w-full">Kirim Pesan</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle> {/* Mengubah judul */}
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span><a href="mailto:raflisugita728@gmail.com" className="hover:underline">raflisugita728@gmail.com</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>085262860338</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Banda Aceh, Indonesia</span>
              </div>
              {/* Menghapus Separator dan tautan LinkedIn/GitHub */}
              <p className="mt-4">
                Jangan ragu untuk menghubungi saya melalui formulir atau informasi di atas. Saya akan berusaha membalas secepatnya!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;