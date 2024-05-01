import { Cemjsx, Static, Func, front, Ref } from "cemjs-all"
import filePdf from '@svg/icons/filePdf.svg'

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
            <h1 class="title_secondary pb-15">печать презентаций</h1>
            <p class="text-wrap text-gray">Если тебе нужна презентация, распечатанная в хорошем качестве, то ты по адресу. </p>
        </div>
    )
}

const RenderFile = () => {
    return (
        <div
            class="copy-application">
            <h3 class="copy-title pb-15">оставь заявку</h3>
            <div class="copy-file">
                <img src={filePdf} alt="Загрузите файл в pdf формате" />
                <p class="text-align-center">Загрузите файл в формате PDF</p>
                <p class="text-align-center">Макс. размером 100 мб</p>
                <button class="btn btn_blue mt-15">Загрузить файл</button>
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
                    ]}
                    oninput={(e) => {
                    }}
                />
            </div>
            <button class="btn btn_blue mt-25 w100">Оставить завку</button>
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
                <img src={filePdf} alt="Загрузите файл в pdf формате" />
                <p class="text-align-center">Загрузите файл в формате PDF</p>
                <p class="text-align-center">Макс. размером 100 мб</p>
                <button class="btn btn_blue mt-15">Загрузить файл</button>
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
                        ]}
                        oninput={(e) => {
                        }}
                    />
                </div>
                <button class="btn btn_blue mt-25 w100">Оставить завку</button>
            </div>
        </div>
    )
}

const RenderTable = () => {
    return (
        <table class="table">
            <caption class="table-head copy-title">прайс-лист</caption>
            <thead>
                <tr class="table-body-row__presa table-border-bottom">
                    <th class="font-weight-600 table-body-cell">Печать презентаций</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">А4</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">А3</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="table-body-row__presa table-border-bottom">
                    <td class="table-body-cell text-gray font-weight-400">1-100 страниц</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">10 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">22 ₽</td>
                </tr>
                <tr class="table-body-row__presa table-border-bottom">
                    <td class="table-body-cell text-gray font-weight-400">101-300 страниц</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">22 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">18 ₽</td>
                </tr>
                <tr class="table-body-row__presa table-border-bottom">
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                </tr>
                <tr class="table-body-row__presa table-border-bottom">
                    <td class="table-body-cell font-weight-600">Цветная печать презентаций</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">А4</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">А3</td>
                </tr>
                <tr class="table-body-row__presa">
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
                            {/* <div
                                ref="tooltip"
                                class="tooltip tooltip-mobile ml-10"
                            >
                                <div
                                    class="tooltip-head"
                                    ref="tooltipHead"
                                    onmouseover={() => {
                                        Ref.tooltipContentPc.classList.add("tooltip-content__active");
                                        setTimeout(() => {
                                            Ref.tooltipContentPc.classList.remove("tooltip-content__active");
                                        }, 3000)
                                    }}
                                    ontouchstart={() => {
                                        Ref.tooltipContentPc.classList.add("tooltip-content__active");
                                        setTimeout(() => {
                                            Ref.tooltipContentPc.classList.remove("tooltip-content__active");
                                        }, 3000)
                                    }}
                                >
                                    ?
                                </div>

                                <div class="tooltip-content" ref="tooltipContentPc">
                                    <p class="tooltip-content_text">
                                        Процент заполнения цвета в документе
                                    </p>
                                </div>
                            </div> */}
                        </div>

                    </td>
                    <td class="table-body-cell flex justify-content-center align-items-center">30 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">55 ₽</td>
                </tr>
                <tr class="table-body-row__presa">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent flex justify-content-end">
                        {`( > 50 %)`}
                    </td>
                    <td class="table-body-cell flex justify-content-center align-items-center">36 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">60 ₽</td>
                </tr>
                <tr class="table-body-row__presa">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap table-body-cell__percent">
                        101-300 страниц
                        <div class="flex align-items-center">
                            {`( < 50 %)`}
                        </div>

                    </td>
                    <td class="table-body-cell flex justify-content-center align-items-center">30 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">55 ₽</td>
                </tr>
                <tr class="table-body-row__presa">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent flex justify-content-end">
                        {`( > 50 %)`}
                    </td>
                    <td class="table-body-cell flex justify-content-center align-items-center">36 ₽</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">60 ₽</td>
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
                    <tr class="table-body-row__presa table-border-bottom">
                        <th class="table-body-cell flex flex-col">
                            <p class="font-weight-600">Печать</p>
                            <p class="font-weight-600">презентация</p>
                        </th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">А4</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center table-border-right">А3</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="table-body-row__presa table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400">1-100 страниц</td>
                        <td class="table-body-cell flex justify-content-center align-items-center">10 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center table-border-right">22 ₽</td>
                    </tr>
                    <tr class="table-body-row__presa table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400">101-300 страниц</td>
                        <td class="table-body-cell flex justify-content-center align-items-center">22 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center table-border-right">18 ₽</td>
                    </tr>
                    <tr class="table-body-row__presa table-border-bottom">
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell table-border-right"> </td>
                    </tr>
                    <tr class="table-body-row__presa table-border-bottom">
                        <td class="table-body-cell flex flex-col">
                            <p class="font-weight-600">Цветная печать</p>
                            <p class="font-weight-600">презентаций</p>
                        </td>
                        <td class="table-body-cell flex justify-content-center align-items-center">А4</td>
                        <td class="table-body-cell flex justify-content-center align-items-center table-border-right">А3</td>
                    </tr>
                    <tr class="table-body-row__presa table-border-bottom">
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
                        <td class="table-body-cell flex justify-content-center align-items-center">30 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center table-border-right">55 ₽</td>
                    </tr>
                    <tr class="table-body-row__presa table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent">
                            {`( > 50 %)`}
                        </td>
                        <td class="table-body-cell flex justify-content-center align-items-center">36 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center table-border-right">60 ₽</td>
                    </tr>
                    <tr class="table-body-row__presa table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap table-body-cell__percent">
                            101-300 страниц
                            <div class="flex align-items-center">
                                {`( < 50 %)`}
                            </div>

                        </td>
                        <td class="table-body-cell flex justify-content-center align-items-center">30 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center table-border-right">55 ₽</td>
                    </tr>
                    <tr class="table-body-row__presa table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent">
                            {`( > 50 %)`}
                        </td>
                        <td class="table-body-cell flex justify-content-center align-items-center">36 ₽</td>
                        <td class="table-body-cell flex justify-content-center align-items-center table-border-right">60 ₽</td>
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