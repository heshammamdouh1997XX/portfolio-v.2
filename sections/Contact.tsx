"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

// Note: Removed unused Form types (FormData, FormErrors) and logic (state, handlers)
// as the form itself is being removed. I will keep the component clean for you.

export default function Contact() {
  const t = useTranslations("Contact");

  // Removed state and form handler logic (formData, errors, handleSubmit, etc.)
  // as the form is no longer present.

  const contactInfo = [
    {
      icon: Mail,
      label: t("info.emailLabel"),
      value: t("info.email"),
      href: `mailto:${t("info.email")}`,
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Phone,
      label: t("info.phoneLabel"),
      value: t("info.phone"),
      href: `https://wa.me/${t("info.phone").replace(/\s+/g, "")}`,

      color: "from-green-600 to-green-700",
    },
    {
      icon: MapPin,
      label: t("info.locationLabel"),
      value: t("info.location"),
      href: null,
      color: "from-purple-600 to-purple-700",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: t("social.followOnGithub"),
      href: "https://github.com/heshammamdouh1997XX",
      color: "hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: t("social.connectOnLinkedin"),
      href: "https://www.linkedin.com/in/hisham-aboel-nasr-0x00/",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section
      className="container mx-auto px-4 py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-slate-700 to-slate-600 dark:from-blue-400 dark:via-slate-400 dark:to-slate-300 bg-clip-text text-transparent leading-tight pb-2"
          style={{
            WebkitBoxDecorationBreak: "clone",
            boxDecorationBreak: "clone",
          }}
        >
          {t("title")}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </motion.div>

      {/* MODIFIED: Changed grid layout to lg:grid-cols-1 */}
      <div className="grid lg:grid-cols-1 gap-12 max-w-2xl mx-auto"> 

        {/* Contact Information */}
        {/* Removed initial={{ opacity: 0, x: 20 }} to center the content better */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                // MODIFIED: Added hover:shadow-blue-500/30
                <div className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mx-3 flex-shrink-0`}
                  >
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p
                      className={`font-medium text-gray-900 dark:text-white ${
                        info.icon === Phone ? "ltr" : ""
                      }`}
                      dir={info.icon === Phone ? "ltr" : undefined}
                      style={
                        info.icon === Phone ? { textAlign: "left" } : undefined
                      }
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              );

              return info.href ? (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 rounded-xl"
                  aria-label={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 dark:bg-slate-800/50 rounded-xl p-6 border border-blue-200 dark:border-slate-600">
            <div className="flex items-center mb-4">
              <Clock
                className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-2"
                aria-hidden="true"
              />
              <h3 className="font-medium text-gray-900 dark:text-white">
                {t("info.availability")}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {t("info.responseTime")}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {t("social.title")}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-lg ${social.color} hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2`}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}