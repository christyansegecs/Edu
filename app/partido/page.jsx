
import { Button } from '../../components/ui/button'
import { Socials } from '../../components/Socials'
import { PhotoTwo } from '../../components/PhotoTwo'
import { Stats } from '../../components/Stats'
import { FiDownload } from 'react-icons/fi'

export default function Partido() {
  
  return (
      <section className='h-full'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
            <div className='text-center xl:text-left order-2 xl:order-none'>
              <span className='text-xl'>Inovação e Tecnologia para um Guarujá Melhor!</span>
              <h1 className='h1 mb-6 mt-4 text-[50px]'>28000<br /><span className='text-accent'>Edu da Robótica</span></h1>
              <p className='max-w-[500px] mb-4 text-white/80'>
                Escolhi o Partido Renovador Trabalhista Brasileiro (PRTB) porque compartilho de seus valores e ideais para construir uma sociedade mais justa e desenvolvida.
              </p>

              <p className='max-w-[500px] mb-4 text-white/80'>
                Além disso, o PRTB defende uma economia liberal, o que está alinhado com minha visão de utilizar a inovação e a tecnologia como motores para o progresso.
              </p>

              <p className='max-w-[500px] mb-9 text-white/80'>
                O PRTB se destaca por defender valores conservadores, promovendo princípios que são importantes para mim, como a integridade, a família e a ética cristã. Esses valores são centrais para as decisões que afetam o bem-estar coletivo e a construção de uma sociedade mais forte e unida.
                Ao lado do PRTB, acredito que podemos transformar o Guarujá, trazendo soluções tecnológicas que elevem a qualidade de vida de todos os cidadãos, sem deixar de lado nossos valores e nossa história.
              </p>
              <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button 
                  href='/assets/edu.png'
                  variant='outline' 
                  size='lg' 
                  className='uppercase flex items-center gap-2'
                >
                  <a 
                    href='/assets/edu.png' // Caminho da imagem
                    download='Material_Campanha_Edu_da_Robotica.png' // Nome do arquivo baixado
                  >
                    <span>Baixe o material para campanha</span>
                  </a>
                  <FiDownload className='text-xl' />
                </Button>
                <div className='mb-8 xl:mb-0'>
                  <Socials 
                    containerStyles='flex gap-6' 
                    iconStyles='w-9 h-9 border border-accent rounded-full flex 
                    justify-center items-center text-accent text-base hover:bg-accent 
                    hover:text-primary hover:transition-all duration-500' />
                </div>
              </div>
            </div>
            <div className='order-1 xl:order-none mb-8 xl:mb-0'>
              <PhotoTwo />
            </div>
          </div>
        </div>
      </section>
  )
}
