import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <main class="personalData top">
            <Navigation />
        </main>
    )
}

export { front }