import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import HeaderBottom from "./display/HeaderBottom"

front.listener.finish = () => {
    return
}

front.listener.clickAny = function (e) {
    if (Ref.dropdown && !Ref.dropdownList.contains(e.target) && !Ref.dropdownHead.contains(e.target)) {
        Ref.dropdownList.classList.remove('dropdown-body__active')
        Ref.dropdownArrow.classList.remove('dropdown-head-arrow__active')
    }
    return
}


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