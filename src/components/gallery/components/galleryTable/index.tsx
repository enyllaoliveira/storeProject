import React from 'react'

import Picture1 from '../../SectionsOfPictures/tables/BlackThree.png'
import Picture2 from '../../SectionsOfPictures/tables/BlackTwo.png'
import Picture3 from '../../SectionsOfPictures/tables/bigOne.png'
import Picture5 from '../../SectionsOfPictures/tables/bigTwo.jpeg'
import Picture6 from '../../SectionsOfPictures/tables/blackOne.jpeg'
import Picture7 from '../../SectionsOfPictures/tables/brownAndWhite.jpeg'
import Picture8 from '../../SectionsOfPictures/tables/brownBigOne.jpeg'
import Picture9 from '../../SectionsOfPictures/tables/brownBigThree.jpeg'
import Picture10 from '../../SectionsOfPictures/tables/brownBigtTwo.jpeg'
import Picture11 from '../../SectionsOfPictures/tables/brownOne.png'
import Picture12 from '../../SectionsOfPictures/tables/brownThree.png'

export default function TablePage() {
    return(
        <div className='flex flex-wrap justify-evenly'>
            <img className='rounded-xl my-8 mx-8' src={Picture10} alt="Table 10"/>
            <img className='rounded-xl my-8 mx-8' src={Picture1} alt="Table 1"/>
            <img className='rounded-xl my-8 mx-8' src={Picture2} alt="Table 2"/>
            <img className='rounded-xl my-8 mx-8' src={Picture6} alt="Table 6"/>
            <img className='rounded-xl my-8 mx-8' src={Picture5} alt="Table 5"/>
            <img className='rounded-xl my-8 mx-8' src={Picture3} alt="Table 3"/>
            <img className='rounded-xl my-8 mx-8' src={Picture8} alt="Table 8"/>
            <img className='rounded-xl my-8 mx-8' src={Picture9} alt="Table 9"/>
            <img className='rounded-xl my-8 mx-8' src={Picture11} alt="Table 11"/>
            <img className='rounded-xl my-8 mx-8' src={Picture12} alt="Table 12"/>
            <img className='rounded-xl my-8 mx-8' src={Picture7} alt="Table 7"/>
        </div>
    )
}

