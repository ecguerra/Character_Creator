import { useState, useEffect } from 'react'

const Character = () => {
    const [hair, setHair] = useState(null)
    const [eyes, setEyes] = useState(null)
    const [nose, setNose] = useState(null)
    const [feet, setFeet] = useState(null)

    const hairArr = ['hair1', 'hair2', 'hair3', 'hair4', 'hair5']
    const eyeArr = ['eye1', 'eye2', 'eye3', 'eye4', 'eye5']
    const noseArr = ['nose1', 'nose2', 'nose3', 'nose4', 'nose5']
    const feetArr = ['feet1', 'feet2', 'feet3', 'feet4', 'feet5']

    useEffect(()=>{

    },[])

    return(
        <>
        Heyyy
        </>
    )
}

export default Character