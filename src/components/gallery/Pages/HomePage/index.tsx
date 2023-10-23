import React from "react";
import { Link } from "react-router-dom";
import Table from '../../SectionsOfPictures/Home/bigTwo.jpeg'
import Offices from '../../SectionsOfPictures/Home/bigOfficeTable.jpeg'
import Shelfs from '../../SectionsOfPictures/Home/shelfTwo.png'
import ShelsWall from '../../SectionsOfPictures/Home/kitToWall.png'
import Restaurants from '../../SectionsOfPictures/Home/tableOne.jpeg'

export function Gallery() {
    return (
        <div className="flex flex-wrap justify-around my-8">
  
        <section>
        <h1 className="cursor-pointer text-center"> Mesas e cadeiras </h1>
        <img className="rounded-xl" src={Table} alt="fotos das mesas" title="Galeria das mesas"/>
        <div className="text-center" >
        <Link target="_blank" to='/tablepage'> Veja galeria de fotos </Link>
        </div>
        </section>

        <section>
            <h1 className="cursor-pointer text-center"> Estantes </h1>
            <img className="rounded-xl"src={Shelfs} alt="fotos das estantes" title="Galeria de mesas"/>
            <div className="text-center">
            <Link target="_blank" to='/shelfpage'> Veja galeria de fotos </Link>
            </div>
        </section>

        <section>
            <h1 className="cursor-pointer text-center"> Para escritórios </h1>
            <img className="rounded-xl" src={Offices} alt="fotos de escritórios" title="Galeria de móveis para escritórios"/>
            <div className="text-center">
            <Link target="_blank" to='/officepage'> Veja galeria de fotos </Link>
            </div>
        </section>
        
        <section>
            <h1 className="cursor-pointer text-center"> Estantes suspensas </h1>
            <img className="rounded-xl"src={ShelsWall} alt="fotos de estantes suspensas" title="Galeria de estantes suspensas"/>
            <div className="text-center" >
            <Link target="_blank" to='/shelfwallpage'> Veja galeria de fotos </Link>
            </div>

        </section>

         <section>
            <h1 className="cursor-pointer text-center"> Para restaurantes </h1>
            <img className="rounded-xl" src={Restaurants} alt="fotos de restaurantes" title="Galeria de mesas para restaurantes"/>
            <div className="text-center">
            <Link target="_blank" to='/restaurantepage'> Veja galeria de fotos </Link>
            </div>
        </section>
       
        </div>
    )
}
