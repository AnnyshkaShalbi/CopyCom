import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = () => {
    return
}

front.func.uploadFile = async function(input:HTMLFormElement){
    let file = input.files[0];
    Static.cover.input = input
    Static.cover.fileName = file.name
    if(file){
        // Static.totalPrice = Static.cover.priceCover + Static.cover.priceLogo
        Ref.updateFileContent.innerHTML = ''
        let image = document.createElement('img')
        image.src = '/contents/icons/fileDone.svg'
        let fileNameEl = document.createElement('p')
        fileNameEl.innerHTML = `${Static.cover.fileName}`
        fileNameEl.style.color = '#0B0B0C'
        Ref.updateFileContent.appendChild(image)
        Ref.updateFileContent.appendChild(fileNameEl)

        let reader = new FileReader()
        reader.readAsBinaryString(file);
        reader.onloadend = () => {
            Static.form.countPages = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
            Fn.initAll()
            let fileTotalCount = document.createElement('p')
            let fileSize = document.createElement('p')
            fileTotalCount.innerHTML = `Количество страниц — ${Static.form.countPages}`
            fileSize.innerHTML = `Размер файла — ${Func.formatBytes(file.size)}`
            Ref.updateFileContent.appendChild(fileTotalCount)
            Ref.updateFileContent.appendChild(fileSize)
            Func.checkPrice()
        }

        // const formData = new FormData(input)
        // Func.uploadPdf(input)

    }

    
    return
}

front.func.uploadPdf = async function(input){
    // Получаем файл из input type="file" или другого источника
    const file = input.files[0];

    // Создаем FormData и добавляем файл
    const formData = new FormData();
    formData.append('file', file);

    let url;
    if(window.location.hostname != "127.0.0.1"){
        url = "https://apicopycom.cem.su" 
    } else{
        url = "http://127.0.0.1:4000" 
    }

    // Отправляем запрос на сервер
    fetch(`${url}/api/upload/FileUpload`, {
    method: 'POST',
    body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

front.func.formatBytes = function(bytes, decimals = 2){
    if (bytes === 0) {
		return '0';
	} else {
		var k = 1024;
		var dm = decimals < 0 ? 0 : decimals;
		var sizes = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ'];
		var i = Math.floor(Math.log(bytes) / Math.log(k));
        Static.formatBytes = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
		return Static.formatBytes;
	}
}

front.func.checkForm = function () {
	if (Static.form.phone.valid && Static.form.name.valid) {
		Static.form.isValid = true;
	} else {
		Static.form.isValid = false;
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

front.func.checkPrice = function(){
    Static.totalPrice = Static.cover.priceCover + Static.cover.priceLogo

    if(Static.form.countPages){
        
        if(Static.cover.printColor){
            if(Static.cover.coloredPages.length > 0){
                let currentBlackPages = (Static.form.countPages - Static.cover.coloredPages.length) * 10

                let currentColorPages = Static.cover.coloredPages.length * 30

                Static.totalPrice = Static.totalPrice + currentColorPages + currentBlackPages
                console.log('=totalPrice=', Static.totalPrice)
            } else{
                Static.totalPrice = Static.totalPrice + (Static.form.countPages * 10)
            }
        } else{
            Static.totalPrice = Static.totalPrice + (Static.form.countPages * 10)
        }
    }

    if(Static.cover.additionally[0].active){
        Static.totalPrice = Static.totalPrice + Static.cover.additionally[0].price
    }

    if(Static.cover.additionally[1].active){
        Static.totalPrice = Static.totalPrice + Static.cover.additionally[1].price
    }

    if(Static.cover.additionally[2].active){
        // Перед титулом
        if(Static.cover.additionally[2].options[0].active){
            Static.totalPrice = Static.totalPrice + (Static.cover.additionally[2].price * Static.cover.additionally[2].options[0].quantity)
        }

        // После титулом
        if(Static.cover.additionally[2].options[1].active){
            Static.totalPrice = Static.totalPrice + (Static.cover.additionally[2].price * Static.cover.additionally[2].options[1].quantity)
        }

        // В конце работы
        if(Static.cover.additionally[2].options[2].active){
            Static.totalPrice = Static.totalPrice + (Static.cover.additionally[2].price * Static.cover.additionally[2].options[2].quantity)
        }

    }



    return 
   
}

front.func.checkReadinessDate = function(){
    let date = new Date()
    Static.cover.date.currentDate =  date.getTime() // текущая полная дата в timestamp
    Static.cover.date.currentTime = date.getHours()

    let oneDay = 24 * 60 * 60 * 1000; // количество миллисекунд в одних сутках
    if(Static.cover.date.currentTime < 16){
        Static.cover.date.readinessDate = Static.cover.date.currentDate + oneDay
        Static.cover.date.readinessTime = 10
    } else{
        Static.cover.date.readinessDate = Static.cover.date.currentDate + (oneDay * 2)
        Static.cover.date.readinessTime = 10
    }
    
    Static.cover.date.currentTime = `${date.getHours()} : ${date.getMinutes()}`
    Static.cover.date.currentDate = front.Services.functions.timeStampToDate( Static.cover.date.currentDate ,".")
    Static.cover.date.readinessDate = front.Services.functions.timeStampToDate( Static.cover.date.readinessDate ,".")
    return 
}

front.loader = () => {
    Static.currentStep = 1
    Static.totalPrice
    Static.activeCover = false
    Static.activeLogo = false

    Static.cover = {
        date: {
            currentDate: false,
            currentTime: false,
            readinessDate: false,
            readinessTime: false
        }, 
        fileName: "",
        // color false - синий
        input: false,
        color: false,
        image: false,
        titleCover: false,
        priceCover: 500,
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
                price: 70
            },
            {
                text: "Вклеить карман для CD диска",
                active: false,
                price: 70,
            },
            {
                text: "Добавить пластиковый файл",
                active: false,
                price: 15,
                checked: true,
                options: [
                    {
                        text: 'Перед титулом',
                        active: false,
                        quantity: 2,
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
                    {
                        text: 'После титула',
                        active: false,
                        quantity: 2,
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
                    {
                        text: 'В конце работы',
                        active: false,
                        quantity: 2,
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
        ],
        coloredPages: []
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