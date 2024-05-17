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

front.func.uploadFile = function(input){
    let file = input.files[0];
    let fileName = file.name;
    if(file){
        Ref.updateFileContent.innerHTML = ''
        let image = document.createElement('img')
        image.src = '/contents/icons/fileDone.svg'
        let fileNameEl = document.createElement('p')
        fileNameEl.innerHTML = `${fileName}`
        fileNameEl.style.color = '#0B0B0C'
        Ref.updateFileContent.appendChild(image)
        Ref.updateFileContent.appendChild(fileNameEl)

        let reader = new FileReader()
        reader.readAsBinaryString(file);
        reader.onloadend = () => {
            Static.form.countPages = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
            let fileTotalCount = document.createElement('p')
            let fileSize = document.createElement('p')
            fileTotalCount.innerHTML = `Количество страниц — ${Static.form.countPages}`
            fileSize.innerHTML = `Размер файла — ${Func.formatBytes(file.size)}`
            Ref.updateFileContent.appendChild(fileTotalCount)
            Ref.updateFileContent.appendChild(fileSize)
        }
    }

    
    return
}

front.func.formatBytes = function(bytes, decimals = 2){
    if (bytes === 0) {
		return '0';
	} else {
		var k = 1024;
		var dm = decimals < 0 ? 0 : decimals;
		var sizes = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ'];
		var i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	}
}


// upload file

front.func.checkForm = function () {

    if(Static.currentStep == 2){
        Static.steps[0].active = false
        Static.steps[0].valid = true
        Static.steps[Static.currentStep - 1].active = true
        Static.steps[Static.currentStep - 1].desc = "Загрузите файл с работой в формате PDF"
        setTimeout(() => { window.scrollTo(0, 0); }, 100);
    }

    if(Static.currentStep == 3){
        Static.steps[1].active = false
        Static.steps[1].valid = true
        Static.steps[Static.currentStep - 1].active = true
        Static.steps[Static.currentStep - 1].desc = "В несколько кликов"
        setTimeout(() => { window.scrollTo(0, 0); }, 100);
    }

    return;
};


front.func.checkImageFinish = function() {
    // 1. Цвет false - синий, true - красный
    if(Static.cover.color){
        // red
        // проверка на тип работы и логотип МАДИ
        if(Static.cover.diplomWork && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/red/madi/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/red/madi/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/red/madi/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/red/madi/masterThesis.png"
            return
        }

        // проверка на тип работы и логотип МАИ
        if(Static.cover.diplomWork && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/red/mai/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/red/mai/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/red/mai/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/red/mai/masterThesis.png"
            return
        }

         // проверка на тип работы и логотип Финашка
         if(Static.cover.diplomWork && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/red/fin/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/red/fin/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/red/fin/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/red/fin/masterThesis.png"
            return
        }

        // проверка на тип работы и логотип Бауманка
        if(Static.cover.diplomWork && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/red/mgtu/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/red/mgtu/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/red/mgtu/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/red/mgtu/masterThesis.png"
            return
        }

        // проверка на тип работы и логотип МЭИ
        if(Static.cover.diplomWork && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/red/mei/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/red/mei/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/red/mei/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/red/mei/masterThesis.png"
            return
        }

        // проверка на тип работы и без эмблемы
        if(Static.cover.diplomWork && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/masterThesis.png"
            return
        }

        // проверка на тип работы и без эмблемы
        if(Static.cover.diplomWork && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/masterThesis.png"
            return
        }

        Static.cover.imageFinish = "/contents/covers/red/withoutEmblems/empty.png"
        return
    } else{
        // blue
        // проверка на тип работы и логотип МАДИ
        if(Static.cover.diplomWork && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/blue/madi/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/blue/madi/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/blue/madi/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "МАДИ"){
            Static.cover.imageFinish = "/contents/covers/blue/madi/masterThesis.png"
            return
        }

        // проверка на тип работы и логотип МАИ
        if(Static.cover.diplomWork && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mai/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mai/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mai/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "МАИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mai/masterThesis.png"
            return
        }

            // проверка на тип работы и логотип Финашка
            if(Static.cover.diplomWork && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/blue/fin/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/blue/fin/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/blue/fin/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "Финашка"){
            Static.cover.imageFinish = "/contents/covers/blue/fin/masterThesis.png"
            return
        }

        // проверка на тип работы и логотип Бауманка
        if(Static.cover.diplomWork && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/blue/mgtu/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/blue/mgtu/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/blue/mgtu/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "Бауманка"){
            Static.cover.imageFinish = "/contents/covers/blue/mgtu/masterThesis.png"
            return
        }

        // проверка на тип работы и логотип МЭИ
        if(Static.cover.diplomWork && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mei/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mei/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mei/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "МЭИ"){
            Static.cover.imageFinish = "/contents/covers/blue/mei/masterThesis.png"
            return
        }

        // проверка на тип работы и без эмблемы
        if(Static.cover.diplomWork && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && !Static.cover.titleLogo){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/masterThesis.png"
            return
        }

        // проверка на тип работы и без эмблемы
        if(Static.cover.diplomWork && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/diplomWork.png"
            return
        }

        if(Static.cover.diplomProject && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/diplomProject.png"
            return
        }

        if(Static.cover.finalWork && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/finalWork.png"
            return
        }

        if(Static.cover.masterThesis && Static.cover.titleLogo == "Без эмблемы"){
            Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/masterThesis.png"
            return
        }

        Static.cover.imageFinish = "/contents/covers/blue/withoutEmblems/empty.png"
        return
    }

    return
}



front.loader = () => {
    Static.currentStep = 1
    // Static.localStep = window.localStorage.getItem('currentStep')

    Static.activeCover = false
    Static.activeLogo = false

    Static.cover = {
        // color false - синий
        color: false,
        image: false,
        titleCover: false,
        priceCover: 480,
        priceLogo: 0,
        titleLogo: false,
        diplomWork: false,
        diplomProject: false,
        finalWork: false,
        masterThesis: false,
        imageFinish: false,
        // цвет печати false - ч/б
        printColor: false,
        // дополнительно
        additionally: [
            {
                text: "Вклеить карман для рецензии",
                active: false,
                price: 50
            },
            {
                text: "Вклеить карман для CD диска",
                active: false,
                price: 50
            },
            {
                text: "Добавить пластиковый файл",
                active: false,
                price: 50,
                checked: true,
                options: [
                    {
                        text: 'Перед титулом',
                        active: false,
                    },
                    {
                        text: 'После титулом',
                        active: false,
                    },
                    {
                        text: 'В конце работы',
                        active: true,
                    },
                ],
                countFiles: [
                    {
                        id: 1,
                        active: false
                    },
                    {
                        id: 2,
                        active: true
                    },
                    {
                        id: 3,
                        active: false
                    },
                    {
                        id: 4,
                        active: false
                    },
                    {
                        id: 5,
                        active: false
                    },
                    {
                        id: 6,
                        active: false
                    },
                    {
                        id: 7,
                        active: false
                    },
                    {
                        id: 8,
                        active: false
                    },
                    {
                        id: 9,
                        active: false
                    },
                    {
                        id: 10,
                        active: false
                    },
                ]
            },
        ]
    }

    Static.steps = [
        {
            title: "выбери обложку",
            desc: "Выбери понравившийся вариант и цвет обложки",
            active: true,
            valid: false,
        },
        {
            title: "загрузи файл",
            desc: "",
            active: false,
            valid: false,
        },
        {
            title: "оформи заказ",
            desc: "",
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
        countPages: false,
        colorPages: false,
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