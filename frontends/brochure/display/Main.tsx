import { Cemjsx, Static, Func, front, Ref, Fn } from "cemjs-all"
import imgPdf from '@svg/icons/filePdf.svg'
import pdfDone from '@svg/icons/fileDone.svg'

const RenderMessage = () => {
    return (
        <div class="message-timer" ref="messageTimer">
            <p>Прокрутите таблицу вправо, чтобы увидеть больше цен</p>
        </div>
    )
}

const RenderTitle = () => {
    return (
        <div>
            <h1 class="title_secondary pb-15">брошюровка на пластиковую пружину</h1>
            <p class="text-wrap text-gray">Сброшюруем твой документ быстро, доступные форматы: А5, А4, А3 </p>
        </div>
    )
}

const RenderFile = () => {
    return (
        <div
            class="copy-application">
            <h3 class="copy-title pb-15">оставь заявку</h3>
            <div class="copy-file">
                <input 
                    type="file" 
                    accept=".pdf"
                    class="hidden"
                    ref="updateBrochureDoc"
                    oninput={(e)=>{
                        Func.uploadFile(e.currentTarget)
                    }}
                />
                {
                    Static.form.totalPages ? 
                    <div class="updateFile-form__label">
                        <img src={pdfDone} alt="Файл в формате pdf" />
                        <p>{`Количество страниц — ${Static.form.totalPages}`}</p>
                        <p>{`Размер файла — ${Static.formatBytes}`}</p>
                    </div> : 
                    <label for="updateFileInput" class="updateFile-form__label" ref="updateFileContent">
                        <img src={imgPdf} alt="Загрузить файл диплома в формате pdf"></img>
                        <p>Загрузите файл в формате PDF</p>
                    </label>
                }


                <button 
                    class="btn btn_blue mt-15"
                    onclick={async ()=>{
                        Ref.updateBrochureDoc.click()
                      }}
                >
                    Загрузить файл
                </button>
            </div>
            <p class="mt-25">Менеджер свяжется с тобой по номеру для подтверждения заказа</p>
            <div class="field mt-25">
                <label for="phone" class="field__label field__label_required">Номер телефона</label>
                <input
                    type="text"
                    id="phone"
                    autocomplete="off"
                    placeholder="+7 (980) 324 - 12 - 32"
                    class={[
                        "field__input",
                        Static.form.phone.error ? "field__input_error" : null,
                    ]}
                    oninput={(e) => {
                        Static.form.phone.value = e.currentTarget.value
                        front.Services.functions.formPhone(Static.form.phone)
                        Func.checkForm()
                    }}
                />
                {
                    Static.form.phone.error ? 
                    <span 
                        class={[
                        "field-message",
                        Static.form.phone.error ? "field-message_error" : null
                        ]}
                    >
                        {Static.form.phone.error}
                    </span> : null
                }
                {
                    Static.form.phone.valid ? 
                    <span 
                        class={[
                        "field-message",
                        Static.form.phone.valid ? "field-message_success" : null
                        ]}
                    >
                        Верно!
                    </span> : null
                }
            </div>
            <button 
                class={[
                    "btn btn_blue mt-25 w100", Static.form.isValid ? null : "btn_passive"
                ]}
                onclick={async()=>{
                    if(!Static.form.isValid){
                        return
                    }

                    let data = {
                        name: Static.form.fileName,
                        phone: Static.form.phone.value,
                        totalPages: Static.form.totalPages,
                        action: "brochure"
                    }

                    let answer = await front.Services.functions.sendApi("/api/UploadService", data)

                    if (answer.error) {
                        console.log('=error=', answer.error)  
                        return
                    }

                    setTimeout(()=>{
                        if(Static.form.file){
                          Func.uploadPdf(Static.form.file)
                          Fn.linkChange("/thanks", { phone: Static.form.phone.value })
                        }
                        return
                      }, 2000)
                }}
            >
                Оставить завку
            </button>
        </div>
    )
}

const RenderFileMobile = () => {
    return (
        <div
            class={[
                "copy-application",
                Static.tabsActive ? "hidden" : null,
            ]}
        >
            <h3 class="copy-title pb-15">оставь заявку</h3>
            <div class="copy-file">
                <input 
                    type="file" 
                    accept=".pdf"
                    class="hidden"
                    ref="updateBrochureDoc"
                    oninput={(e)=>{
                        Func.uploadFile(e.currentTarget)
                    }}
                />
                {
                    Static.form.totalPages ? 
                    <div class="updateFile-form__label">
                        <img src={pdfDone} alt="Файл в формате pdf" />
                        <p>{`Количество страниц — ${Static.form.totalPages}`}</p>
                        <p>{`Размер файла — ${Static.formatBytes}`}</p>
                    </div> : 
                    <label for="updateFileInput" class="updateFile-form__label" ref="updateFileContent">
                        <img src={imgPdf} alt="Загрузить файл диплома в формате pdf"></img>
                        <p>Загрузите файл в формате PDF</p>
                    </label>
                }


                <button 
                    class="btn btn_blue mt-15"
                    onclick={async ()=>{
                        Ref.updateBrochureDoc.click()
                      }}
                >
                    Загрузить файл
                </button>
            </div>
            <div class="copy-form">
                <p class="mt-25">Менеджер свяжется с тобой по номеру для подтверждения заказа</p>
                <div class="field mt-25">
                    <label for="phone" class="field__label field__label_required">Номер телефона</label>
                    <input
                        type="text"
                        id="phone"
                        autocomplete="off"
                        placeholder="+7 (980) 324 - 12 - 32"
                        class={[
                            "field__input",
                            Static.form.phone.error ? "field__input_error" : null,
                        ]}
                        oninput={(e) => {
                            Static.form.phone.value = e.currentTarget.value
                            front.Services.functions.formPhone(Static.form.phone)
                            Func.checkForm()
                        }}
                    />
                    {
                        Static.form.phone.error ? 
                        <span 
                            class={[
                            "field-message",
                            Static.form.phone.error ? "field-message_error" : null
                            ]}
                        >
                            {Static.form.phone.error}
                        </span> : null
                    }
                    {
                        Static.form.phone.valid ? 
                        <span 
                            class={[
                            "field-message",
                            Static.form.phone.valid ? "field-message_success" : null
                            ]}
                        >
                            Верно!
                        </span> : null
                    }
                </div>
                <button 
                    class={[
                        "btn btn_blue mt-25 w100", Static.form.isValid ? null : "btn_passive"
                    ]}
                    onclick={async()=>{
                        if(!Static.form.isValid){
                            return
                        }

                        let data = {
                            name: Static.form.fileName,
                            phone: Static.form.phone.value,
                            totalPages: Static.form.totalPages,
                            action: "brochure"
                        }
    
                        let answer = await front.Services.functions.sendApi("/api/UploadService", data)
    
                        if (answer.error) {
                            console.log('=error=', answer.error)  
                            return
                        }
    
                        setTimeout(()=>{
                            if(Static.form.file){
                              Func.uploadPdf(Static.form.file)
                              Fn.linkChange("/thanks", { phone: Static.form.phone.value })
                            }
                            return
                          }, 2000)
                    }}
                >
                    Оставить завку
                </button>
            </div>
        </div>
    )
}

const RenderTable = () => {
    return (
        <table class="table">
            <caption class="table-head copy-title">прайс-лист</caption>
            <thead>
                <tr class="table-body-row__brochure table-border-bottom">
                    <th class="font-weight-600 table-body-cell">Брошюровка документов</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base">До 50 стр.</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base">До 100 стр.</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base">До 150 стр.</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base">До 220 стр.</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base">До 320 стр.</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="table-body-row__brochure table-border-bottom">
                    <td class="table-body-cell text-gray font-weight-400">Цена одного переплёта</td>
                    <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">100 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">150 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">200 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">250 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">300 ₽</td>
                </tr>
                <tr class="table-body-row__brochure table-border-bottom">
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                </tr>
                <tr class="table-body-row__both table-border-bottom">
                    <td class="table-body-cell text-gray font-weight-400">Разжатие пружины</td>
                    <td class="table-body-cell text-gray font-weight-400 flex justify-content-center align-items-center text-nowrap">20 ₽</td>
                </tr>
                <tr class="table-body-row__both table-border-bottom">
                    <td class="table-body-cell text-gray font-weight-400">Вставка новых листов</td>
                    <td class="table-body-cell text-gray font-weight-400 flex justify-content-center align-items-center text-nowrap">30 ₽</td>
                </tr>
                <tr class="table-body-row__both table-border-bottom">
                    <td class="table-body-cell text-gray font-weight-400">Вставка файла / чертежа</td>
                    <td class="table-body-cell text-gray font-weight-400 flex justify-content-center align-items-center text-nowrap">10 ₽</td>
                </tr>
            </tbody>
        </table>
    )
}

const RenderTableMobile = () => {
    return (
        <div class="table-wrap">
            <table class={[ "table", Static.tabsActive ? null : "hidden" ]}>
                <caption class="table-head copy-title">прайс-лист</caption>
                <thead>
                    <tr class="table-body-row__brochure table-border-bottom">
                        <th class="font-weight-600 table-body-cell">Брошюровка документов</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base">До 50 стр.</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base">До 100 стр.</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base">До 150 стр.</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base">До 220 стр.</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base">До 320 стр.</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="table-body-row__brochure table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400">Цена одного переплёта</td>
                        <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">100 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">150 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">200 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">250 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center text-nowrap">300 ₽</td>
                    </tr>
                    <tr class="table-body-row__brochure table-border-bottom">
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                    </tr>
                    <tr class="table-body-row__both table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400">Разжатие пружины</td>
                        <td class="table-body-cell text-gray font-weight-400 text-nowrap">20 ₽</td>
                    </tr>
                    <tr class="table-body-row__both table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400">Вставка новых листов</td>
                        <td class="table-body-cell text-gray font-weight-400 text-nowrap">30 ₽</td>
                    </tr>
                    <tr class="table-body-row__both table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400">Вставка файла / чертежа</td>
                        <td class="table-body-cell text-gray font-weight-400 text-nowrap">10 ₽</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const RenderTabs = () => {
    return (
        <div class="tabs">
            <div
                onclick={() => {
                    Static.tabsActive = !Static.tabsActive
                }}
                class={["tabs-item", Static.tabsActive ? "tabs-item_active" : null]}
            >
                <h3 class="copy-title">прайс-лист</h3>
            </div>
            <div
                onclick={() => {
                    Static.tabsActive = !Static.tabsActive
                }}
                class={["tabs-item", Static.tabsActive ? null : "tabs-item_active"]}
            >
                <h3 class="copy-title">оставь заявку</h3>
            </div>
        </div>
    )
}

export default function () {
    return (
        <div class="pb-25">
            <RenderMessage />
            <RenderTitle />
            <div class="copy-content mt-25">
                {window.matchMedia("(max-width: 992px)") ? <RenderTabs /> : null}
                <div class="copy-content-pc__brochure">
                    <RenderTable />
                    <RenderFile />
                </div>
                <div class="copy-content-mobile">
                    <RenderTableMobile />
                    <RenderFileMobile />
                </div>
            </div>
        </div>
    )
}