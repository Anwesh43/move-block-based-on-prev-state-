import {useState, useEffect} from 'react'

const scGap = 0.02 
const delay = 20

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
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
                        setI(i + 1)
                    }
                })
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (i, w, h, scale) => {
    const size = 0.2 * Math.min(w, h)
    const position = 'absolute'
    const left = `${i * w / 10 + w * 0.1 * scale}px`
    const top = `${h - size}px`
    const width = `${size}px`
    const height = `${size}px`
    const background = 'indigo'
    return {
        width, 
        height, 
        position, 
        left, 
        top,
        background
    }
}