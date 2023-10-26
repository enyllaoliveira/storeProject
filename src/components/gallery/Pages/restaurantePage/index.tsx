import React from "react"

import Picture1 from '../../SectionsOfPictures/toRestaurants/tableFive.jpeg'
import Picture2 from '../../SectionsOfPictures/toRestaurants/tableFour.jpeg'
import Picture3 from '../../SectionsOfPictures/toRestaurants/tableOne.jpeg'
import Picture4 from '../../SectionsOfPictures/toRestaurants/tableSix.jpeg'
import Picture5 from '../../SectionsOfPictures/toRestaurants/tableThree.jpeg'
import Picture6 from '../../SectionsOfPictures/toRestaurants//tableTwo.jpeg'

export default function RestaurantePage() {
    return(
        <div className='flex flex-wrap  justify-evenly'>
           <img className='rounded-xl my-8 mx-8' src={Picture5} alt="Picture 1" />
           <img className='rounded-xl my-8 mx-8' src={Picture6} alt="Picture 2" />
           <img className='rounded-xl my-8 mx-8' src={Picture3} alt="Picture 3" />
           <img className='rounded-xl my-8 mx-8' src={Picture1} alt="Picture 4" />
           <img className='rounded-xl my-8 mx-8' src={Picture4} alt="Picture 5" />
           <img className='rounded-xl my-8 mx-8' src={Picture2} alt="Picture 6" />
        </div>
    )
}