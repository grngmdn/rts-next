import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/logo.png';
import Events from '../home-components/Events';
import Membership from '../home-components/Membership';
import SocialMedia from '../home-components/SocialMedia';
import Links from '../home-components/Links';
import Slideshow from '../home-components/Slideshow';
import Blog from '../home-components/Blog';
import Advert from '../home-components/Advert';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
      </Head>
      <main>
        {/* Landing image from the tailwind config which was set up as "bg-hero"  */}
        <section className='min-h-[85vh] bg-hero bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center'>
          <Image alt='logo' src={Logo} />
          <div className='text-[#FFD601] flex flex-col justify-center items-center max-w-[600px] text-center py-2 tracking-widest gap-3'>
            <h1 className='font-extrabold text-5xl md:text-7xl'>
              Reading Tamu <br /> Samaj UK
            </h1>
            <h3 className='text-xl'>रेडिङ्ग तमु समाज बेलायत</h3>
          </div>
        </section>

        {/* Rest of the home page contents below the landing image */}
        <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
          <div className='max-w-[900px] w-[90vw] md:w-[80vw] bg-gray-50 px-5 pt-10 pb-10 flex flex-col gap-5'>
            {/* Photo viewer  */}
            <section className='w-full h-auto'>{<Slideshow />}</section>
            <section className='grid grid-cols-1 md:grid-cols-7 gap-5'>
              {/* Main blog contents  */}
              <div className='border-2 col-span-5 rounded'>{<Blog />}</div>
              {/* Side contents on the right of the page  */}
              <aside className='col-span-2 flex flex-col gap-5'>
                {<Events />}
                {<Membership />}
                {<SocialMedia />}
                {<Advert />}
                {<Links />}
              </aside>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
