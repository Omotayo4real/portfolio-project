
import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/Screenshot-_3_.jpeg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

const projects = [
    {
        id: 1,
        name: 'Technical Documentation',
        technologies: 'HTML & CSS',
        image: image1,
        git: 'https://github.com/Omotayo4real/technical_documentation',
        link: "https://technical-documentation-blond.vercel.app/"
    },
    {
        id: 2,
        name: 'Landing Page',
        technologies: 'HTML & CSS',
        image: image2,
        git: 'https://github.com/Omotayo4real/tribute_page',
        link: "https://tribute-page-lqxl.vercel.app/"
    },
    {
        id: 3,
        name: 'Tribute page',
        technologies: 'HTML & CSS',
        image: image4,
        git: 'https://github.com/Omotayo4real/tribute-page',
        link: "https://tribute-page-five-virid.vercel.app/"
    },
    {
        id: 3,
        name: 'Form',
        technologies: 'HTML & CSS',
        image: image5,
        git: 'https://github.com/Omotayo4real/form-repo',
        link: "https://form-repo-git-main-omotayo4reals-projects.vercel.app/"
    },
    {
        id: 3,
        name: 'E-Commerce website',
        technologies: 'React js & Tailwind CSS',
        image: image6,
        git: 'https://github.com/Omotayo4real/e-Commerce',
        link: "https://e-commerce-nine-phi-41.vercel.app/"
    },
    {
        id: 3,
        name: 'Porfolio Page',
        technologies: 'React js & Tailwind CSS',
        image: image7,
        git: 'https://github.com/Omotayo4real/portfolio-project',
        link: "https://portfolio-project-nu-smoky.vercel.app/"
    },
    {
        id: 3,
        name: 'Product Page',
        technologies: 'React js & Tailwind CSS',
        image: image3,
        git: 'https://github.com/Omotayo4real/landing-project',
        link: "https://landing-project-pi-lovat.vercel.app/"
    },
]
const Projects = () => {
  return (
    <div>
        <div className='bg-black text-white py-20' id='Projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl text-bold text-center mb-12' id='projects'>My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 rounded-lg p-4 hover:shadow-lg
                                                     transform transition-transform duration-300
                                                      hover:scale-105'>

                       <a href={project.link} target="_blank" className="text-blue-800 underline"> <img src={project.image} alt='' className='rounded-lg mb-4 w-full  object-cover'/></a>  
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
