import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certificatesData = [
    {
        title: "Análisis y Visualización de Datos (Avanzado)",
        issuer: "Talento Tech / MinTIC",
        image: "https://via.placeholder.com/400x250?text=Certificado+Talento+Tech", // Reemplaza por tu captura .png
        link: "/certificados.pdf" // Aquí ya apunta a tu archivo en public
    },
    {
        title: "Desarrollo Back-end (Java y Spring Framework)",
        issuer: "Oracle Next Education / Alura",
        image: "https://via.placeholder.com/400x250?text=Certificado+Oracle+Java", // Reemplaza por tu captura .png
        link: "/certificados.pdf"
    },
    {
        title: "Principiante en Programación",
        issuer: "Oracle Next Education / Alura",
        image: "https://via.placeholder.com/400x250?text=Certificado+Lógica", // Reemplaza por tu captura .png
        link: "/certificados.pdf"
    }
];

const Certificates = () => {
    return (
        <section id="certifications" className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-soft-orchid-300">
                    <Award size={32} />
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Certificaciones Destacadas</h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-12"
            >
                {certificatesData.map((cert, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#1a1116] border border-white/10 rounded-2xl overflow-hidden group hover:border-soft-orchid-400/50 transition-all duration-500 shadow-2xl">
                            {/* Encabezado estilo macOS */}
                            <div className="bg-white/5 px-4 py-2 flex gap-1.5 border-b border-white/10">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <span className="text-[10px] text-white/30 ml-2 uppercase tracking-widest font-medium">Visualizador</span>
                            </div>

                            {/* Imagen del certificado */}
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            {/* Info del certificado */}
                            <div className="p-6">
                                <h3 className="text-white font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                                <p className="text-white/50 text-sm mb-6">{cert.issuer}</p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-soft-orchid-300 hover:text-soft-orchid-200 font-medium text-sm transition-colors"
                                >
                                    Ver credencial completa <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Certificates;