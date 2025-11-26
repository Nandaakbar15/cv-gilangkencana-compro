import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* SECTION: About Us */}
      <div className="flex-grow container mx-auto px-8 lg:px-16 mt-24 font-[Poppins] text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Perusahaan arsitektur dan interior yang menghadirkan solusi desain
          <br /> dan bangun secara menyeluruh – dari konsep hingga realisasi.
        </p>
      </div>

      {/* SECTION: Brief History */}
      <section className="bg-[#F5F5F5] py-16 mt-12">
        <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[1200px]">
          <Image
            src="/images/screenshot2.png"
            alt="Brief history image"
            width={600}
            height={450}
            className="rounded-lg object-cover mx-auto"
            priority
          />

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              BRIEF HISTORY
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              CV. Gilang Kencana Mulya didirikan dengan visi menghadirkan karya
              arsitektur yang tidak hanya estetis, tetapi juga fungsional dan
              ramah lingkungan. Berbasis di Bandung – Cimahi, kami dipercaya
              menangani berbagai proyek mulai dari hunian hingga bangunan
              komersial.
            </p>
            <div className="flex items-center gap-4 mt-7">
              <Button className="bg-slate-900 px-6 py-3 rounded-full hover:bg-slate-800 transition">
                Lihat Proyek
              </Button>
              <Button className="bg-slate-900 px-6 py-3 rounded-full hover:bg-slate-800 transition">
                Konsultasi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Growing with Quality */}
      <section className="container mx-auto px-8 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[1200px]">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold">
            GROWING WITH QUALITY
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Dengan tim profesional di bidang arsitektur dan konstruksi, kami
            terus berkembang sambil mempertahankan standar kualitas tinggi,
            kejujuran, dan komunikasi terbuka dengan klien. Setiap proyek kami
            rancang secara personal dan efisien, menjadikannya solusi terbaik
            untuk kebutuhan ruang yang estetik dan fungsional.
          </p>
          <div className="mt-6">
            <Button className="bg-slate-900 px-6 py-3 rounded-full hover:bg-slate-800 transition">
              Lihat Proyek Kami
            </Button>
          </div>
        </div>

        <Image
          src="/images/screenshot1.png"
          alt="Project preview"
          width={600}
          height={450}
          className="rounded-lg object-cover mx-auto"
          priority
        />
      </section>

      <Footer />
    </div>
  );
}
