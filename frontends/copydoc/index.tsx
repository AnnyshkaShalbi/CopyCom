import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    //1. с помощью matchMedia проверяем что это мобильное устройство
    //2. если всё ок, то вызываем таймайт, на 3сек появление блока
    //3. смотри пример с академии
    return
}

// front.listener.clickAny = function (e) {
//     if (Ref.tooltip && !Ref.tooltipContent.contains(e.target) && !Ref.tooltip.contains(e.target)) {
//         Ref.tooltipContent.classList.remove('tooltip-content__active');
//         console.log('=b406c4=', "other place")
//     }
//     return
// }

front.loader = () => {
    Static.tabsActive = true
    return
}

front.display = () => {
    return (
        <main class="copy top overflow-hidden">
            <Navigation />
        </main>
    )
}

export { front }