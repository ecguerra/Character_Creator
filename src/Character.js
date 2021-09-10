import { useState, useEffect } from 'react'

const Character = () => {
    const hairArr = ['green', 'red', 'blue', 'purple', 'pink']
    const eyeArr = ['eye1', 'eye2', 'eye3', 'eye4', 'eye5']
    const noseArr = ['nose1', 'nose2', 'nose3', 'nose4', 'nose5']
    const feetArr = ['feet1', 'feet2', 'feet3', 'feet4', 'feet5']

    const [hairInd, setHairInd] = useState(0)
    const [eyeInd, setEyeInd] = useState(0)
    const [noseInd, setNoseInd] = useState(0)
    const [feetInd, setFeetInd] = useState(0)

    const [hair, setHair] = useState(hairArr[hairInd])
    const [eyes, setEyes] = useState(eyeArr[eyeInd])
    const [nose, setNose] = useState(noseArr[noseInd])
    const [feet, setFeet] = useState(feetArr[feetInd])

    const [savedChars, setSavedChars] = useState([])

    const characterBody = {
        hair,
        eyes,
        nose,
        feet
    }

    useEffect(()=>{
        setHair(hairArr[hairInd])
    },[hairInd])

    useEffect(()=>{
        setEyes(eyeArr[eyeInd])
    },[eyeInd])

    useEffect(()=>{
        setNose(noseArr[noseInd])
    },[noseInd])

    useEffect(()=>{
        setFeet(feetArr[feetInd])
    },[feetInd])

    return(
        <div>
            <div id='characterBody'>
                <div id='characterHair' key='charHair' style={{backgroundColor: characterBody.hair}}>
                    <button onClick={()=> {
                        if(hairInd > 0 ) setHairInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.hair}
                    <button onClick={()=> {
                        if(hairInd < hairArr.length -1 ) setHairInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
                <div id='characterEyes'>
                    <button onClick={()=> {
                        if(eyeInd > 0 ) setEyeInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.eyes}
                <button onClick={()=> {
                        if(eyeInd < eyeArr.length -1 ) setEyeInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
                <div id='characterNose'>
                    <button onClick={()=> {
                        if(noseInd > 0 ) setNoseInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.nose}
                    <button onClick={()=> {
                        if(noseInd < noseArr.length -1 ) setNoseInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
                <div id='characterFeet'>
                    <button onClick={()=> {
                        if(feetInd > 0 ) setFeetInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.feet}
                    <button onClick={()=> {
                        if(feetInd < feetArr.length -1 ) setFeetInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
            </div>
            <button onClick={()=>{
                setSavedChars([...savedChars, {hair, eyes, nose, feet}])}}>Save Character</button>
            <div>
                {savedChars.length > 0 && savedChars.map((char, index) => (
                    <div key={index}>
                        {char.hair}{' '}
                        {char.eyes}{' '}
                        {char.nose}{' '}
                        {char.feet}{' '}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Character