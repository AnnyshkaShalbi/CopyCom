import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    if(document.documentElement.clientWidth < 600){
        Ref.hey.innerHTML = "Хей, студент!"
        Ref.dontWorry.style.display = "none"
    } else{
        Ref.hey.innerHTML = "Хей, студент! Тебя уже всё достало и ты хочешь поскорее сдать диплом ?"
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
        <main class="main">

            <Navigation />
        </main>
    )
}

export { front }