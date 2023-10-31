import React, {forwardRef, useRef, useEffect, useState} from "react";
import { Link, Outlet, Route } from "react-router-dom";
import { Header } from "../header";
import { Gallery } from "../gallery/Pages/HomePage";
import { Recomendations } from "../recomendations";
import { Details } from "../details";
import { Contact } from "../contact";
import { CiAt } from "react-icons/ci";
import PictureFundo from '../gallery/SectionsOfPictures/Layout/bigOne.jpeg'

const MainLayout = () => {
    const scrollRecomendation = useRef<HTMLInputElement>(null)
    const scrollGallery = useRef<HTMLInputElement>(null)
    const scrollDetails = useRef<HTMLInputElement>(null)
    const scrollContact = useRef<HTMLInputElement>(null)
   
    const [isIntersecting, setIsIntersecting] = useState(false);

    const Picture = {
      backgroundImage: `url(${PictureFundo})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    useEffect(() => {
        const MyObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            setIsIntersecting(entry.isIntersecting);
          });
        });
    
        if (scrollContact.current) {
          MyObserver.observe(scrollContact.current);
        }
      }, []);
    
      const sectionClasses = `transition-opacity duration-500 ${
        isIntersecting ? "opacity-75" : "opacity-100"
      }`;
    
      const sectionClassesDetails = `transition-transform duration-500 ${
        isIntersecting ? "transform translate-x-0" : "transform -translate-x-4"
      }`;

    return (
      <div className="flex flex-col" >
        <div style={Picture}>

            <div className="flex flex-row justify-between ml-6 py-4">
            <section>
              <CiAt/>
            </section>
   
            <section className="flex flex-col mr-6">
            {/* <Header/>  */}
            <button className=" hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => scrollRecomendation.current?.scrollIntoView()}>
            Recomendações
             </button>
            <button className="hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => scrollGallery.current?.scrollIntoView()}>
            Galeria de fotos
            </button>

            <button className="hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => scrollDetails.current?.scrollIntoView()}>
            Detalhes do produto
            </button>

             <button className="hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => scrollContact.current?.scrollIntoView()}>
            Contato
            </button>
            </section>
         </div>
           
        <section ref={scrollRecomendation} 
        className={`${sectionClasses} shadow-lg border border-gray-200 p-4` } >
                                        
        <Recomendations/>
        </section> 
        </div>

        <section ref={scrollGallery}
        className={`${sectionClasses} transition-transform delay-300 ease-in-out transform -translate-x-4 opacity-1 shadow-lg border border-gray-200 p-4`}>
        <Gallery />
         </section>

        <section ref={scrollDetails} className={`${sectionClassesDetails} shadow-lg border border-gray-200 p-4`}>
        <Details/>
        </section>
        
        <section ref={scrollContact} className={`${`${sectionClasses} shadow-lg border border-gray-200 p-4`} shadow-md border border-gray-200 p-4`}>
        <Contact/>
        </section>
        </div>
    );
}

export default MainLayout


