import React from 'react'
import Header from "./header"
import Footer from "./footer"
import Projects from "./projects"
import Rise from "../assets/Risedemo.gif"


export default function LandingPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-row flex-wrap">

                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project1.png"}
                    description={"This project was designed to show our ability to create a responsive webpage to allow for better accessibility. Making a website accessible is good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google."}
                    deploy={"https://kofihayford.github.io/"}
                    repo={"https://github.com/kofihayford/kofihayford.github.io"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project5.PNG"}
                    description={"This project was designed to show our ability to create a responsive webpage to allow for better accessibility. Making a website accessible is good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google."}
                    deploy={"https://kofihayford.github.io/"}
                    repo={"https://github.com/kofihayford/kofihayford.github.io"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project3.PNG"}
                    description={"This project was designed to show our ability to create a responsive webpage to allow for better accessibility. Making a website accessible is good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google."}
                    deploy={"https://kofihayford.github.io/"}
                    repo={"https://github.com/kofihayford/kofihayford.github.io"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project4.PNG"}
                    description={"This project was designed to show our ability to create a responsive webpage to allow for better accessibility. Making a website accessible is good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google."}
                    deploy={"https://kofihayford.github.io/"}
                    repo={"https://github.com/kofihayford/kofihayford.github.io"}
                />
                <Projects
                    img={"https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project2.PNG"}
                    description={"This project was designed to show our ability to create a responsive webpage to allow for better accessibility. Making a website accessible is good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google."}
                    deploy={"https://kofihayford.github.io/"}
                    repo={"https://github.com/kofihayford/kofihayford.github.io"}
                />
                <Projects
                    img={Rise}
                    description={"This project was designed to show our ability to create a responsive webpage to allow for better accessibility. Making a website accessible is good for business for many reasons, one of them being that accessible sites are better positioned in search engines like Google."}
                    deploy={"https://kofihayford.github.io/"}
                    repo={"https://github.com/kofihayford/kofihayford.github.io"}
                />
            </div>
            <Footer />

        </div>
    )
}


// https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project1.png
// https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project5.PNG
// https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project3.PNG
// https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project4.PNG
// https://raw.githubusercontent.com/kofihayford/PortfolioPage1/main/assets/Project2.PNG