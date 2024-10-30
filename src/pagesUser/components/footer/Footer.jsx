import React from 'react'
import footlogo from '../../../assets/img/logofooter.svg'
import app from '../../../assets/img/appstore.svg'
import play from '../../../assets/img/googleplay.svg'
import telegram from '../../../assets/img/contact.svg'
import instagram from '../../../assets/img/instagram (1) 1.svg'
import tiktok from '../../../assets/img/tiktok.svg'
import whatsapp from '../../../assets/img/WhatsApp.svg'


const Footer = () => {
  return (
      <div className ="black">
       <div className ="container">
        <div className="footer">
        <div className ="divfoot" >
           <img src={footlogo} alt="" />
           <p className ="textfooter">
           Машина – это №1 онлайн авторынок
           Бишкека и Кыргызстана нового
           поколения. Мы помогаем обменять,
           продать и купить авто в Кыргызстане. 
           </p>
         </div>
         <div>
         <h4 className ="text1">Каталог:</h4>
         <div className ="divflex">
         <a className ="text" href="">Легковые</a>
         <a className ="text" href="">Коммерческие</a>
         <a className ="text" href="">Спецтехника</a>
         </div>
         </div>
         <div>
         <h4 className ="text1">Компания:</h4>
         <div className ="divflex">
         <a className ="text" href="">О проекте</a>
         <a className ="text" href="">Помощь</a>
         </div>
         </div>
         <div>
         <h4 className ="text1">Партнерам:</h4>
         <div className ="divflex">
         <a className ="text" href="">Реклама на Mashina.kg</a>
         <a className ="text" href="">Рекламадателям</a>
         </div>
         </div>
         <div className ="blockfooter">
          <img src={app} alt="" />
          <img src={play} alt="" />
         </div>
        </div>
        <div className ="apps">
          <img src={telegram} alt="" />
          <img src={instagram} alt="" />
          <img src={tiktok} alt="" />
          <img src={whatsapp} alt="" />
        </div>
        <div className ="footertext">
          <a href="">Политика конфиденциальности</a>
          <a href="">Пользовательское соглашение</a>
        </div>
       </div>
      </div>
  )
}

export default Footer