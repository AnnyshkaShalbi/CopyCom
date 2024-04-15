import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import printer from '@svg/printer.svg'

export default function () {
    return (
        <div class="error_wrap">
            <h1 class="title">Страница не найдена</h1>
            <div class="error_image">
                <img src={printer} alt="Копиком копировальный центр" />
            </div>
            <p class="error_notFound">Вернуться на главную страницу</p>
            <a href="/" onclick={this.Fn.link} class="btn">Главная</a>
        </div>
    )
}