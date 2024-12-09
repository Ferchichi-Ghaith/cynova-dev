"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import MagicButton from "../design/MagicButton"
import AnimatedTitle from "./AnimatedTitle"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      socialServices: "",
    },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Envoi d\'un email à abirgaithhhadilahmed avec:', values)
    
    setIsSubmitting(false)
    setShowConfetti(true)
    
    
    
    setTimeout(() => {
      setShowConfetti(false)
    }, 3000)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-n-1" id="contact">
    <AnimatedTitle
    
    title="<b>P</b><b>r</b><b>ê</b><b>t</b> <b>à</b> <b>t</b><b>r</b><b>a</b><b>n</b><b>s</b><b>f</b><b>o</b><b>r</b><b>m</b><b>e</b><b>r</b> <b>v</b><b>o</b><b>t</b><b>r</b><b>e</b> <b>i</b><b>d</b><b>é</b><b>e</b> <b>e</b><b>n</b> <b>u</b><b>n</b><b>e</b> <b>a</b><b>p</b><b>p</b><b>l</b><b>i</b><b>c</b><b>a</b><b>t</b><b>i</b><b>o</b><b>n</b>? "
    containerClass=" !text-6xl pointer-events-none mix-blend-difference relative z-10 "
          />
      <div className="container px-4 md:px-6">
     
        <div className="mx-auto max-w-3xl mt-8">
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Votre nom" 
                          {...field} 
                          className=" text-white border-gray-500" 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Votre e-mail" 
                          {...field} 
                          type="email" 
                          className=" text-white border-gray-500" 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Votre numéro de téléphone" 
                          {...field} 
                          type="tel" 
                          className=" text-white border-gray-500" 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className=" text-white border-gray-500">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cyber">Mission Cyber</SelectItem>
                          <SelectItem value="webapp">Application Web</SelectItem>
                          <SelectItem value="mobileapp">Application Mobile</SelectItem>
                          <SelectItem value="database">Intégration de Base de Données</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="socialServices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Sociaux</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Services sociaux" 
                        {...field} 
                        className=" text-white border-gray-500" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center relative">
                {showConfetti && (
                  <div className="absolute -top-50 left-1/2 transform -translate-x-1/2 z-10">
                    <img src="/confetti.gif" alt="confetti" className="w-24 h-24" />
                  </div>
                )}
                <MagicButton
                title={isSubmitting ? "Envoi en cours..." : "Envoyer"}
                 type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                </MagicButton>
              </div>
            </motion.form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
