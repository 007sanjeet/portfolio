"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronRight, ShoppingCart, Layers, Zap, Database } from "lucide-react"

const projects = [
  {
    title: "Food Market",
    subtitle: "E-commerce Platform",
    description:
      "A full-stack food e-commerce platform built with modern technologies. Features include product browsing, cart management, user authentication, and seamless checkout experience.",
    image: "/projects/food-market.jpg",
    technologies: ["React.js", "Django", "PostgreSQL", "Tailwind CSS", "REST API"],
    features: [
      { icon: ShoppingCart, label: "Product Listing & Cart" },
      { icon: Layers, label: "Responsive UI Design" },
      { icon: Zap, label: "Optimized Performance" },
      { icon: Database, label: "Backend API Integration" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card rounded-2xl overflow-hidden group">
        {/* Project mockup / image area */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 via-card to-accent/20 overflow-hidden">
          {/* 3D-like mockup representation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotateY: isHovered ? 5 : 0,
                rotateX: isHovered ? -5 : 0,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-[80%] h-[80%] perspective-1000"
            >
              {/* Browser mockup */}
              <div className="absolute inset-0 bg-card rounded-lg shadow-2xl border border-border overflow-hidden">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono">
                      foodmarket.app
                    </div>
                  </div>
                </div>
                {/* Content area */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-3 w-32 bg-foreground/20 rounded" />
                      <div className="h-2 w-24 bg-muted-foreground/20 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square rounded-lg bg-secondary/50 flex items-center justify-center">
                        <div className="w-8 h-8 rounded bg-primary/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Featured Project
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
            <p className="text-primary font-mono text-sm">{project.subtitle}</p>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {project.features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <feature.icon className="w-4 h-4 text-primary" />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          {/* <div className="flex gap-4">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 px-6 py-2.5 glass rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-primary/50"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div> */}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div ref={ref}>
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.p 
              className="text-primary font-mono text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {"// Projects"}
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Featured Work</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Showcasing projects that demonstrate my skills in building modern, performant web applications
            </motion.p>
          </div>

          {/* Projects grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* More projects link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View more on GitHub
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
