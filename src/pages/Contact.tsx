"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Hubungi Saya</h2>
        <div className="max-w-xl mx-auto"> {/* Mengubah max-w dan menghapus grid untuk satu kolom */}
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle>
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
              <p className="mt-4">
                Jangan ragu untuk menghubungi saya melalui informasi di atas. Saya akan berusaha membalas secepatnya!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;