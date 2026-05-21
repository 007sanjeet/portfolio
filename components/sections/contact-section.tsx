"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react"
import Script from "next/script"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "luckysanjeet3@gmail.com",
    href: "mailto:luckysanjeet3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9931583947",
    href: "tel:+919931583947",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanjeet-kumar-5612b2189/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/007sanjeet",
  },
]

export function ContactSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div ref={ref}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              className="text-primary font-mono text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {"// Contact"}
            </motion.p>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">
                Get In Touch
              </span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Have a project in mind or want
              to collaborate? I&apos;d love
              to hear from you.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE - CONTACT DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : {}
              }
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
            >
              <div className="space-y-6 mb-10">
                {contactInfo.map(
                  (item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              y: 0,
                            }
                          : {}
                      }
                      transition={{
                        delay:
                          0.5 +
                          index * 0.1,
                      }}
                      className="flex items-center gap-4 p-5 glass-card rounded-2xl border border-white/10 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="p-4 rounded-xl bg-primary/10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="text-lg font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                )}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? { opacity: 1 }
                    : {}
                }
                transition={{
                  delay: 0.8,
                }}
              >
                <p className="text-muted-foreground mb-5 text-lg">
                  Connect with me
                </p>

                <div className="flex gap-5">
                  {socialLinks.map(
                    (social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 flex items-center justify-center glass-card rounded-2xl border border-white/10 hover:border-primary/40 hover:text-primary hover:scale-110 transition-all duration-300"
                        aria-label={
                          social.label
                        }
                      >
                        <social.icon className="w-7 h-7" />
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : {}
              }
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="flex flex-col gap-6"
            >
              {/* OMNIDIMENSION AI AGENT */}
              <div className="hidden glass-card rounded-[30px] border border-white/10 p-5 overflow-hidden relative min-h-[320px]">
                <div className="absolute top-0 right-0 w-60 h-60 bg-primary/10 rounded-full blur-[100px]" />

                <Script
                  id="omnidimension-web-widget"
                  src="https://omnidim.io/web_widget.js?secret_key=86cc566ade8f0ce791782c966ec95670"
                  strategy="afterInteractive"
                />

                <div
                  id="omnidimension-widget-container"
                  className="relative z-10 min-h-[280px]"
                />
              </div>

              {/* WHATSAPP CARD */}
              <div className="rounded-[30px] overflow-hidden border border-green-500/20 bg-gradient-to-br from-[#111B21] to-[#0B141A] shadow-[0_10px_60px_rgba(0,255,120,0.12)]">
                {/* Header */}
                <div className="bg-[#202C33] px-6 py-5 flex items-center gap-4 border-b border-white/10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    SK
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      Sanjeet Kumar
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                      <p className="text-green-400 text-sm">
                        Online
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat */}
                <div className="p-5 space-y-4 bg-[#0B141A]">
                  <div className="bg-[#202C33] text-white p-4 rounded-[20px] rounded-tl-sm max-w-[80%]">
                    👋 Hi Sanjeet, I visited
                    your portfolio and would
                    like to connect.
                  </div>

                  <div className="bg-[#005C4B] text-white p-4 rounded-[20px] rounded-tr-sm max-w-[80%] ml-auto">
                    Great! Let&apos;s connect
                    on WhatsApp 🚀
                  </div>
                </div>

                {/* Button */}
                <div className="p-5 bg-[#16232A] border-t border-white/10">
                  <a
                    href="https://wa.me/919931583947?text=Hi%20Sanjeet%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] transition-all duration-300 text-white py-4 font-semibold text-lg shadow-lg"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}