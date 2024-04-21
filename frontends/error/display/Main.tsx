import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import printer from '@svg/printer.svg'

export default function () {
    return (
        <div class="thanks-wrap"> 
            <h1 class="thanks-title">Страница не найдена</h1>
            <p class="thanks-text">Error 404</p>
            <a href="/" class="link" onclick={Fn.link}>Вернуться на главную</a>
        </div>
    )
}