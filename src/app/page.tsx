'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PostForm from '@/components/PostForm'
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