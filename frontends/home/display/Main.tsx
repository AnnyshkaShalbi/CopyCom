import { Cemjsx, Fn } from "cemjs-all"
import whatsupGreen from '@svg/icons/whatsupGreen.svg'
import doneWhite from '@svg/icons/doneWhite.svg'
import diploms from '@images/mainPage/diploms.png'
import arrowTopRight from '@svg/icons/arrowTopRight.svg'

const RenderMain = () => {
    return(
        <div class="home-main">
            <img class="home-main-img" src={diploms} alt="Заказать печать диплома | Копиком" />
            <a href="/order" class="home-circle" onclick={Fn.link}>
                <div class="home-circle_inner">
                    <img src={arrowTopRight} alt="Заказать печать диплома | Копиком" class="mb-10" />
                    <span class="home-circle-text">закажи</span>
                    <span class="home-circle-text">печать</span>
                    <span class="home-circle-text">диплома</span>
                </div>
            </a>
            <div class="wrapper">
                <div class="home-text-wrap">
                    <p class="home-text">Хей, студент! Тебя уже всё достало и ты хочешь поскорее сдать диплом?</p>
                    <p class="home-text">Не парься —</p>
                </div>
                <h1 class="home-main-title">закажи <span class="home-main-title_blue">печать диплома</span> у нас</h1>
                <div class="home-main-steps">
                    <div class="home-main-steps_item">
                        <span class="home-main-steps_item__circle">1</span>
                        <p>Загружаешь диплом</p>
                    </div>
                    <div class="home-main-steps_item">
                        <span class="home-main-steps_item__circle">2</span>
                        <p>Выбираешь цвет и обложку</p>
                    </div>
                    <div class="home-main-steps_item">
                        <span class="home-main-steps_item__circle home-main-steps_item__circle-done">
                            <img src={doneWhite} alt="Забираешь свой диплом" />
                        </span>
                        <p>Забираешь свой диплом</p>
                    </div>
                </div>
                <div class="home-main-ps">
                    <p class="home-main-ps_text">P.S. Только у нас ты можешь сделать обложку с фирменной эмблемой своего ВУЗа!</p>
                </div>
            </div>
        </div>
    )
}

const RenderHomeMap = () => {
    return (
        <div class="home-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A33e360ab2f735f85ee7213537d7ff886d1e927e4e5aead045fe67e730e69b03b&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        </div>
    )
}

export default function () {
    return (
        <section class="home">
           
            <RenderMain />
            
            <div class="wrapper">
                <h2 class="home-info_title mb-25">Наши к<span class="circle"></span>пицентры</h2>
                <a class="home-phone mb-25" href="https://api.whatsapp.com/send/?phone=79154310666">
                    <span class="home-phone_number">+7 (915) 431-06-66</span>
                    <img src={whatsupGreen} alt="Телефон для связи Whats'up " />
                </a>
                <RenderHomeMap />
            </div>
            
            
        </section>
    )
}