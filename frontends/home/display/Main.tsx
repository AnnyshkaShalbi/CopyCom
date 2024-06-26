import { Cemjsx, Fn } from "cemjs-all"
import metro from '@json/metro'
import metroLogo from '@svg/icons/metro.svg'
import whatsupGreen from '@svg/icons/whatsupGreen.svg'
import doneWhite from '@svg/icons/doneWhite.svg'
import arrowTopRight from '@svg/icons/arrowTopRight.svg'
import diplom1920 from '@images/diplomsMain/img-1920х1080.png'
import diplom980 from '@images/diplomsMain/img-980x700.png'
import diplom600 from '@images/diplomsMain/img-600x900.png'
import diplom360 from '@images/diplomsMain/img-360x840.png'


const RenderMain = () => {
    return (
        <div class="home-main">
            <picture>
                <source media="(min-width: 1200px)" srcset={diplom1920} alt="Заказать печать диплома | Копиком" class="home-main-img" />
                <source media="(min-width: 980px)" srcset={diplom1920} alt="Заказать печать диплома | Копиком" class="home-main-img" />
                <source media="(min-width: 600px)" srcset={diplom600} alt="Заказать печать диплома | Копиком" class="home-main-img" />
                <source media="(min-width: 360px)" srcset={diplom360} alt="Заказать печать диплома | Копиком" class="home-main-img" />
                <img class="home-main-img" src={diplom360} alt="Заказать печать диплома | Копиком - копицентр для студентов" />
            </picture>

            <div class="wrapper">
                <div class="home-text-wrap">
                    <p class="home-text" ref="hey">Хей, студент! Тебя уже всё достало и ты хочешь поскорее сдать диплом?</p>
                    <p class="home-text" ref="dontWorry">Не парься —</p>
                </div>

                <h1 class="home-main-title">
                    <div>
                        <p class="text-nowrap">закажи <span class="home-main-title_blue">печать</span></p>
                        <p class="text-nowrap"><span class="home-main-title_blue">диплома</span> у нас</p>
                    </div>
                    <a class="home-circle" href="/order" onclick={Fn.link}>
                        <div class="home-circle_inner">
                            <img src={arrowTopRight} alt="Заказать печать диплома | Копиком" class="mb-10" />
                            <span class="home-circle-text">закажи</span>
                            <span class="home-circle-text">переплёт</span>
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

                    <a class="home-circle home-circle__mobile" href="/order" onclick={Fn.link}>
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
    return (
        <div class="home-metro" id="metro">
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
            <div class="wrapper" id="map">
                <h2 class="home-info_title">Наши к<span class="circle"></span>пицентры</h2>
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