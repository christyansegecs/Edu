
import { Button } from '../../components/ui/button'
import { Socials } from '../../components/Socials'
import { Photo } from '../../components/Photo'
import { Stats } from '../../components/Stats'
import { FiDownload } from 'react-icons/fi'

export default function About() {
  
  return (
      <section className='h-full'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
            <div className='text-center xl:text-left order-2 xl:order-none'>
              <span className='text-xl'>Inovação e Tecnologia para um Guarujá Melhor!</span>
              <h1 className='h1 mb-6 mt-4 text-[50px]'>28000<br /><span className='text-accent'>Edu da Robótica</span></h1>
              <p className='max-w-[500px] mb-4 text-white/80'>
                Engenheiro formado pela UNICAMP, fui selecionado pela Apple e tenho experiência em eventos tecnológicos internacionais, representando o Brasil em países como Dinamarca, Suíça e Estados Unidos. Sou apaixonado por inovação e acredito no poder transformador da tecnologia para melhorar a qualidade de vida das pessoas.
              </p>

              <p className='max-w-[500px] mb-4 text-white/80'>
                Como cristão, tenho valores sólidos de integridade e compromisso com o bem comum. Meu foco é trazer soluções tecnológicas inclusivas, que atendam às necessidades de todos os cidadãos, promovendo o desenvolvimento sustentável e uma cidade mais eficiente, segura e conectada.
              </p>

              <p className='max-w-[500px] mb-9 text-white/80'>
                Minha missão é transformar o Guarujá em um polo de tecnologia, garantindo que todos os moradores tenham acesso às ferramentas necessárias para um futuro mais promissor e inovador. Juntos, vamos construir um Guarujá mais moderno, inclusivo e preparado para o futuro.
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
              <Photo />
            </div>
          </div>
        </div>
      </section>
  )
}
