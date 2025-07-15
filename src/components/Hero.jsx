import tayo from "../assets/tayo.jpg";
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 px-2 mt-12'>
      <img src={tayo} alt="" className='mx-auto mb-8 h-48 w-48 rounded-full 
                                              object-full transform transition-transform duration-300
                                              hover:scale-105'/>

      <h1 className='text-4xl font-bold'>
        I am {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Enisan, Omotayo</span> a Front-end Web Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>I specialize in building modern and responsive websites</p>
      <div className='mt-8 space-x-4'>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden
           md:inline transfrom transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" id="#Contact">
              Contact me</button>

        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden
           md:inline transfrom transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
