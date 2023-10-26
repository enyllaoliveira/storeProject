import React from 'react'
import Picture1 from '../../SectionsOfPictures/shelfs/shelfAndTable.jpeg'
import Picture2 from '../../SectionsOfPictures/shelfs/shelfOne.jpeg'
import Picture3 from '../../SectionsOfPictures/shelfs/shelfTwo.png'
import Picture6 from '../../SectionsOfPictures/shelfs/smallShelf.jpeg'
import Picture7 from '../../SectionsOfPictures/shelfs/shelfWithPartsThree.jpeg'

export default function ShelfPage() {
    return(
        <div className='flex flex-wrap justify-evenly'>
            <img className='rounded-xl my-8 mx-8' src={Picture1} alt="shelf a1"/>
           <img className='rounded-xl my-8 mx-8' src={Picture7} alt="shelf 2"/>
           <img className='rounded-xl my-8 mx-8' src={Picture3} alt="shelf 3"/>
           <img className='rounded-xl my-8 mx-8' src={Picture2} alt="shelf 4"/>
           <img className='rounded-xl my-8 mx-8' src={Picture6} alt="small 5"/>

        </div>
    )
}
