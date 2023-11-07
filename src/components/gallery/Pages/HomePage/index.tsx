import React from "react";
import { Link } from "react-router-dom";
import Table from '../../SectionsOfPictures/Home/bigTwo.jpeg'
import Offices from '../../SectionsOfPictures/Home/bigOfficeTable.jpeg'
import Shelfs from '../../SectionsOfPictures/Home/shelfTwo.png'
import ShelsWall from '../../SectionsOfPictures/Home/kitToWall.png'
import Restaurants from '../../SectionsOfPictures/Home/tableOne.jpeg'

export function Gallery() {
    return (
        <div className="flex flex-wrap justify-around">
            <section className="my-6 text-center">
                <h1 className="font-bold text-xl">Mesas e Cadeiras</h1>
                <img className="rounded-xl my-2" src={Table} alt="Fotos das mesas" title="Galeria das mesas" />
                <div>
                    <Link to='/tablepage' className="font-bold text-sm hover:text-green-500" target="_blank" >Galeria de fotos</Link>
                </div>
            </section>

            <section className="my-6 text-center">
                <h1 className="font-bold text-xl">Para Escritórios</h1>
                <img className="rounded-xl my-2" src={Offices} alt="Fotos de escritórios" title="Galeria de móveis para escritórios" />
                <div>
                    <Link className="font-bold text-sm hover:text-green-500" target="_blank" to='/officepage'>Galeria de fotos</Link>
                </div>
            </section>

            <section className="my-6 text-center">
                <h1 className="c font-bold text-xl">Para Restaurantes</h1>
                <img className="rounded-xl my-2" src={Restaurants} alt="Fotos de restaurantes" title="Galeria de mesas para restaurantes" />
                <div>
                    <Link className="font-bold text-sm hover:text-green-500" target="_blank" to='/restaurantepage'>Galeria de fotos</Link>
                </div>
            </section>

            <section className="my-6 text-center">
                <h1 className="font-bold text-xl">Estantes fixas</h1>
                <img className="rounded-xl my-2" src={Shelfs} alt="Fotos das estantes" title="Galeria de estantes" />
                <div>
                    <Link to='/shelfpage' className="font-bold text-sm  hover:text-green-500" target="_blank">Galeria de fotos</Link>
                </div>
            </section>         

            <section className="my-6 text-center">
                <h1 className="font-bold text-xl">Estantes Suspensas</h1>
                <img className="rounded-xl my-2" src={ShelsWall} alt="Fotos de estantes suspensas" title="Galeria de estantes suspensas" />
                <div>
                    <Link className="font-bold text-sm hover:text-green-500" target="_blank" to='/shelfwallpage'>Galeria de fotos</Link>
                </div>
            </section>
        </div>
    );
}