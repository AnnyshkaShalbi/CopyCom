import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
// сообщение появляется / исчезает
    if(window.matchMedia("(max-width: 992px)")){
        if(!Static.message){
            setTimeout(()=>{
                Ref.messageTimer.classList.add("message-timer__active");
            }, 3000)
            setTimeout(()=>{
                Ref.messageTimer.classList.remove("message-timer__active");
            }, 6000)
            Static.message = true
            return
        }else{
            return
        }
        
    }
    return
}

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