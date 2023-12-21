import React from 'react'
import './Footer.css'
import Input from '../Input/Input'
import Btn from '../Map/btn/Btn.jsx'

const Footer = () => {
    return (
        <div>
            <div className='txt_footer'>
                <p className="title_footer">ПОЯВИЛИСЬ ВОПРОСЫ?</p>
                <p className="title_footer_i">Оставьте нам своё сообщение и <br />мы обязательно с Вами свяжемся</p>
            </div>
            <div className="input_main">
                <Input placeholder={'ИМЯ'} type={'text'} />
                <Input placeholder={'ТЕЛЕФОН'} type={'text'} />
                <Input placeholder={'СООБЩЕНИЕ'} type={'text'} />
            </div>
            <div className="last_footer">
                <Btn />
            </div>

        </div>
    )
}

export default Footer