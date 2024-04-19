import { Cemjsx, Fn } from "cemjs-all"
import metro from '@json/metro'
import metroLogo from '@svg/icons/metro.svg'
import whatsupGreen from '@svg/icons/whatsupGreen.svg'
import doneWhite from '@svg/icons/doneWhite.svg'
import diploms from '@images/mainPage/diploms.png'
import diplomMobile from '@images/mainPage/diplomsMobile.png'
import arrowTopRight from '@svg/icons/arrowTopRight.svg'

const RenderMain = () => {
    return (
        <div class="home-main">
            <img class="home-main-img" src={diploms} alt="Заказать печать диплома | Копиком" />
            <img class="home-main-img home-main-img__mobile" src={diplomMobile} alt="Заказать печать диплома | Копиком" />


            <div class="wrapper">
                <div class="home-text-wrap">
                    <p class="home-text">Хей, студент! Тебя уже всё достало и ты хочешь поскорее сдать диплом?</p>
                    <p class="home-text">Не парься —</p>
                </div>

                <h1 class="home-main-title">
                    <div>
                        <p class="text-nowrap">закажи <span class="home-main-title_blue">печать</span></p>
                        <p class="text-nowrap"><span class="home-main-title_blue">диплома</span> у нас</p>
                    </div>
                    <a class="home-circle" onclick={() => {
                        Fn.initOne("modalSoon", {})
                    }}>
                        <div class="home-circle_inner">
                            <img src={arrowTopRight} alt="Заказать печать диплома | Копиком" class="mb-10" />
                            <span class="home-circle-text">закажи</span>
                            <span class="home-circle-text">переплет</span>
                            <span class="home-circle-text">диплома</span>
                        </div>
                    </a>
                </h1>

                <div class="home-main-info">
                    <div class="home-main-info_content">
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

                    <a class="home-circle home-circle__mobile" onclick={() => {
                        Fn.initOne("modalSoon", {})
                    }}>
                        <div class="home-circle_inner">
                            <img src={arrowTopRight} alt="Заказать печать диплома | Копиком" class="mb-10" />
                            <span class="home-circle-text">закажи</span>
                            <span class="home-circle-text">печать</span>
                            <span class="home-circle-text">диплома</span>
                        </div>
                    </a>
                </div>


            </div>
        </div>
    )
}

const RenderHomeMap = () => {
    return (
        <div class="home-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab8083df1b3091544fa582203d1bc98d46fbc2d03dcebb92311d5ab3fe0072652&amp;source=constructor" width="100%" height="345" frameborder="0"></iframe>
        </div>
    )
}

const RenderMetro = ({ items }) => {
    console.log('=items=', items)

    return (
        <div class="home-metro">
            {
                items.map((item) => {
                    return (
                        <div class="home-metro-item">
                            <div class="home-metro-img">
                                <img src={metroLogo} alt={item.title} />
                            </div>
                            <div class="home-metro-info">
                                <h4 class="home-metro-title">{item.title}</h4>
                                <span class="home-metro-address text-gray">{item.address}</span>
                                <p>{item.openinghouse}</p>
                            </div>
                        </div>
                    )
                })
            }
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
            </div>
            <RenderHomeMap />
            <div class="wrapper">
                <RenderMetro items={metro} />
            </div>



        </section>
    )
}