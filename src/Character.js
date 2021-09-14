import { useState, useEffect } from 'react'
import './css/character.css'

const Character = () => {
    const hairArr = ['hair1', 'hair2', 'hair3', 'hair4', 'hair5']
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

    const [id, setId] = useState(`${hairInd}${eyeInd}${noseInd}${feetInd}-1`)

    const [canSave, setCanSave] = useState(true)
    const [savedChars, setSavedChars] = useState([])

    const characterBody = {
        id,
        hair,
        eyes,
        nose,
        feet,
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

    useEffect(()=>{
        const charDetails = Object.values(characterBody)
        savedChars.forEach(char => {
            const savedDetails = Object.values(char)
            if(!savedDetails.includes(charDetails[0])) {
                setCanSave(true)
                setId(`${hairInd}${eyeInd}${noseInd}${feetInd}-1`)
            } else if(!savedDetails.includes(`${hairInd}${eyeInd}${noseInd}${feetInd}-2`)) {
                setCanSave(true)
                setId(`${hairInd}${eyeInd}${noseInd}${feetInd}-2`)
            } else {
                setCanSave(false)
            }
        })

    },[hairInd,eyeInd,noseInd,feetInd,savedChars])

    return(
        <div>
            <div className='characterBody'>
                <div id='characterHair' key='charHair' className={characterBody.hair}>
                    <button onClick={()=> {
                        if(hairInd > 0 ) setHairInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.hair}
                    <button onClick={()=> {
                        if(hairInd < hairArr.length -1 ) setHairInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
                <div id='characterEyes' className={characterBody.eyes}>
                    <button onClick={()=> {
                        if(eyeInd > 0 ) setEyeInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.eyes}
                <button onClick={()=> {
                        if(eyeInd < eyeArr.length -1 ) setEyeInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
                <div id='characterNose' className={characterBody.nose}>
                    <button onClick={()=> {
                        if(noseInd > 0 ) setNoseInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.nose}
                    <button onClick={()=> {
                        if(noseInd < noseArr.length -1 ) setNoseInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
                <div id='characterFeet' className={characterBody.feet}>
                    <button onClick={()=> {
                        if(feetInd > 0 ) setFeetInd(prevInd => prevInd - 1)
                    }}>&lt;</button>
                    {characterBody.feet}
                    <button onClick={()=> {
                        if(feetInd < feetArr.length -1 ) setFeetInd(prevInd => prevInd + 1)
                    }}>&gt;</button>
                </div>
            </div>
            {canSave ? (
                <button onClick={()=>{
                    setSavedChars([...savedChars, {id, hair, eyes, nose, feet}])}}>Save Character
                </button>
            ) : (
                <h4>You already have 2 of this Bean!</h4>
            )}
            <div className='savedChars'>
                {savedChars.length > 0 && savedChars.map((char, index) => (
                    <div key={char.id} className='characterBody bodyThumb'>
                        <div className={char.hair}></div>
                        <div className={char.eyes}>
                            {/* {char.eyes} */}
                        </div>
                        <div className={char.nose}>
                            {/* {char.nose} */}
                        </div>
                        <div className={char.feet}>
                            {/* {char.feet} */}
                        </div>
                        {char.id}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Character