exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { email, role, school } = JSON.parse(event.body)
    
    // Validate required fields
    if (!email || !role || !school) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      }
    }

    // Get API key from environment variables
    const apiKey = process.env.VITE_CONVERTKIT_API_KEY
    
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured' })
      }
    }

    // Call ConvertKit API
    const response = await fetch('https://api.convertkit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': apiKey,
      },
      body: JSON.stringify({
        email_address: email,
        first_name: role,
        fields: {
          'Role': role,
          'School': school,
          'Source': 'Grade.Coach Landing Page'
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('ConvertKit API Error:', errorData)
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Failed to subscribe: ${errorData.errors?.[0] || 'Unknown error'}` })
      }
    }

    const result = await response.json()
    console.log('ConvertKit response:', result)
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Successfully subscribed to waitlist!' })
    }
  } catch (error) {
    console.error('Subscription error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    }
  }
}
