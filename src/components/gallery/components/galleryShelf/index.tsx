import React from 'react'

import Picture1 from '../../SectionsOfPictures/shelfs/shelfAndTable.jpeg'
import Picture2 from '../../SectionsOfPictures/shelfs/shelfOne.jpeg'
import Picture3 from '../../SectionsOfPictures/shelfs/shelfTwo.png'
import Picture6 from '../../SectionsOfPictures/shelfs/smallShelf.jpeg'
import Picture7 from '../../SectionsOfPictures/shelfs/shelfWithPartsThree.jpeg'

export default function ShelfPage() {
    return(
        <div className='flex flex-wrap justify-between mx-10	my-10'>
            <img className='rounded-xl my-8 mx-8' src={Picture1} alt="shelf and table"/>
           <img className='rounded-xl my-8 mx-8' src={Picture7} alt="small shelf"/>
           <img className='rounded-xl my-8 mx-8' src={Picture3} alt="shelf two"/>
           <img className='rounded-xl my-8 mx-8' src={Picture2} alt="shelf one"/>
           <img className='rounded-xl my-8 mx-8' src={Picture6} alt="small shelf"/>

        </div>
    )
}
