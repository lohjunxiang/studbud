import React, { useEffect } from 'react'
import axios from 'axios'

const app_id = 'a35bc855'
const app_key = 'b5ffdb2b023a040b8ce50ff80e4b0471'
const dictionaryApiUrl = 'https://od-api.oxforddictionaries.com/api/v2/en-gb/apple'

const Dictionary = () => {
    const getDefinition = async () => {
        const res = await axios.get(dictionaryApiUrl, {
            headers: {
                app_id,
                app_key
            }
        })
        console.log(res.data)
    }

    getDefinition();

    return (
        <div style={{display: 'flex'}}>

            <div className='fullSizeSemiCircle' style={{ backgroundColor: '#4C0625', position: 'relative'}}>

            <div className='arrow-up'></div>
            </div>
            <div className='container' style={{backgroundColor: '#FFD600'}}></div>``





        </div>
    )
}

export default Dictionary
