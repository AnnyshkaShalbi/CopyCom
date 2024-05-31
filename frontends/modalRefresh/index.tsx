import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
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
        <div
            class="modal"
            onclick={(e) => {
                if (e.target === Ref.modalOutside) {
                    setTimeout(() => {
                        Fn.clearData()
                    }, 5);
                }
            }}>
            <div class="modal_wrap" ref="modalOutside">
                <Navigation />
            </div>
        </div>
    )
}

export { front }