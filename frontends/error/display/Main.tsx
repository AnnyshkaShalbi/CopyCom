import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import printer from '@svg/printer.svg'

export default function () {
    return (
        <section class="error">
            <div class="error_wrap">
                <p class="title-secondary">Страница не найдена</p>
                <div class="error_image">
                <img src={printer} alt="Копиком копировальный центр" />
                </div>
                <p class="error_notFound">Вернуться на главную страницу</p>
                <a href="/" onclick={this.Fn.link} class="btn">Главная</a>
            </div>
        </section>
    )
}