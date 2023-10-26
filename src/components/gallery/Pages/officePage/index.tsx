import React from "react"

import Picture1 from '../../SectionsOfPictures/toOffices/bigOfficeTable2.jpeg'
import Picture2 from '../../SectionsOfPictures/toOffices/bigOfficeTableTwo.png'
import Picture5 from '../../SectionsOfPictures/toOffices/singleOfficeTable.jpeg'
import Picture6 from '../../SectionsOfPictures/toOffices/tableForTwo.jpeg'


export default function OfficePage() {
    return(
        <div className='flex flex-wrap  justify-evenly'>
            <img className='rounded-xl my-8 mx-8' src={Picture1} alt="toOffice 1"/>
            <img className='rounded-xl my-8 mx-8' src={Picture2} alt="toOffice 2"/>
            <img className='rounded-xl my-8 mx-8' src={Picture5} alt="toOffice 3"/>
            <img className='rounded-xl my-8 mx-8' src={Picture6} alt="toOffice 4"/>
        </div>
    )
}



