
const services = [
    {
        id: 1,
        title: 'Web Design',
        description: 'Creating visually appealing, user-friendly and scalable web-design tailored to the clients need.',
    },
    {
        id: 2,
        title: 'UI/UX Optimization',
        description: 'Improving the usability and overall user experience of websites.',
    },
    {
        id: 3,
        title: 'Custom Web Application',
        description: 'Building dynamic, interactive applications to meet specific business.',
    },
    {
        id: 4,
        title: 'Performance Enhancement',
        description: 'Optimizing website speed and efficiency for better performance.',
    },
    {
        id: 5,
        title: 'Responsive Development',
        description: 'Ensuring websites look great on all devices, from desktops to smartphones.',
    },
    {
        id: 6,
        title: 'SEO Integration',
        description: 'Implementing best practices for search engines optimization to improve the site visibility.',
    }
];

const Service = () => {
  return (
    <div>
        <div className='bg-black text-white py-20' id='Services'>
           <div className='container mx-auto px-8 md:px-16 lg:px-24'>
              <h2 className='text-4xl text-bold text-center mb-12'>My Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map(service => (
                    <div key={service.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg
                                                     transform transition-transform duration-300
                                                      hover:scale-105">

                        <div className="text-right text-2xl font-bold text-transparent bg-clip-text 
                                        bg-gradient-to-r from-green-600 to-blue-400">
                          {service.id}
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
                                       bg-gradient-to-r from-green-400 to-blue-500">
                            {service.title}
                        </h3>
                        <p className="mt-2 text-gray-300">{service.description}</p>
                    </div>
                  ))}
              </div>
           </div>
        </div>
    </div>
  )
}

export default Service
