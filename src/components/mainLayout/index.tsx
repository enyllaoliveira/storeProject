import React, {forwardRef, useRef, useEffect, useState} from "react";
import { Link, Outlet, Route } from "react-router-dom";
import { Header } from "../header";
import { Gallery } from "../gallery/Pages/HomePage";
import { Recomendations } from "../recomendations";
import { Details } from "../details";
import { Contact } from "../contact";
import { CiAt } from "react-icons/ci";
import PictureFundo from '../gallery/SectionsOfPictures/Layout/bigOne.jpeg'
import { ItemNav } from "../../interfaces/ItemNav";

const MainLayout = () => {
    const scrollRecomendation = useRef<HTMLInputElement>(null)
    const scrollGallery = useRef<HTMLInputElement>(null)
    const scrollDetails = useRef<HTMLInputElement>(null)
    const scrollContact = useRef<HTMLInputElement>(null)

    const [itemNav, setItemNav] = useState<ItemNav>();
    const callback = (name: ItemNav ) => {
      setItemNav(name)
    }

    useEffect(() => {
      navigateItem()
    }, [itemNav])
    
    const scroll = {
      '1': scrollRecomendation,
      '2': scrollGallery,
      '3': scrollDetails,
      '4': scrollContact
    }

    const navigateItem = () => {
      if (itemNav) {
        scroll[itemNav?.type!].current?.scrollIntoView()
      } else {
        scroll['1'].current?.scrollIntoView()
      }
    }

    const Picture = {
      backgroundImage: `url(${PictureFundo})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    // const [isIntersecting, setIsIntersecting] = useState(false);

    // useEffect(() => {
    //     const MyObserver = new IntersectionObserver((entries) => {
    //       entries.forEach((entry) => {
    //         setIsIntersecting(entry.isIntersecting);
    //       });
    //     });
    
    //     if (scrollContact.current) {
    //       MyObserver.observe(scrollContact.current);
    //     }
    //   }, []);
    
    //   const sectionClasses = `transition-opacity duration-500 ${
    //     isIntersecting ? "opacity-75" : "opacity-100"
    //   }`;
    
    //   const sectionClassesDetails = `transition-transform duration-500 ${
    //     isIntersecting ? "transform translate-x-0" : "transform -translate-x-4"
    //   }`;

    return (
      <div className="flex flex-col" >
        <div style={Picture}>

        <div className=" ml-6 py-4 ">
          <Header onClick={callback}/>
        </div>
           
        <section ref={scrollRecomendation} 
        className="shadow-lg p-4">
                                        
        <Recomendations/>
        </section> 
        </div>

        <section ref={scrollGallery}
        className="transition-transform delay-300 ease-in-out transform -translate-x-4 opacity-1 shadow-lg border border-gray-200 p-4">
        <Gallery />
         </section>

        <section ref={scrollDetails} className="shadow-lg border border-gray-200 p-4">
        <Details/>
        </section>
        
        <section ref={scrollContact} className="shadow-lg border border-gray-200 p-4`} shadow-md border border-gray-200 p-4">
        <Contact/>
        </section>
        </div>
    );
}

export default MainLayout


