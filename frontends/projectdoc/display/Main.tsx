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
            <h1 class="title_secondary pb-15">Печать проектной документации</h1>
            <p class="text-wrap text-gray">Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете</p>
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
                    ref="updateProjectDoc"
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
                        Ref.updateProjectDoc.click()
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
                        action: "projectdoc"
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
                    ref="updateProjectDoc"
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
                        Ref.updateProjectDoc.click()
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
                            action: "projectdoc"
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
                <tr class="table-body-row__projectdoc">
                    <th class="font-weight-600 table-body-cell">Черно-белая печать</th>
                    <th class="table-body-cell text-gray font-weight-400">A4</th>
                    <th class="table-body-cell text-gray font-weight-400">A3</th>
                    <th class="table-body-cell text-gray font-weight-400">A2</th>
                    <th class="table-body-cell text-gray font-weight-400">A1</th>
                    <th class="table-body-cell text-gray font-weight-400">A0</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="table-body-row__projectdoc">
                    <td class="table-body-cell text-gray font-weight-400">на обычной бумаге (80 г.)</td>
                    <td class="table-body-cell">8 ₽</td>
                    <td class="table-body-cell">22 ₽</td>
                    <td class="table-body-cell">45 ₽</td>
                    <td class="table-body-cell">60 ₽</td>
                    <td class="table-body-cell">100 ₽</td>
                </tr>
                <tr class="table-body-row__projectdoc">
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                </tr>
                <tr class="table-body-row__projectdoc">
                    <td class="table-body-cell font-weight-600">Цветная печать</td>
                    <td class="table-body-cell text-gray font-weight-400">А4</td>
                    <td class="table-body-cell text-gray font-weight-400">А3</td>
                    <td class="table-body-cell text-gray font-weight-400">А2</td>
                    <td class="table-body-cell text-gray font-weight-400">А1</td>
                    <td class="table-body-cell text-gray font-weight-400">А0</td>
                </tr>
                <tr class="table-body-row__projectdoc">
                    <td class="table-body-cell__unick text-gray font-weight-400">
                        <div class="w100 flex justify-content-between">
                            <span class="table-body-cell__unick-center font-size-sm">на обычной бумаге (80 г.)</span>
                            <div class="h100 flex align-items-center">
                                <div
                                    class="tooltip mX-10"
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
                        </div>
                        <div class="table-body-cell__add3">
                            <span class="table-body-cell__add3-item">{`( < 25 %)`}</span>
                            <span class="table-body-cell__add3-item">{`( < 50 %)`}</span>
                            <span class="table-body-cell__add3-item">{`( > 50 %)`}</span>
                        </div>
                    </td>
                    <td class="table-body-cell__col-2">
                        <span >30 ₽</span>
                        <span >36 ₽</span>
                    </td>
                    <td class="table-body-cell__col-2">
                        <span>55 ₽</span>
                        <span>60 ₽</span>
                    </td>
                    <td class="table-body-cell__col-2">
                        <span>95 ₽</span>
                        <span>140 ₽</span>
                        <span>210 ₽</span>
                    </td>
                    <td class="table-body-cell__col-2">
                        <span>150 ₽</span>
                        <span>200 ₽</span>
                        <span>330 ₽</span>
                    </td>
                    <td class="table-body-cell__col-2 border-right-none">
                        <span>190 ₽</span>
                        <span>280 ₽</span>
                        <span>500 ₽</span>
                    </td>
                </tr>
                <tr class="table-body-row__projectdoc">
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                </tr>
                <tr class="table-body-row__projectdoc-both">
                    <td class="table-body-cell">Фальцовка (за 1 лист)</td>
                    <td class="table-body-cell">10 ₽</td>
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
                    <tr class="table-body-row__projectdoc">
                        <th class="font-weight-600 table-body-cell">Черно-белая печать</th>
                        <th class="table-body-cell text-gray font-weight-400">A4</th>
                        <th class="table-body-cell text-gray font-weight-400">A3</th>
                        <th class="table-body-cell text-gray font-weight-400">A2</th>
                        <th class="table-body-cell text-gray font-weight-400">A1</th>
                        <th class="table-body-cell text-gray font-weight-400">A0</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="table-body-row__projectdoc">
                        <td class="table-body-cell text-gray font-weight-400">на обычной бумаге (80 г.)</td>
                        <td class="table-body-cell">8 ₽</td>
                        <td class="table-body-cell">22 ₽</td>
                        <td class="table-body-cell">45 ₽</td>
                        <td class="table-body-cell">60 ₽</td>
                        <td class="table-body-cell">100 ₽</td>
                    </tr>
                    <tr class="table-body-row__projectdoc">
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                    </tr>
                    <tr class="table-body-row__projectdoc">
                        <td class="table-body-cell font-weight-600">Цветная печать</td>
                        <td class="table-body-cell text-gray font-weight-400">А4</td>
                        <td class="table-body-cell text-gray font-weight-400">А3</td>
                        <td class="table-body-cell text-gray font-weight-400">А2</td>
                        <td class="table-body-cell text-gray font-weight-400">А1</td>
                        <td class="table-body-cell text-gray font-weight-400">А0</td>
                    </tr>
                    <tr class="table-body-row__projectdoc">
                        <td class="table-body-cell__unick text-gray font-weight-400 ">
                            <div class="w100 flex justify-content-between">
                                <span class="table-body-cell__unick-center font-size-sm">на обычной бумаге (80 г.)</span>
                                <div class="h100 flex align-items-center">
                                    <div
                                        ref="tooltip"
                                        class="tooltip tooltip-mobile mX-10"
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
                            </div>
                            <div class="table-body-cell__add3">
                                <span class="table-body-cell__add3-item">{`( < 25 %)`}</span>
                                <span class="table-body-cell__add3-item">{`( < 50 %)`}</span>
                                <span class="table-body-cell__add3-item">{`( > 50 %)`}</span>
                            </div>
                        </td>
                        <td class="table-body-cell__col-2">
                            <span >30 ₽</span>
                            <span >36 ₽</span>
                        </td>
                        <td class="table-body-cell__col-2">
                            <span>55 ₽</span>
                            <span>60 ₽</span>
                        </td>
                        <td class="table-body-cell__col-2">
                            <span>95 ₽</span>
                            <span>140 ₽</span>
                            <span>210 ₽</span>
                        </td>
                        <td class="table-body-cell__col-2">
                            <span>150 ₽</span>
                            <span>200 ₽</span>
                            <span>330 ₽</span>
                        </td>
                        <td class="table-body-cell__col-2 border-right-none">
                            <span>190 ₽</span>
                            <span>280 ₽</span>
                            <span>500 ₽</span>
                        </td>
                    </tr>
                    <tr class="table-body-row__projectdoc">
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                    </tr>
                    <tr class="table-body-row__projectdoc-both">
                        <td class="table-body-cell">Фальцовка (за 1 лист)</td>
                        <td class="table-body-cell justify-content-start">10 ₽</td>
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