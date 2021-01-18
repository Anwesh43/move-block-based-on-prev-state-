import React from 'react'
import { useAnimatedScale, useDimension } from './hooks'
import BlockMover from './BlockMover'
const Container = (props) => {
    const {i, scale, start} = useAnimatedScale()
    return (
        <React.Fragment>
            <BlockMover w = {w} h = {h} i = {i} onClick = {start} scale = {scale}/>
        </React.Fragment>
    )
}

export default Container