import blackShoe from '../assets/blackShoe.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='About'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl text-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={blackShoe} alt="" className='w-60 h-80 rounded object-cover mb-8 md:mb-0'/>
            <div className='flex-1'>
               <p className='text-lg mb-8'>I am a passionate front-end wed developer, with a focus on building modern and responsive 
                  websites. With a strong foundation in front end technologies, I strive to create seamless and 
                  efficient user experience
               </p>
               <div className='space-y-4'>
                 <div className='flex items-center space-x-4'>
                    <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300
                                        hover:scale-105 w-10/12'
                        ></div>
                    </div>
                 </div>

                 <div className='flex items-center space-x-4'>
                    <label htmlFor='htmlandcss' className='w-2/12'>Javascript</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300
                                        hover:scale-105 w-9/12'
                                        
                        ></div>
                        
                    </div>
                 </div>

                 <div className='flex items-center space-x-4'>
                    <label htmlFor='htmlandcss' className='w-2/12'>React JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300
                                        hover:scale-105 w-8/12'
                        ></div>
                    </div>
                 </div>
               </div> 
               <div className='mt-10 flex justify-center text-center space-x-20'>
                   <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                     from-green-400 to-blue-500 transform transition-transform
                                     duration-300 hover:scale-125'>
                        1+
                      </h3>
                      <p>Year Experience</p>
                   </div>

                   <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                     from-green-400 to-blue-500 transform transition-transform
                                     duration-300 hover:scale-125'>
                        20+
                      </h3>
                      <p>Projects Completed</p>
                   </div>
                   <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                     from-green-400 to-blue-500 transform transition-transform
                                     duration-300 hover:scale-125'>
                        2+
                      </h3>
                      <p>Happy Client</p>
                   </div>
                </div>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default About
