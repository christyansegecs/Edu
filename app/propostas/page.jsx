
'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { motion } from 'framer-motion'

const experience = {
    title: '1. Acabar com a Falta de Água',
    description: 'A falta de água é um dos maiores desafios enfrentados pelo Guarujá. Nossa proposta é desenvolver uma infraestrutura inteligente para garantir a gestão eficiente dos recursos hídricos, incluindo o monitoramento em tempo real e ações preventivas para evitar o desperdício. Além disso, implementaremos projetos de captação e armazenamento de água, garantindo o abastecimento constante para todos os moradores.',
}

const education = {
    title: '2. Comunicação Eficaz entre a Câmara e a População',
    description: 'Queremos dar voz à população! Propomos a criação de ferramentas digitais que permitam uma comunicação mais direta entre a Câmara Municipal e os cidadãos. Essas plataformas permitirão que a população vote diretamente em propostas e projetos, garantindo uma participação ativa nas decisões que afetam o futuro da cidade.',
}

const skills = {
    title: '3. Investimento em Ensino de Robótica e Tecnologia nas Escolas',
    description: 'Preparar as crianças para o futuro é essencial. Vamos investir no ensino de robótica e tecnologia nas escolas, oferecendo às nossas crianças o conhecimento e as habilidades necessárias para as profissões do futuro. Com isso, formaremos uma geração preparada para enfrentar os desafios da nova economia digital.',
}

const about = {
    title: '4. Desburocratização e Plataformas Digitais para Serviços Públicos',
    description: 'A burocracia é um dos maiores obstáculos para o desenvolvimento da cidade. Nossa proposta é implementar plataformas digitais eficientes, integradas a processos automatizados, para facilitar o acesso da população a serviços públicos. Isso inclui o pagamento de impostos, agendamento de consultas médicas e solicitações de serviços de forma simples e rápida, sem complicações.',
}

const five = {
    title: '5. Centro de Tecnologia para Startups',
    description: 'Para estimular o empreendedorismo e a inovação, propomos a criação de um Centro de Tecnologia voltado para o apoio a startups. Esse centro oferecerá infraestrutura, mentoria e recursos para que novos empreendedores possam desenvolver suas ideias, criando oportunidades de emprego e gerando novas soluções para os problemas da cidade.',
}

export default function Resume() {

    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
            >
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Melhoria nos Recursos Hídricos</TabsTrigger>
                        <TabsTrigger value='education'>Comunicação Câmara-População</TabsTrigger>
                        <TabsTrigger value='skills'>Tecnologia nas Escolas</TabsTrigger>
                        <TabsTrigger value='about'>Plataformas Digitais</TabsTrigger>
                        <TabsTrigger value='five'>Centro de Tecnologia</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                            </div>
                        </TabsContent>


                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                            </div>
                        </TabsContent>


                        {/* skills */}
                        <TabsContent value='skills' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {skills.title}
                                </h3>
                                <p className='max-w-[600px] text-white mx-auto xl:mx-0'>
                                    {skills.description}
                                </p>
                            </div>
                        </TabsContent>


                        {/* about */}
                        <TabsContent value='about' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {about.title}
                                </h3>
                                <p className='max-w-[600px] text-white mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                            </div>
                        </TabsContent>

                        {/* five */}
                        <TabsContent value='five' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {five.title}
                                </h3>
                                <p className='max-w-[600px] text-white mx-auto xl:mx-0'>
                                    {five.description}
                                </p>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}