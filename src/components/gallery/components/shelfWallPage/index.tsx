import React from "react"

import Picture1 from '../../SectionsOfPictures/shelsWall/bigToWall.jpeg'
import Picture2 from '../../SectionsOfPictures/shelsWall/bigToWallTwo.jpeg'
import Picture3 from '../../SectionsOfPictures/shelsWall/kitToWall.png'



export default function ShelfWallPage() {
    return(
        <div className='justify-around'>
            <img src={Picture1} alt="ShelfWall 1"/>
            <img src={Picture2} alt="ShelfWall 2"/>
            <img src={Picture3} alt="ShelfWall "/>
        </div>
    )
}
