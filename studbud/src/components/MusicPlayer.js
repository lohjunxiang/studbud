import React from 'react'

const MusicPlayer = () => {
    return (

        <div className='musicPlayerContainer'>

            <div className='fullSizeSemiCircle'>
                {/* <p>circle 1</p> */}
            </div>

            <div className='musicPlayerMiddleCircle'>
                <div className='taskHeader' style={{width:'300px'}}>
                    <h1> MUSIC PLAYER </h1>
                </div>

                <div className='musicPlayer'>
                    <iframe src="https://open.spotify.com/embed/playlist/7rZ6LxPByZUuMhljsrtM8z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>


            {/* <div className='fullSizeSemiCircle' >
                <p>semicircle</p>
                <p>triangle</p>

            </div> */}

        </div>
    )
}

export default MusicPlayer
