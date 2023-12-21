import React from 'react'
import './Block.css'
import Txt_blc_min from './Txtblock/Txt_blc_min'
import Txt_blc from './Txtblock/Txt_blc'

const Block = () => {
    return (
        <div className='blc'>
            <div className="blc_flex">
                <Txt_blc_min />
                <Txt_blc />
            </div>
        </div>
    )
}

export default Block