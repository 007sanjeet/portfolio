"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Layers, Zap, Palette, Server, GitBranch } from "lucide-react"

const strengths = [
  { icon: Code2, label: "Frontend Development", color: "#22d3ee" },
  { icon: Server, label: "Full Stack Development", color: "#3b82f6" },
  { icon: Palette, label: "Responsive UI", color: "#8b5cf6" },
  { icon: Zap, label: "Performance Optimization", color: "#f59e0b" },
  { icon: Layers, label: "API Integration", color: "#10b981" },
  { icon: GitBranch, label: "Component Architecture", color: "#ec4899" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.p 
              className="text-primary font-mono text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {"// About Me"}
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Who I Am</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="glass-card rounded-2xl p-8 relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-muted-foreground font-mono text-sm">about.tsx</span>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <span className="text-primary font-mono">const</span>{" "}
                      <span className="text-foreground">developer</span> = {"{"}
                    </p>
                    <div className="pl-6 space-y-2">
                      <p>
                        <span className="text-accent">name</span>:{" "}
                        <span className="text-green-400">&quot;Sanjeet Kumar&quot;</span>,
                      </p>
                      <p>
                        <span className="text-accent">role</span>:{" "}
                        <span className="text-green-400">&quot;Software Engineer&quot;</span>,
                      </p>
                      <p>
                        <span className="text-accent">experience</span>:{" "}
                        <span className="text-yellow-400">1.6</span>+ years,
                      </p>
                      <p>
                        <span className="text-accent">passion</span>:{" "}
                        <span className="text-green-400">&quot;Building modern web apps&quot;</span>
                      </p>
                    </div>
                    <p>{"}"}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;m a Software Engineer with expertise in building modern web applications using{" "}
                      <span className="text-primary">React.js</span>, <span className="text-primary">Django</span>,{" "}
                      <span className="text-primary">PostgreSQL</span>, and <span className="text-primary">Next.js</span>.
                      I focus on creating scalable, performant, and user-friendly experiences with clean, maintainable code.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Strengths */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group"
                  >
                    <div className="glass-card rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:border-primary/30 cursor-default">
                      <div className="flex items-center gap-3">
                        <div 
                          className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${strength.color}20` }}
                        >
                          <strength.icon 
                            className="w-5 h-5 transition-colors"
                            style={{ color: strength.color }}
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">{strength.label}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "1.6+", label: "Years Exp" },
                  { value: "10+", label: "Projects" },
                  { value: "15+", label: "Technologies" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    className="text-center p-4 glass-card rounded-xl"
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
