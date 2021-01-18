import React from 'react'
import {useStyle} from './hooks'

const BlockMover = ({i, w, h, scale, onClick}) => {
    const style = useStyle(i, w, h, scale)
    return (
        <div onClick = {onClick} style = {style}>
        </div>
    )
}

export default BlockMover