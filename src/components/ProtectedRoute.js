"use client"

import React, { useEffect } from 'react'
import { UseUserAuth } from '../Context/UserAuthContextProvider';
import { useRouter } from 'next/router'


const ProtectedRoute = ({ children }) => {
    const { user } = UseUserAuth()
    const router = useRouter()
  
    useEffect(() => {
      if (!user) {
        router.push('/')
      }
    }, [router, user])
  
    return <>{user ? children : null}</>
  }
  
  export default ProtectedRoute
