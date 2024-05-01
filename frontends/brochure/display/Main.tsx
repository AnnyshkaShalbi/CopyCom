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