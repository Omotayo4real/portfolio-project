
import blueshoe from '../assets/blueshoe.jpg';
import converse from '../assets/converse.jpg';
import niceshoe from '../assets/niceshoe.jpg';

const projects = [
    {
        id: 1,
        name: 'Employee MS',
        technologies: 'MERN Stack',
        image: blueshoe,
        git: 'https://github.com/Omotayo'
    },
    {
        id: 2,
        name: 'Blog App',
        technologies: 'MERN Stack',
        image: converse,
        git: 'https://github.com/Omotayo'
    },
    {
        id: 3,
        name: 'Book MS',
        technologies: 'MERN Stack',
        image: niceshoe,
        git: 'https://github.com/Omotayo'
    },
]
const Projects = () => {
  return (
    <div>
        <div className='bg-black text-white py-20' id='services'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl text-bold text-center mb-12' id='projects'>My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 rounded-lg p-4 hover:shadow-lg
                                                     transform transition-transform duration-300
                                                      hover:scale-105'>

                        <img src={project.image} alt='' className='rounded-lg mb-4 w-full h-48 object-cover'/>
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r from-green-400
                                                          to-blue-500 text-white px-4 py-2 rounded-full transform 
                                                          transition-transform duration-300 hover:scale-105' 
                                                          target='blank'>GitHub</a>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
