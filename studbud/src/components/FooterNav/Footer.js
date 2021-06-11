import React, {useState} from 'react'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const pageNames = ['Pomodoro', 'Kanban', 'Music Player', 'Dictionary']


const Footer = ({page, setPage}) => {


    const [activeCircle, setActiveCircle] = useState(false)


    return (


            
        <div className='footerNav'>

            <div onClick={ () => setPage((page+3)%4)} className='pageChangeBtn'>
                <h1> {pageNames[(page+2)%4]} </h1>
                <FaCaretLeft fontSize={50} />
            </div>
            <div className='footerCirclesContainer'>   
                <button onClick={ () => setPage(1)} className={`${page === 1 ? 'pageCirclesActive' : 'pageCircles'}`} style={ {backgroundColor: '#005AB7'} }> </button>
                <button onClick={ () => setPage(2)} className={`${page === 2 ? 'pageCirclesActive' : 'pageCircles'}`} style={ {backgroundColor: '#4C0625'} }> </button>
                <button onClick={ () => setPage(3)} className={`${page === 3 ? 'pageCirclesActive' : 'pageCircles'}`} style={ {backgroundColor: '#F2EFE3'} }> </button>
                <button onClick={ () => setPage(4)} className={`${page === 4 ? 'pageCirclesActive' : 'pageCircles'}`} style={ {backgroundColor: '#FFD600'} }> </button>
                {/* <h1>4 circle buttons</h1> */}
            </div>

            <div onClick={ () => setPage((page+1)%4)} className='pageChangeBtn'>

                <FaCaretRight fontSize={50}/>
                <h1>{pageNames[(page)%4]} </h1>
            </div>
            
            
        </div>
    )
}

export default Footer
