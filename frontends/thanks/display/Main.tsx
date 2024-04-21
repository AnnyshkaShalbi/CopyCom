import { Cemjsx, Fn } from "cemjs-all"

export default function () {
    return (
        <div class="thanks-wrap"> 
            <h1 class="thanks-title">спасибо за заказ!</h1>
            <p class="thanks-text">В течение 5 минут менеджер свяжется с тобой по номеру для подтверждения заказа</p>
            <span class="thanks-phone">+7 (989) 123-56-09</span>
            <a href="/" class="link" onclick={Fn.link}>Вернуться на главную</a>
        </div>
    )
}