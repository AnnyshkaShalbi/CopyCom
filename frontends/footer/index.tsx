import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.loader = () => {
    Static.currentYear = new Date().getFullYear();
    return
}

front.display = () => {
    return (
        <footer class="footer">
            <Navigation />
        </footer>
    )
}

export { front }