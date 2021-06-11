import React, { useState } from 'react'
import axios from 'axios'
import Button from './timer-components/Button';

const dictionaryApiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en_GB/'

const Dictionary = () => {
    const [searchWord, setSearchWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [example, setExample] = useState('');

    const getDefinition = async () => {
        try {
            const res = await axios.get(dictionaryApiUrl + searchWord)
            console.log(res.data)
            setDefinition(res.data[0].meanings[0].definitions[0].definition)
            setExample(res.data[0].meanings[0].definitions[0].example)
        } catch (err) {
            setDefinition('This word does not exist')
            setExample('')
        }


    }

    return (
        <div style={{ display: 'flex' }}>

            <div className='fullSizeSemiCircle' style={{ backgroundColor: '#4C0625', position: 'relative' }}>

                <div className='arrow-up'></div>
            </div>
            <div className='container' style={{ 
                backgroundColor: '#FFD600', 
                justifyContent: 'flex-start', 
                paddingTop: '70px'
                }}>
                    <div className='taskHeader' style={{width:'300px', margin:'0 0 15px 0'}}>
                    <h1> DICTIONARY </h1>
                </div>

                {/* <h1 style={{ textAlign: 'center', color: '#2a2a2a' }} >Dictionary</h1> */}
                <div>
                    <input
                        value={searchWord}
                        onChange={(e) => setSearchWord(e.target.value)}
                        style={{ width: '200px', padding: '0 30px ' }}
                    ></input>

                    <Button text="Search" color="#005AB7" onClick={() => getDefinition()}></Button>
                </div>

                <div className='searchResults'>

                    <div style={{margin: '0 0 10px 0'}} >
                    <h3>Definition:</h3>
                    {definition}
                    </div>
                    <br />
                    <h3>Example:</h3>
                    {example}
                </div>
            </div>




        </div>
    )
}

export default Dictionary
