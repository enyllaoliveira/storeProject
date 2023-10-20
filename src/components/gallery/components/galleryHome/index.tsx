import React from "react";
import { Link } from "react-router-dom";
import Table from '../../pictures/bigTwo.jpeg'
import Offices from '../../pictures/bigOfficeTable.jpeg'
import Shelfs from '../../pictures/shelfTwo.png'
import ShelsWall from '../../pictures/kitToWall.png'
import Restaurants from '../../pictures/tableOne.jpeg'

export function Gallery() {
    return (
        <div className="flex flex-wrap justify-around">
  
        <section>
        <h1 className="cursor-pointer text-center"> Mesas e cadeiras </h1>
        <img className="min-w-80 max-w-xs max-h-60 cursor-pointer" src={Table} alt="fotos das mesas" title="Galeria das mesas"/>
        <Link target="_blank" to='/tablepage'> Veja galeria de fotos </Link>
        </section>

        <section>
            <h1 className="cursor-pointer text-center"> Estantes </h1>
            <img className=" min-w-120 max-w-xs max-h-60 cursor-pointer"src={Shelfs} alt="fotos das estantes" title="Galeria de mesas"/>
            <Link target="_blank" to='/shelfpage'> Veja galeria de fotos </Link>
        </section>

        <section>
            <h1 className="cursor-pointer text-center"> Para escritórios </h1>
            <img className="max-w-xs max-h-60 cursor-pointer" src={Offices} alt="fotos de escritórios" title="Galeria de móveis para escritórios"/>
            <Link target="_blank" to='/officepage'> Veja galeria de fotos </Link>
        </section>
        
        <section>
            <h1 className="cursor-pointer text-center"> Estantes suspensas </h1>
            <img className="min-w-60 w-80 cursor-pointer"src={ShelsWall} alt="fotos de estantes suspensas" title="Galeria de estantes suspensas"/>
            <Link target="_blank" to='/shelfwallpage'> Veja galeria de fotos </Link>

        </section>

         <section>
            <h1 className="cursor-pointer text-center"> Para restaurantes </h1>
            <img className="min-w-60 w-80 cursor-pointer" src={Restaurants} alt="fotos de restaurantes" title="Galeria de mesas para restaurantes"/>
            <Link target="_blank" to='/restaurantepage'> Veja galeria de fotos </Link>

        </section>
       
        </div>
    )
}
