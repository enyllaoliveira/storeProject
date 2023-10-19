import React from "react"

import Picture1 from '../../SectionsOfPictures/toOffices/bigOfficeTable2.jpeg'
import Picture2 from '../../SectionsOfPictures/toOffices/bigOfficeTableTwo.png'
import Picture3 from '../../SectionsOfPictures/toOffices/shelfAndTable.jpeg'
import Picture4 from '../../SectionsOfPictures/toOffices/shelfOne.jpeg'
import Picture5 from '../../SectionsOfPictures/toOffices/singleOfficeTable.jpeg'
import Picture6 from '../../SectionsOfPictures/toOffices/tableForTwo.jpeg'


export default function OfficePage() {
    return(
        <div className='justify-around'>
            <img src={Picture1} alt="toOffice 1"/>
            <img src={Picture2} alt="toOffice 2"/>
            <img src={Picture3} alt="toOffice 3"/>
            <img src={Picture4} alt="toOffice 4"/>
            <img src={Picture5} alt="toOffice 5"/>
            <img src={Picture6} alt="toOffice 6"/>
        </div>
    )
}



