'use client'

import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { motion } from 'framer-motion'

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(13) 99751-8747'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'edudarobotica@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Endereço',
        description: 'Guarujá'
    },
]

export default function Contact() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // Formatar a mensagem para WhatsApp
        const whatsappMessage = `Nome: ${firstname} ${lastname}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`

        // Redirecionar para o WhatsApp com a mensagem formatada
        window.location.href = `https://wa.me/5513997261993?text=${encodeURIComponent(whatsappMessage)}`
    }

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className='py-6'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>Em que eu posso te ajudar?</h3>
                            <p className='text-white/60'>Envie sua sugestão de melhoria para a cidade ou o que está te incomodando.</p>
                            {/* input */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input 
                                    type='text' 
                                    placeholder='Nome' 
                                    value={firstname} 
                                    onChange={(e) => setFirstname(e.target.value)} 
                                />
                                <Input 
                                    type='text' 
                                    placeholder='Sobrenome' 
                                    value={lastname} 
                                    onChange={(e) => setLastname(e.target.value)} 
                                />
                                <Input 
                                    type='email' 
                                    placeholder='Email' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <Input 
                                    type='text' 
                                    placeholder='Telefone' 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                            </div>
                            
                            {/* textarea */}
                            <Textarea 
                                className='h-[200px]' 
                                placeholder='Escreva sua mensagem aqui.' 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button type='submit' size='md' className='max-w-40'>Enviar</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                            <div className='text-[28px]'>{item.icon}</div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-white/60'>{item.title}</p>
                                            <h3 className='text-xl'>{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
