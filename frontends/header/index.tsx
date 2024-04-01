import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import HeaderBottom from "./display/HeaderBottom"

front.listener.finish = () => {

    return
}

// front.listener.clickAny = function (e) {
//     if (Ref.mobileMenu && !Ref.mobileMenu.contains(e.target) && !Ref.burger.contains(e.target) && front.Variable.openSidebar) {
//         front.Variable.$el.body.classList.remove('lock')
//         front.Variable.openSidebar = false;
//         Fn.init()
//     }
//     return
// }

front.loader = () => {
    front.Variable.openSidebar = false;
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