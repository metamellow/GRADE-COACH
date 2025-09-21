import { Toaster } from 'react-hot-toast'
import { useSEO } from './hooks/useSEO'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSolutionSection from './components/ProblemSolutionSection'
import FeaturesSection from './components/FeaturesSection'
import SocialProofSection from './components/SocialProofSection'
import EmailCaptureSection from './components/EmailCaptureSection'
import Footer from './components/Footer'

function App() {
  useSEO({
    title: 'Grade.Coach - AI-Powered Grading & Feedback for Schools',
    description: 'Transform any worksheet into intelligent assessment. AI grading, personalized feedback, and learning analytics for modern educators.',
    keywords: 'AI grading, educational technology, worksheet assessment, teacher tools',
    ogTitle: 'Grade.Coach - AI-Powered Grading & Feedback',
    ogDescription: 'Transform any worksheet into intelligent assessment. AI grading, personalized feedback, and learning analytics for modern educators.',
    ogType: 'website',
    ogUrl: 'https://www.grade.coach',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Grade.Coach - AI-Powered Grading & Feedback',
    twitterDescription: 'Transform any worksheet into intelligent assessment. AI grading, personalized feedback, and learning analytics for modern educators.'
  })

  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
        <Header />
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <SocialProofSection />
        <EmailCaptureSection />
        <Footer />
      </div>
      
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </>
  )
}

export default App
