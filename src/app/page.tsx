import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto mt-20 px-8 lg:px-16 font-[Poppins]">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-[1200px] mx-auto">
          {/* Gambar */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-8">
            <Image
              src="/images/banner2.png"
              alt="Banner website"
              width={700}
              height={500}
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Teks */}
          <div className="w-full lg:w-1/2 text-left mt-6">
            <h1 className="text-4xl text-[40px] font-bold text-black leading-tight">
              Selamat Datang di <br /> CV Gilang Kencana Mulya
            </h1>
            <p className="mt-4 text-[20px] text-gray-600 max-w-md">
              Sebuah perusahaan yang menawarkan jasa pembangunan dan desain oleh
              CV Gilang Kencana Mulya.
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
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
