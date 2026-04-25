import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const CERTIFICATES = [
  {
    title: "SQL Intermedio",
    issuer: "HackerRank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/7f7e9a8b1c2d"
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/9e8d7c6b5a4f"
  },
  {
    title: "Google Data Analytics Specialization",
    issuer: "Coursera / Google",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XYZ123"
  }
];

export default function Certificates() {
  return (
    <section id="certificados" className="py-24 px-8 md:px-20 bg-bg-main">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-accent-main text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Validación de Aptitudes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            Certificaciones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group bg-bg-card border border-border-subtle p-8 rounded-3xl hover:border-accent-main/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent-main/10 flex items-center justify-center text-accent-main mb-6">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-txt-main mb-2 leading-tight group-hover:text-accent-main transition-colors">
                  {cert.title}
                </h3>
                <p className="text-txt-muted text-sm mb-1">{cert.issuer}</p>
                <p className="text-txt-muted text-xs font-mono">{cert.date}</p>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-2 text-sm font-bold text-accent-main hover:text-accent-bright transition-colors"
              >
                Ver certificado
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
