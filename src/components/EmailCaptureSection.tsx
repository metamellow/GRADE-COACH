import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { EnvelopeIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  role: z.string().min(1, 'Please select your role'),
  school: z.string().min(2, 'Please enter your school name')
})

type EmailFormData = z.infer<typeof emailSchema>

const EmailCaptureSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema)
  })

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true)
    
    try {
      // Call our serverless function instead of direct API call
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          role: data.role,
          school: data.school
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe to waitlist')
      }
      
      toast.success('Successfully joined the waitlist!')
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="section-padding section-standard-height bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Welcome to the Future of Assessment!
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              You're now on our priority list. We'll notify you as soon as Grade.Coach is ready for your classroom.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-primary-100">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                  <span>Early access to Grade.Coach beta</span>
                </div>
                <div className="flex items-center text-primary-100">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                  <span>Exclusive educator resources and guides</span>
                </div>
                <div className="flex items-center text-primary-100">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                  <span>Direct line to our development team</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="section-padding section-standard-height bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-8">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Limited Early Access
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Be First to Transform Your Classroom
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join the waitlist for early access to Grade.Coach and get exclusive educator resources
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder="your.email@school.edu"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role *
                </label>
                <select
                  {...register('role')}
                  id="role"
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                >
                  <option value="">Select your role</option>
                  <option value="teacher">Teacher</option>
                  <option value="administrator">Administrator</option>
                  <option value="principal">Principal</option>
                  <option value="department-head">Department Head</option>
                  <option value="other">Other</option>
                </select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>

              {/* School */}
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                  School Name *
                </label>
                <input
                  {...register('school')}
                  type="text"
                  id="school"
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Your school name"
                />
                {errors.school && (
                  <p className="mt-1 text-sm text-red-600">{errors.school.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xl shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Joining Waitlist...
                </div>
              ) : (
                'Join the Waitlist - It\'s Free'
              )}
            </motion.button>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 text-center">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Early Access</h3>
            <p className="text-primary-100 text-sm">Be among the first to experience Grade.Coach</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Exclusive Resources</h3>
            <p className="text-primary-100 text-sm">Get educator guides and best practices</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Direct Feedback</h3>
            <p className="text-primary-100 text-sm">Help shape the product with your input</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EmailCaptureSection
