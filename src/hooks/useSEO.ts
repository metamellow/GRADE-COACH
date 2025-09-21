import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogType?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
}

export const useSEO = (props: SEOProps) => {
  useEffect(() => {
    // Update title
    if (props.title) {
      document.title = props.title
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      
      meta.content = content
    }

    // Update meta tags
    if (props.description) {
      updateMetaTag('description', props.description)
    }
    
    if (props.keywords) {
      updateMetaTag('keywords', props.keywords)
    }
    
    if (props.ogTitle) {
      updateMetaTag('og:title', props.ogTitle, true)
    }
    
    if (props.ogDescription) {
      updateMetaTag('og:description', props.ogDescription, true)
    }
    
    if (props.ogType) {
      updateMetaTag('og:type', props.ogType, true)
    }
    
    if (props.ogUrl) {
      updateMetaTag('og:url', props.ogUrl, true)
    }
    
    if (props.twitterCard) {
      updateMetaTag('twitter:card', props.twitterCard)
    }
    
    if (props.twitterTitle) {
      updateMetaTag('twitter:title', props.twitterTitle)
    }
    
    if (props.twitterDescription) {
      updateMetaTag('twitter:description', props.twitterDescription)
    }
  }, [props])
}
