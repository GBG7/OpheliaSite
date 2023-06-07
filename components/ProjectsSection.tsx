import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "My Music Playlist",
    description:
      "As Ophelia, I adore music deeply. It touches my heart, bringing comfort and allowing me to express emotions that words cannot capture.",
    image: "/hoverboard.jpg",
    github: "",
    link: "https://youtube.com/playlist?list=PL4v870MCrPdWhKc-zw4ZgfmhwKMk5JNqM",
  },
  {
    name: "Nature and Gardens",
    description: "I find peace in nature's embrace. The beauty of gardens and flowers brings me solace and tranquility amidst life's chaos.",
    image: "/tetrisbrae.webp",
    github: "",
    link: "https://imgur.com/gallery/g2qMYfX",
  },
  {
    name: "My Literature",
    description:
      "Literature is a cherished refuge that transports me to worlds beyond the confines of my reality, where words dance upon the page, kindling my imagination and igniting my soul with their boundless beauty.",
    image: "/breakoutproject.jpg",
    github: "",
    link: "https://www.poetryfoundation.org/poems/44675/the-passionate-shepherd-to-his-love",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        My Interests
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col p-3 text-center md:p-3 md:text-left animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image 
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
