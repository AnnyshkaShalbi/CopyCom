import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.loader = () => {
    Static.tabsActive = true
    return
}

front.display = () => {
    return (
        <main class="copy top">
            <Navigation />
        </main>
    )
}

export { front }