import React from "react"

import Picture1 from '../../SectionsOfPictures/shelsWall/bigToWall.jpeg'
import Picture2 from '../../SectionsOfPictures/shelsWall/bigToWallTwo.jpeg'
import Picture3 from '../../SectionsOfPictures/shelsWall/kitToWall.png'



export default function ShelfWallPage() {
    return(
        <div className='flex flex-wrap  justify-evenly'>
            <img className='rounded-xl my-8 mx-8' src={Picture1} alt="ShelfWall 1"/>
            <img className='rounded-xl my-8 mx-8' src={Picture2} alt="ShelfWall 2"/>
            <img className='rounded-xl my-8 mx-8' src={Picture3} alt="ShelfWall "/>
        </div>
    )
}
