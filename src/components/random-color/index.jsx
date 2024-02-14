import { useEffect, useState } from 'react'
import './styles.css'

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000')

    function randomCOlorUtility(length){
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor(color) {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = '#'

        for(let i = 0; i < 6; i++){
            hexColor += hex[randomCOlorUtility(hex.length)]
        }

        setColor(hexColor)
    }

    function handleCreateRandomRgbColor(color) {
        const r = randomCOlorUtility(256)
        const g = randomCOlorUtility(256)
        const b = randomCOlorUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()
    }, [typeOfColor])

    return (
        <div className='color-wrapper' style={{background: color}}>
            <div className='color-button-wrapper'>
                <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
            </div>
            <div className='title'>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}