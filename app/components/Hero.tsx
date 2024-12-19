import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Noorulain</h1>
            <h2 className="text-2xl text-blue-600 md:text-3xl mb-8">SEO Expert & Digital Marketer</h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl">
              With more than year of freelancing experience on Fiverr, I specialize in SEO Specifically off-page strategies 
              and comprehensive digital marketing solutions. My expertise in data analysis, social media marketing, 
              and web development allows me to deliver holistic digital strategies that drive results.
            </p>
            <a 
              href="mailto:your.email@example.com" 
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white hover:px-[33px] hover:py-[13px] transition-colors duration-300 ease-in-out inline-block"
            >
              Get In Touch
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <Image 
                src="/Profile.jpg" 
                alt="Noorulain" 
                width={256} 
                height={256} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

