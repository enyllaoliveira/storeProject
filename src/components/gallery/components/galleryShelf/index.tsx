import React from 'react'

import Picture1 from '../../SectionsOfPictures/shelfs/shelfAndTable.jpeg'
import Picture2 from '../../SectionsOfPictures/shelfs/shelfOne.jpeg'
import Picture3 from '../../SectionsOfPictures/shelfs/shelfTwo.png'
import Picture4 from '../../SectionsOfPictures/shelfs/shelfWithPartsOne.jpeg'
import Picture5 from '../../SectionsOfPictures/shelfs/shelfWithPartsTwo.png'
import Picture6 from '../../SectionsOfPictures/shelfs/smallShelf.jpeg'

export default function ShelfPage() {
    return(
        <div>
           <img src={Picture1} alt="shelf and table"/>
           <img src={Picture2} alt="shelf one"/>
           <img src={Picture3} alt="shelf two"/>
           <img src={Picture4} alt="shelf with parte one"/>
           <img src={Picture5} alt="shelf with parte two"/>
           <img src={Picture6} alt="small shelf"/>
        </div>
    )
}