import {useState, useEffect} from 'react'

const scGap = 0.02 
const delay = 20

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    setScale(prevScale => prevScale + scGap)
                    currScale += scGap 
                    if (currScale > 1) {
                        clearInterval(interval)
                        setScale(0)
                        setAnimated(false)
                    }
                })
            }
        }
    }
}