"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Download, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Updated Data Structure (Icons are now strings pointing to file names)
interface Certificate {
  id: string;
  title: string;
  companyName: string;
  history: string;
  description: string;
  tags: string[];
  viewUrl: string;
  downloadPath: string;
  color: string;
  iconFileName: string;
}

// Mock Data (Using local file names)
const certificatesData: Certificate[] = [
  {
    id: "Comptia",
    title: "Security Plus (SY0-701)",
    companyName: "Comptia",
    history: "Completed Jun 2024",
    description: "The baseline, hands-on skills required for core security functions.",
    tags: ["Threats & Attacks", "Operations & Response", "Assessment & Testing", "Technology & Implementation" ,"Governance & Compliance"],
    viewUrl: "https://www.credly.com/badges/73e9b475-a98a-4fc3-addf-859e4a715afe", 
    downloadPath: "/certificates/CompTIA Security+ ce certificate.pdf", 
    color: "from-blue-900 to-blue-700",
    iconFileName: "comptiasecurity.jpg",
  },
  {
    id: "hackthebox",
    title: "CDSA (Certified Defensive Security Analyst )",
    companyName: "HackTheBox",
    history: "Achieved December 2025",
    description: "Intermediate-level certification that focuses entirely on Defensive Security or Blue Team operations.",
    tags: ["SOC", "Security Incident Reporting", "Endpoint Security", "DFIR","SIEM","IDS/IPS","Threat Hunting","Incident Handling"],
    viewUrl: "https://certiport.com/view/aplus", 
    downloadPath: "/certificates/CompTIA_A+.pdf", 
    color: "from-green-600 to-green-700",
    iconFileName: "box.png",
  },
];

// ICON SIZE CHANGE HERE
const CertificateIcon = ({
  iconFileName,
  title,
}: {
  iconFileName: string;
  title: string;
}) => {
  // Assuming your images are stored in /public/images/icons/
  const iconPath = `/images/icons/${iconFileName}`;

  return (
    // Updated to w-12 h-12 (48x48px)
    <div className="w-16 h-16 relative"> 
      <Image
        src={iconPath}
        alt={`${title} logo`}
        fill
        className="object-contain"
        sizes="48px"
      />
    </div>
  );
};


export default function Certifications() {
  const t = useTranslations("Certifications");

  return (
    <section
      className="container mx-auto px-4 py-16 md:py-24"
      aria-labelledby="certifications-heading"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2
          id="certifications-heading"
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-slate-700 to-slate-600 dark:from-blue-400 dark:via-slate-400 dark:to-slate-300 bg-clip-text text-transparent leading-tight"
        >
          {t("title")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((certificate, index) => {
          
          return (
            <motion.article
              key={certificate.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-100 dark:border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              aria-labelledby={`certificate-title-${certificate.id}`}
            >
              {/* Header: Icon, Title, Company */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`p-1 rounded-xl shadow-lg flex-shrink-0`}
                  aria-hidden="true"
                >
                  <CertificateIcon
                    iconFileName={certificate.iconFileName}
                    title={certificate.title}
                  />
                </div>
                <div>
                  <h3
                    id={`certificate-title-${certificate.id}`}
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    {certificate.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    {certificate.companyName}
                  </p>
                </div>
              </div>

              {/* History (Completion Date) */}
              <div className="flex items-center gap-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{certificate.history}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {certificate.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6" aria-label="Tags">
                {certificate.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full border border-gray-200 dark:border-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* View Certificate Button (External Link) */}
                <Link
                  href={certificate.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-slate-700 text-white rounded-lg hover:from-blue-950 hover:to-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 text-sm font-medium"
                  aria-label={`View Certificate for ${certificate.title}`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  View Certificate
                </Link>

                {/* Download Certificate Button (Public Folder Link) */}
                <a
                  href={certificate.downloadPath}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-900 text-blue-900 dark:border-slate-400 dark:text-slate-300 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 text-sm font-medium"
                  aria-label={`Download Certificate for ${certificate.title}`}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}