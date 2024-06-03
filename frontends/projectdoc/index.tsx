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
            Static.form.fileCountPages = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
            Fn.initAll()
            let fileTotalCount = document.createElement('p')
            let fileSize = document.createElement('p')
            fileTotalCount.innerHTML = `Количество страниц — ${Static.form.fileCountPages}`
            fileSize.innerHTML = `Размер файла — ${Func.formatBytes(file.size)}`
            Ref.updateFileContent.appendChild(fileTotalCount)
            Ref.updateFileContent.appendChild(fileSize)
            Func.checkPrice()
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

front.loader = () => {
    Static.tabsActive = true

    Static.form = {
        fileName: "",
        fileCountPages: 0,
        fileSize: 0
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