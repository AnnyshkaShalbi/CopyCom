import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import HeaderBottom from "./display/HeaderBottom"      

front.listener.finish = () => {
    Static.mediaMd = window.matchMedia('(max-width: 1130px)')
    Static.mediaSm = window.matchMedia('(max-width: 600px)')

    if (Static.mediaMd) {
        Ref.headerContact.style.display = 'none'
        Ref.headerBtn.textContent = `Заказать`
        Static.arrow = document.createElement("i")
        Static.arrow.classList.add('i')
        Static.arrow.classList.add('i-arrow-right')
        Ref.headerBtn.append(Static.arrow)
    }
    if (Static.mediaSm) {
        Ref.headerPhone.style.display = 'none'
        Ref.headerLocation.style.display = 'none'
        Ref.headerBtn.style.display = 'none'
    }
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
   

    return
}

front.display = () => {
    return (
        <header class="header">
            <div class="header-inner">
                <Navigation />
            </div>
            <HeaderBottom />
        </header>
    )
}

export { front }