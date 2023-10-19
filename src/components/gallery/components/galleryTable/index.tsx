import React from 'react'

import Picture1 from '../../SectionsOfPictures/tables/BlackThree.png'
import Picture2 from '../../SectionsOfPictures/tables/BlackTwo.png'
import Picture3 from '../../SectionsOfPictures/tables/bigOne.png'
import Picture4 from '../../SectionsOfPictures/tables/bigThree.png'
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
        <div className='justify-around'>
            <img src={Picture1} alt="Table 1"/>
            <img src={Picture2} alt="Table 2"/>
            <img src={Picture3} alt="Table 3"/>
            <img src={Picture4} alt="Table 4"/>
            <img src={Picture5} alt="Table 5"/>
            <img src={Picture6} alt="Table 6"/>
            <img src={Picture7} alt="Table 7"/>
            <img src={Picture8} alt="Table 8"/>
            <img src={Picture9} alt="Table 9"/>
            <img src={Picture10} alt="Table 10"/>
            <img src={Picture11} alt="Table 11"/>
            <img src={Picture12} alt="Table 12"/>
        </div>
    )
}

