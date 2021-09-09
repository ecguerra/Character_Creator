import { useState, useEffect } from 'react'

const Character = () => {
    const hairArr = ['green', 'red', 'blue', 'purple', 'pink']
    const eyeArr = ['eye1', 'eye2', 'eye3', 'eye4', 'eye5']
    const noseArr = ['nose1', 'nose2', 'nose3', 'nose4', 'nose5']
    const feetArr = ['feet1', 'feet2', 'feet3', 'feet4', 'feet5']

    // there's a better way to do this
    const [hairInd, setHairInd] = useState(0)
    // let hairInd = 0
    let eyeInd = 0
    let noseInd = 0
    let feetInd = 0

    const [hair, setHair] = useState(hairArr[hairInd])
    const [eyes, setEyes] = useState(eyeArr[eyeInd])
    const [nose, setNose] = useState(noseArr[noseInd])
    const [feet, setFeet] = useState(feetArr[feetInd])

    const characterBody = {
        hair,
        eyes,
        nose,
        feet
    }

    useEffect(()=>{
        setHair(hairArr[hairInd])
    },[hair, hairInd])

    return(
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
                {characterBody.eyes}
            </div>
            <div id='characterNose'>
                {characterBody.nose}
            </div>
            <div id='characterFeet'>
                {characterBody.feet}
            </div>
        </div>
    )
}

export default Character