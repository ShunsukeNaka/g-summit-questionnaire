'use client'
import PostForm from '@/api/PostForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useState } from 'react'

export default function Home() {


  return (
    <div>
      <Header title='page'></Header>
      <PostForm />
      <Footer></Footer>     
    </div>

  )
}