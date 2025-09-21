import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { StarIcon, UserGroupIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

const SocialProofSection = () => {
  const [hoursSaved, setHoursSaved] = useState(0)
  const [studentsHelped, setStudentsHelped] = useState(0)
  const [schoolsInterested, setSchoolsInterested] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mathematics Teacher",
      school: "Lincoln High School",
      content: "Grade.Coach has revolutionized how I assess student work. I save 10+ hours per week while providing more detailed feedback than ever before.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Department Head",
      school: "Riverside Academy",
      content: "The AI-powered insights have helped us identify learning gaps we never noticed. Our student performance has improved by 25% this semester.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Principal",
      school: "Westfield Elementary",
      content: "Finally, a tool that works with our existing curriculum. The implementation was seamless and the results speak for themselves.",
      rating: 5
    }
  ]

  const stats = [
    {
      icon: ClockIcon,
      value: hoursSaved,
      suffix: "+",
      label: "Hours Saved",
      color: "text-blue-600"
    },
    {
      icon: UserGroupIcon,
      value: studentsHelped,
      suffix: "+",
      label: "Students Helped",
      color: "text-green-600"
    },
    {
      icon: AcademicCapIcon,
      value: schoolsInterested,
      suffix: "+",
      label: "Schools Interested",
      color: "text-purple-600"
    }
  ]

  // Animate counters only when section comes into view
  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            const animateCounter = (setter: (value: number) => void, target: number, duration: 2000) => {
              let start = 0
              const increment = target / (duration / 16)
              const timer = setInterval(() => {
                start += increment
                if (start >= target) {
                  setter(target)
                  clearInterval(timer)
                } else {
                  setter(Math.floor(start))
                }
              }, 16)
            }

            animateCounter(setHoursSaved, 2500, 2000)
            animateCounter(setStudentsHelped, 15000, 2000)
            animateCounter(setSchoolsInterested, 500, 2000)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <section id="social-proof" className="section-padding section-standard-height bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200/50 text-purple-700 text-sm font-semibold mb-8">
            Social Proof
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Trusted by Educators
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of teachers and administrators who are already transforming their assessment process
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-gray-600 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 font-medium mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-blue-600 font-semibold">
                    {testimonial.school}
                  </div>
                </div>

                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-6xl text-gray-100 font-serif leading-none">
                  "
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-8">
            Trusted by educators at leading schools nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for school logos */}
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">School Logo</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">School Logo</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">School Logo</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">School Logo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProofSection
