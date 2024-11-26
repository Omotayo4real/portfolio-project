
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl text-bold text-center mb-12'>Contacts Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
              <div className='flex-1'>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                               from-green-400 to-blue-800 mb-4">Let Us Talk.</h3>
                <p>I am open to duscussing web development projects or partnership<br/> opportunities</p>
               <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                <a href="mailto:omotayoenisan9@gmail.com"className="hover:underline"> omotayoenisan9@gmail.com </a>
               </div>

               <div className="mb-4">
                <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                <span>+2349161766950</span>

                <div className="mt-4">
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                <span>No 5, lewis street, Santos Layout, Akowonjo, Lagos, Nigeria.</span>
              </div>
            </div>
            </div>
         <div className="flex-1">
            <form className="space-y-2">
              <label htmlFor="name" className="block mb-2">Your Name</label>
              <input type="text" className="w-full rounded bg-gray-800 border border-gray-600 focus:outline-none
                                         focus:border-green-400 px-2" placeholder="Enter Your Name"/>
              
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" className="w-full rounded bg-gray-800 border border-gray-600 focus:outline-none
                                         focus:border-green-400 px-2" placeholder="Enter Your Email"/>
            
              <label htmlFor="email" className="block mb-2">Message</label>
              <textarea type="message" className="w-full rounded bg-gray-800 border border-gray-600 focus:outline-none
                                         focus:border-green-400 px-2" placeholder="Enter Your Message " rows='5'/>

              <button className=" bg-gradient-to-r from-green-400 to-blue-500 text-white hidden
              md:inline transfrom transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
            </form>
         </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact
