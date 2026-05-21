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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
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
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              Have a project in mind or want to
              collaborate? I&apos;d love to hear from
              you.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
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
              <div className="space-y-6 mb-8">
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
                      className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-foreground font-medium">
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
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>

                <div className="flex gap-4">
                  {socialLinks.map(
                    (social) => (
                      <a
                        key={
                          social.label
                        }
                        href={
                          social.href
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-card rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300 group"
                        aria-label={
                          social.label
                        }
                      >
                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* WhatsApp Interface */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            >
              <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl min-h-[550px] flex flex-col">

                {/* Header */}
                <div className="bg-green-600 p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                    SK
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Sanjeet Kumar
                    </h3>
                    <p className="text-sm text-green-100">
                      Online
                    </p>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-[#0B141A] p-6 flex flex-col justify-end relative">

                  <div className="space-y-4">
                    <div className="bg-[#202C33] text-white p-4 rounded-2xl rounded-tl-sm max-w-[80%]">
                      👋 Hi Sanjeet! I visited
                      your portfolio and want
                      to discuss a project.
                    </div>

                    <div className="bg-green-700 text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%] ml-auto">
                      Sure! Click below and
                      let&apos;s chat on
                      WhatsApp 🚀
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-[#202C33] p-4">
                  <a
                    href="https://wa.me/919931583947?text=Hi%20Sanjeet%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-semibold text-lg"
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