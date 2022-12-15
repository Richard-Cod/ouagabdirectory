import AuthLayout from 'app/components/AuthLayout'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import AppPageLayout from '../appPageLayout/AppPageLayout'
import { LoginPage, RegisterPage } from '../authPages'

function AuthNav() {
  const [searchParams] = useSearchParams();
  const authmode = searchParams.get("mode")

  return (
    <AppPageLayout>
      {authmode ==="login" ? <LoginPage /> : <RegisterPage />}

      
    </AppPageLayout>
  )
}

export default AuthNav