import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

// upload file 

front.func.dragEnter = function (e: any) {
    e.preventDefault()
    e.stopPropagation()
    Ref.imagesUpload.classList.add("updateFile-form_active")
}

front.func.dragLeave = function (e: any) {
    e.preventDefault()
    e.stopPropagation()
    Ref.imagesUpload.classList.remove("updateFile-form_active")
}

front.func.dragOver = function (e: any) {
    e.preventDefault()
    e.stopPropagation()
    Ref.imagesUpload.classList.add("updateFile-form_active")
}

front.func.myDrop = function (e: any) {
    e.preventDefault()
    e.stopPropagation()
    Ref.imagesUpload.classList.remove("updateFile-form_active")
    let draggetData = e.dataTransfer
    let files = draggetData.files
    Ref.letterImages.innerHTML = ""
    Array.from(files).map(async (file: any) => {
        let answ = await Func.uploadFile(file)
        if (answ.error) {
            alert(answ.error)
            return
        }
        console.log('=66b921=', answ)
        let typeDocument = "photo"

        if (answ.mimetype.startsWith("video")) {
            typeDocument = "video"

        } else if (answ.mimetype.startsWith("audio")) {
            typeDocument = "audio"
        }
        Static.form[typeDocument].value = answ.name;
        Fn.init()
    })
}

// upload file

front.func.checkForm = function () {
    Static.form.phone.valid ? Static.form.isValid = true : Static.form.isValid = false
    return;
};

front.loader = () => {
    Static.currentStep = 1

    Static.stepFirstValue = "Выбери понравившийся вариант и цвет обложки"
    Static.stepSecondValue = ""
    Static.stepThreeValue = ""

    Static.activeCover = false
    Static.activeLogo = false

    Static.cover = {
        color: false,
        image: false,
        titleCover: false,
        priceCover: false,
        priceLogo: false,
        titleLogo: false,
    }

    Static.steps = [
        {
            title: "выбери обложку",
            desc: Static.stepFirstValue,
            active: true,
            valid: false,
        },
        {
            title: "загрузи файл",
            desc: Static.stepSecondValue,
            active: false,
            valid: false,
        },
        {
            title: "оформи заказ",
            desc: Static.stepThreeValue,
            active: false,
            valid: false,
        }
    ]

    Static.form = {
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Номер телефона",
            view: false,
            disable: false
        },
        name: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Имя",
            view: false,
            disable: false
        },
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Электронная почта",
            view: false,
            disable: false
        },
        comment: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Комментарий",
            view: false,
            disable: false
        },
        isValid: false,
    }

    return
}

front.display = () => {
    return (
        <main class="order top">
            <div class="wrapper">
                <Navigation />
            </div>
        </main>
    )
}

export { front }