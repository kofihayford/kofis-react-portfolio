import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function About() {
    return (
        <div>
            <Header />
            <div>
                <h1 className="flex justify-center text-5xl m-10"> Kofi Hayford</h1>
                <div className="flex justify-center p-8"> <img className="w-72 hover:shadow-inner shadow-2xl rounded-lg" src="https://kofihayford.github.io/PortfolioPage1/assets/KofiHayfordHeadshot.jpg" /> </div>
                <p className="flex justify-center text-lg text-center p-10"> Kofi is a Student at the Columbia University's Full Stack Coding Bootcamp learning how to use various coding languages to create web applications. In addition to oding this very intense bootcamp that concluded in April 2021, Kofi enjoys singing, photography/videography, working out, reading, and exploring entrepreneurship.</p>

                <p className="flex justify-center p-10">
                    <a className="py-4 px-4 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 border-solid border-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:shadow-inner shadow-2xl" href="https://www.kofihayford.com">Kofi's Website</a>
                    <a className="py-4 px-4 bg-red-800 hover:bg-red-500 text-white rounded mx-10 border-solid border-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:shadow-inner shadow-2xl" href="https://github.com/kofihayford">Kofi's Github</a>
                    <a className="py-4 px-4 bg-green-800 hover:bg-green-500 text-white rounded mx-10 border-solid border-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:shadow-inner shadow-2xl" href="./assets/Resume2021.pdf">Kofi's Resume</a>
                    <a className="py-4 px-4 bg-indigo-800 hover:bg-indigo-500 text-white rounded mx-10 border-solid border-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:shadow-inner shadow-2xl" href="https://www.linkedin.com/in/kofihayford/">Kofi's
                            LinkedIn</a>
                </p>
            </div>
            <Footer />
        </div>
    )
}
