import { Cemjsx, Fn } from "cemjs-all"
import arrSteps from '@svg/icons/arr-right-home.svg'
import whatsupGreen from '@svg/icons/whatsupGreen.svg'

const RenderHomeInfo = () => {
    return (
        <div class="home-info mb-25">
            <h1 class="home-info_title">ХЕЙ, СТУДЕНТ!</h1>
            <p class="home-info_text">Тебя уже все достало и ты хочешь поскорее сдать диплом?</p>
            {/* <a href="/order" class="home-info_text home-info_link" onclick={()=>{Fn.link}}>Не парься - закажи его печать у нас!</a> */}
            <a href="/dev" class="home-info_text home-info_link" onclick={() => { Fn.link }}>Не парься - закажи его печать у нас!</a>
        </div>
    )
}

const RenderHomeBanner = () => {
    return (
        <div class="home-banner mb-25">
            {/* <a href="/order" onclick={() => { Fn.link }} class="btn btn_blue home-banner_btn">Закажи переплёт диплома</a> */}
            <a href="/dev" onclick={() => { Fn.link }} class="btn btn_blue home-banner_btn">Закажи переплёт диплома</a>
        </div>
    )
}

const RenderHomeSteps = () => {
    return (
        <div class="home-steps mb-25">
            <span class="home-steps_text">Загружаешь диплом</span>
            <img src={arrSteps} all="Загружаешь диплом"></img>
            <span class="home-steps_text">Выбираешь обложку и её цвет</span>
            <img src={arrSteps} all="Выбираешь обложку и её цвет"></img>
            <span class="home-steps_text">Просто забираешь свой диплом!</span>
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
            <RenderHomeInfo />
            <RenderHomeBanner />
            <RenderHomeSteps />
            <h2 class="home-subtitle mY-65">P.S. только у нас ты можешь сделать обложку с фирменной эмблемой твоего вуза! </h2>

            <h2 class="home-info_title mb-25">Наши к<span class="circle"></span>пицентры</h2>
            <a class="home-phone mb-25" href="https://api.whatsapp.com/send/?phone=79154310666">
                <span class="home-phone_number">+7 (915) 431-06-66</span>
                <img src={whatsupGreen} alt="Телефон для связи Whats'up " />
            </a>
            <RenderHomeMap />
        </section>
    )
}