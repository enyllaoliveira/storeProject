import React, {useRef, useEffect, useState} from "react";
import { Header } from "../header";
import { Gallery } from "../gallery/Pages/HomePage";
import { Recomendations } from "../recomendations";
import { Details } from "../details";
import { Contact } from "../contact";
import PictureFundo from '../gallery/SectionsOfPictures/Layout/bigOne.jpeg'
import { ItemNav } from "../../interfaces/ItemNav";

const MainLayout = () => {
    const Picture = {
    backgroundImage: `url(${PictureFundo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    }

    const scrollRecomendation = useRef<HTMLInputElement>(null)
    const scrollGallery = useRef<HTMLInputElement>(null)
    const scrollDetails = useRef<HTMLInputElement>(null)
    const scrollContact = useRef<HTMLInputElement>(null)

    const [itemNav, setItemNav] = useState<ItemNav>();
    const callback = (name: ItemNav ) => {
      setItemNav(name)
    }

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

    useEffect(() => {
      navigateItem()
    }, [itemNav])
    
    return (
      <div className="flex flex-col" >
        <div style={Picture}>

        <div className=" ml-6 py-4 ">
          <Header onClick={callback}/>
        </div>
           
        <section ref={scrollRecomendation} 
        className="shadow-lg p-4 " >
                                        
        <Recomendations/>
        </section> 
        </div>

        <section ref={scrollGallery}
        className="  ml-6 py-4">
        <Gallery/>
         </section>

        <section ref={scrollDetails} className="shadow-lg border border-gray-200 p-4">
        <Details/>
        </section>
        
        <section ref={scrollContact} className="p-4">
        <Contact/>
        </section>
        </div>
    );
}

export default MainLayout


