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
            <h1 class="title_secondary pb-15">печать лекал и выкроек</h1>
            <p class="text-wrap text-gray">Распечатаем лекала и выкройки любой длины, даже свыше 3-х метров и в реальном размере (да-да, мы умеем это делать).</p>
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
                <tr class="table-body-row__patterns table-border-bottom">
                    <th class="font-weight-600 table-body-cell">Лекала и выкройки</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">Ширина печати, м</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">Вид печати</th>
                    <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">Цена за м.п.</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="table-body-row__patterns table-border-bottom">
                    <td class="table-body-cell text-gray font-weight-400">на обычной бумаге (белая, 80 г.)</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">0,9</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">Без вырезания</td>
                    <td class="table-body-cell flex justify-content-center align-items-center">140 ₽</td>
                </tr>
                <tr class="table-body-row__patterns">
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
                    <td class="table-body-cell"> </td>
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
                    <tr class="table-body-row__patterns table-border-bottom">
                        <th class="font-weight-600 table-body-cell">Лекала и выкройки</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">Ширина печати, м</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">Вид печати</th>
                        <th class="table-body-cell text-gray font-weight-400 font-size-base flex justify-content-center align-items-center">Цена за м.п.</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="table-body-row__patterns table-border-bottom">
                        <td class="table-body-cell text-gray font-weight-400 flex flex-col">
                            <span>на обычной бумаге</span>
                            <span class="text-nowrap">(белая, 80 г.)</span>
                        </td>
                        <td class="table-body-cell flex justify-content-center align-items-center">0,9</td>
                        <td class="table-body-cell flex justify-content-center align-items-center">Без вырезания</td>
                        <td class="table-body-cell flex justify-content-center align-items-center">140 ₽</td>
                    </tr>
                    <tr class="table-body-row__patterns">
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
                        <td class="table-body-cell"> </td>
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