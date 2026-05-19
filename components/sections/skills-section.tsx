"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const skillCategories = [
  {
    name: "Frontend",
    color: "#22d3ee",
    skills: [
      { name: "React.js", level: 60 },
      { name: "Next.js", level: 55 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "Redux", level: 70 },
    ],
  },
  {
    name: "Backend",
    color: "#3b82f6",
    skills: [
      { name: "Python", level: 65 },
      { name: "Django", level: 85 },
      { name: "REST API", level: 90 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    name: "Database",
    color: "#8b5cf6",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    name: "Tools",
    color: "#10b981",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Zeplin", level: 70 },
      { name: "WordPress", level: 70 },
    ],
  },
]

const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    color: category.color,
  }))
)

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string
  level: number
  color: string
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">
          {name}
        </span>
        <span className="text-xs text-muted-foreground font-mono">
          {level}%
        </span>
      </div>

      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={
            isInView
              ? { width: `${level}%` }
              : { width: 0 }
          }
          transition={{
            delay: delay + 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const [activeCategory, setActiveCategory] =
    useState("Frontend")

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

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
              {"// Skills & Technologies"}
            </motion.p>

            <motion.h2
              className="text-3xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">
                Tech Stack
              </span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE NEW ANIMATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : {}
              }
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="relative h-[420px] flex items-center justify-center"
            >
              {/* Glow circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[320px] h-[320px] rounded-full border border-primary/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[220px] h-[220px] rounded-full border border-cyan-400/20"
              />

              {/* Center circle */}
              <div className="absolute w-32 h-32 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
                <span className="text-xl font-bold gradient-text">
                  Skills
                </span>
              </div>

              {/* Floating skills */}
              {allSkills.slice(0, 12).map(
                (skill, index) => {
                  const angle =
                    (index / 12) * Math.PI * 2
                  const radius = 150

                  const x =
                    Math.cos(angle) * radius
                  const y =
                    Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute px-4 py-2 rounded-full glass-card border border-white/10 backdrop-blur-lg text-sm font-medium"
                      style={{
                        left: "50%",
                        top: "50%",
                        x,
                        y,
                      }}
                      animate={{
                        y: [y, y - 12, y],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration:
                          3 + Math.random() * 2,
                        repeat: Infinity,
                      }}
                      whileHover={{
                        scale: 1.15,
                      }}
                    >
                      <span
                        style={{
                          color: skill.color,
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                }
              )}
            </motion.div>

            {/* Right Side */}
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
            >
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skillCategories.map(
                  (category) => (
                    <button
                      key={category.name}
                      onClick={() =>
                        setActiveCategory(
                          category.name
                        )
                      }
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        activeCategory ===
                        category.name
                          ? "text-white"
                          : "glass hover:border-primary/50"
                      }`}
                      style={
                        activeCategory ===
                        category.name
                          ? {
                              backgroundColor:
                                category.color,
                            }
                          : {}
                      }
                    >
                      {category.name}
                    </button>
                  )
                )}
              </div>

              {/* Skill Bars */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="space-y-5">
                  {skillCategories
                    .find(
                      (c) =>
                        c.name === activeCategory
                    )
                    ?.skills.map(
                      (skill, index) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          color={
                            skillCategories.find(
                              (c) =>
                                c.name ===
                                activeCategory
                            )?.color ||
                            "#22d3ee"
                          }
                          delay={0.1 * index}
                        />
                      )
                    )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}