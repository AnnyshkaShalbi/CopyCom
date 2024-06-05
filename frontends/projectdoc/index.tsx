import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    //1. с помощью matchMedia проверяем что это мобильное устройство
    //2. если всё ок, то вызываем таймайт, на 3сек появление блока
    //3. смотри пример с академии
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

front.func.uploadFile = async function(input:HTMLFormElement){
    let file = input.files[0];
    Static.form.fileName = file.name
    Static.form.file = input
    if(file){
        // Static.totalPrice = Static.cover.priceCover + Static.cover.priceLogo
        Ref.updateFileContent.innerHTML = ''
        let image = document.createElement('img')
        image.src = '/contents/icons/fileDone.svg'
        let fileNameEl = document.createElement('p')
        fileNameEl.innerHTML = `${file.fileName}`
        fileNameEl.style.color = '#0B0B0C'
        Ref.updateFileContent.appendChild(image)
        Ref.updateFileContent.appendChild(fileNameEl)

        let reader = new FileReader()
        reader.readAsBinaryString(file);
        reader.onloadend = () => {
            Static.form.totalPages = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
            Fn.initAll()
            let fileTotalCount = document.createElement('p')
            let fileSize = document.createElement('p')
            fileTotalCount.innerHTML = `Количество страниц — ${Static.form.totalPages}`
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
        Static.formatBytes = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
		return Static.formatBytes;
	}
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

front.func.checkForm = function () {
	if (Static.form.phone.valid && Static.form.name.valid) {
		Static.form.isValid = true;
	} else {
		Static.form.isValid = false;
	}
	return;
};

front.loader = () => {
    Static.tabsActive = true

    Static.form = {
        fileName: "",
        fileCountPages: 0,
        fileSize: 0,
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Номер телефона",
            view: false,
            disable: false
        },
        file: false,
        isValid: false
    }
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