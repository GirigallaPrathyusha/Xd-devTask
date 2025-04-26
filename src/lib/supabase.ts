import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project credentials
const supabaseUrl = 'https://ybulwqfqefxraxpjtbtr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlidWx3cWZxZWZ4cmF4cGp0YnRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODgwMzIsImV4cCI6MjA2MTE2NDAzMn0.X-lU5yTZ-sht1swmDYZC0YI7xWzAhbwi5-q_YxSY2PU'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})