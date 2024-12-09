'use client';
import About from '@/components/element/About'
import Clients from '@/components/element/Clients';
import Contact, { ContactForm } from '@/components/element/Contact';
import End from '@/components/element/End';
import Grid from '@/components/element/Grid'
import Hero from '@/components/element/Hero'
import NavBar from '@/components/element/NavBar'
import RecentProjects from '@/components/element/RecentProjects';
import React from 'react'

const page = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-n-8">
    <NavBar />
    <Hero />
    <About />

    <div className='relative flex justify-center items-center  min-h-screen w-screen overflow-x-hidden flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-n-8'>
    <div className="max-w-7xl w-full">

     <Grid />
     <RecentProjects />
     <Clients />
     

    <ContactForm />
   
 
   
    </div>
    </div>
    <End />
    </main>
  )
}

export default page