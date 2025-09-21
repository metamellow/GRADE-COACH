import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSolutionSection from './components/ProblemSolutionSection'
import FeaturesSection from './components/FeaturesSection'
import SocialProofSection from './components/SocialProofSection'
import EmailCaptureSection from './components/EmailCaptureSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Grade.Coach - AI-Powered Grading & Feedback for Schools</title>
        <meta 
          name="description" 
          content="Transform any worksheet into intelligent assessment. AI grading, personalized feedback, and learning analytics for modern educators." 
        />
        <meta name="keywords" content="AI grading, educational technology, worksheet assessment, teacher tools" />
        <meta property="og:title" content="Grade.Coach - AI-Powered Grading & Feedback" />
        <meta property="og:description" content="Transform any worksheet into intelligent assessment. AI grading, personalized feedback, and learning analytics for modern educators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grade.coach" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grade.Coach - AI-Powered Grading & Feedback" />
        <meta name="twitter:description" content="Transform any worksheet into intelligent assessment. AI grading, personalized feedback, and learning analytics for modern educators." />
      </Helmet>
      
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
