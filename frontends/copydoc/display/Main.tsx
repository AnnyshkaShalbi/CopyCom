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
            <h1 class="title_secondary pb-15">печать документов</h1>
            <p class="text-wrap text-gray">Любые документы могут быть распечатаны в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете.</p>
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
                    ref="updateCopyDoc"
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
                        Ref.updateCopyDoc.click()
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
                        action: "copydoc"
                    }

                    let answer = await front.Services.functions.sendApi("/api/UploadService", data)

                    if (answer.error) {
                        console.log('=error=', answer.error)  
                        return
                    }

                    setTimeout(()=>{
                        if(Static.form.file){
                          Func.uploadPdf(Static.form.file)
                          Fn.linkChange("/thanks")
                        }
                        return
                      }, 2000)
                }}
            >Оставить завку</button>
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
                ref="updateCopyDoc"
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
                    Ref.updateCopyDoc.click()
                    }}
            >
                Загрузить файл
            </button>

                {/* <img src={filePdf} alt="Загрузите файл в pdf формате" />
                <p class="text-align-center">Загрузите файл в формате PDF</p>
                <p class="text-align-center">Макс. размером 100 мб</p>
                <button class="btn btn_blue mt-15">Загрузить файл</button> */}
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
                            action: "copydoc"
                        }
    
                        let answer = await front.Services.functions.sendApi("/api/UploadService", data)
    
                        if (answer.error) {
                            console.log('=error=', answer.error)  
                            return
                        }
    
                        setTimeout(()=>{
                            if(Static.form.file){
                              Func.uploadPdf(Static.form.file)
                              Fn.linkChange("/thanks")
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
                <tr class="table-body-row">
                    <th class="font-weight-600 table-body-cell">Черно-белое копирование</th>
                    <th class="table-body-cell text-gray font-weight-400">A4</th>
                    <th class="table-body-cell text-gray font-weight-400">A3</th>
                    <th class="table-body-cell text-gray font-weight-400">A2</th>
                    <th class="table-body-cell text-gray font-weight-400">A1</th>
                    <th class="table-body-cell text-gray font-weight-400">A0</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400">1-100 страниц</td>
                    <td class="table-body-cell text-nowrap">10 ₽</td>
                    <td class="table-body-cell text-nowrap">22 ₽</td>
                    <td class="table-body-cell text-nowrap">60 ₽</td>
                    <td class="table-body-cell text-nowrap">80 ₽</td>
                    <td class="table-body-cell text-nowrap">130 ₽</td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400">101-300 страниц</td>
                    <td class="table-body-cell text-nowrap">8 ₽</td>
                    <td class="table-body-cell text-nowrap">18 ₽</td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell font-weight-600">Цветное копирование</td>
                    <td class="table-body-cell text-gray font-weight-400">A4</td>
                    <td class="table-body-cell text-gray font-weight-400">A3</td>
                    <td class="table-body-cell text-gray font-weight-400">A2</td>
                    <td class="table-body-cell text-gray font-weight-400">A1</td>
                    <td class="table-body-cell text-gray font-weight-400">A0</td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap">
                        1-100 страниц
                        <div class="flex align-items-center">
                            {`( < 50 %)`}
                            <div
                                class="tooltip ml-10"
                                onmouseover={() => {
                                    Ref.tooltipContentPc.classList.add("tooltip-content__active");
                                }}
                                onmouseleave={() => {
                                    Ref.tooltipContentPc.classList.remove("tooltip-content__active");
                                }}
                            >
                                <div class="tooltip-content" ref="tooltipContentPc">
                                    <p class="tooltip-content_text">
                                        Процент заполнения цвета в документе
                                    </p>
                                </div>
                            </div>
                        </div>

                    </td>
                    <td class="table-body-cell text-nowrap">30 ₽</td>
                    <td class="table-body-cell text-nowrap">55 ₽</td>
                    <td class="table-body-cell text-nowrap">85 ₽</td>
                    <td class="table-body-cell text-nowrap">110 ₽</td>
                    <td class="table-body-cell text-nowrap">130 ₽</td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent flex justify-content-end">
                        {`( > 50 %)`}
                    </td>
                    <td class="table-body-cell text-nowrap">36 ₽</td>
                    <td class="table-body-cell text-nowrap">60 ₽</td>
                    <td class="table-body-cell text-nowrap">150 ₽</td>
                    <td class="table-body-cell text-nowrap">190 ₽</td>
                    <td class="table-body-cell text-nowrap">280 ₽</td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap table-body-cell__percent">
                        1-300 страниц
                        <span class="flex align-items-center">
                            {`( < 50 %)`}
                        </span>
                    </td>
                    <td class="table-body-cell text-nowrap">25 ₽</td>
                    <td class="table-body-cell text-nowrap">50 ₽</td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent flex justify-content-end">
                        {`( > 50 %)`}
                    </td>
                    <td class="table-body-cell text-nowrap">30 ₽</td>
                    <td class="table-body-cell text-nowrap">55 ₽</td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                </tr>
            </tbody>
        </table>
    )
}

const RenderTableMobile = () => {
    return (
        <div class="table-wrap">
            <table
                class={[
                    "table",
                    Static.tabsActive ? null : "hidden"
                ]}
            >
                <caption class="table-head copy-title">прайс-лист</caption>
                <thead>
                    <tr class="table-body-row">
                        <th class="table-body-cell flex flex-col">
                            <p class="font-weight-600">Черно-белое</p>
                            <p class="font-weight-600">копирование</p>
                        </th>
                        <th class="table-body-cell text-gray font-weight-400">A4</th>
                        <th class="table-body-cell text-gray font-weight-400">A3</th>
                        <th class="table-body-cell text-gray font-weight-400">A2</th>
                        <th class="table-body-cell text-gray font-weight-400">A1</th>
                        <th class="table-body-cell text-gray font-weight-400">A0</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400">1-100 страниц</td>
                        <td class="table-body-cell text-nowrap">10 ₽</td>
                        <td class="table-body-cell text-nowrap">22 ₽</td>
                        <td class="table-body-cell text-nowrap">60 ₽</td>
                        <td class="table-body-cell text-nowrap">80 ₽</td>
                        <td class="table-body-cell text-nowrap">130 ₽</td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 text-nowrap">101-300 страниц</td>
                        <td class="table-body-cell text-nowrap">8 ₽</td>
                        <td class="table-body-cell text-nowrap">18 ₽</td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell flex flex-col">
                            <p class="font-weight-600">Цветное</p>
                            <p class="font-weight-600">копирование</p>
                        </td>
                        <td class="table-body-cell text-gray font-weight-400">A4</td>
                        <td class="table-body-cell text-gray font-weight-400">A3</td>
                        <td class="table-body-cell text-gray font-weight-400">A2</td>
                        <td class="table-body-cell text-gray font-weight-400">A1</td>
                        <td class="table-body-cell text-gray font-weight-400">A0</td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap">
                            1-100 страниц
                            <div class="flex align-items-center">
                                {`( < 50 %)`}
                                <div
                                    ref="tooltip"
                                    class="tooltip tooltip-mobile ml-10"
                                >
                                    <div
                                        class="tooltip-head"
                                        ref="tooltipHead"
                                        onmouseover={() => {
                                            Ref.tooltipContent.classList.add("tooltip-content__active");
                                            Ref.tooltipHead.classList.add("tooltip-head__active");
                                            setTimeout(() => {
                                                Ref.tooltipContent.classList.remove("tooltip-content__active");
                                                Ref.tooltipHead.classList.remove("tooltip-head__active");
                                            }, 3000)
                                        }}
                                        ontouchstart={() => {
                                            Ref.tooltipContent.classList.add("tooltip-content__active");
                                            Ref.tooltipHead.classList.add("tooltip-head__active");
                                            setTimeout(() => {
                                                Ref.tooltipContent.classList.remove("tooltip-content__active");
                                                Ref.tooltipHead.classList.remove("tooltip-head__active");
                                            }, 3000)
                                        }}
                                    >
                                        ?
                                    </div>

                                    <div class="tooltip-content" ref="tooltipContent">
                                        <p class="tooltip-content_text">
                                            Процент заполнения цвета в документе
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </td>
                        <td class="table-body-cell text-nowrap">30 ₽</td>
                        <td class="table-body-cell text-nowrap">55 ₽</td>
                        <td class="table-body-cell text-nowrap">85 ₽</td>
                        <td class="table-body-cell text-nowrap">110 ₽</td>
                        <td class="table-body-cell text-nowrap">130 ₽</td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent">
                            {`( > 50 %)`}
                        </td>
                        <td class="table-body-cell text-nowrap">36 ₽</td>
                        <td class="table-body-cell text-nowrap">60 ₽</td>
                        <td class="table-body-cell text-nowrap">150 ₽</td>
                        <td class="table-body-cell text-nowrap">190 ₽</td>
                        <td class="table-body-cell text-nowrap">280 ₽</td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap table-body-cell__percent">
                            <span class="text-nowrap">1-300 страниц</span>
                            <span class="flex align-items-center">
                                {`( < 50 %)`}
                            </span>
                        </td>
                        <td class="table-body-cell text-nowrap">25 ₽</td>
                        <td class="table-body-cell text-nowrap">50 ₽</td>
                        <td class="table-body-cell border-right-none text-nowrap"></td>
                        <td class="table-body-cell border-right-none text-nowrap"></td>
                        <td class="table-body-cell border-right-none text-nowrap"></td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent">
                            {`( > 50 %)`}
                        </td>
                        <td class="table-body-cell text-nowrap">30 ₽</td>
                        <td class="table-body-cell text-nowrap">55 ₽</td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
                    </tr>
                </tbody>
            </table>
        </div >
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
                <div class="copy-content-pc">
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