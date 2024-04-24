import { Cemjsx, Static, Func, front, Ref } from "cemjs-all"
import filePdf from '@svg/icons/filePdf.svg'

const RenderMessage = () => {
    return (
        <div class="message-timer">
            <p>Прокрутите вправо, чтобы увидеть больше цен</p>
        </div>
    )
}

const RenderTitle = () => {
    return (
        <div>
            <h1 class="title_secondary pb-15">Копирование документов</h1>
            <p class="text-wrap text-grey">Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете</p>
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
                    <td class="table-body-cell">10 ₽</td>
                    <td class="table-body-cell">22 ₽</td>
                    <td class="table-body-cell">60 ₽</td>
                    <td class="table-body-cell">80 ₽</td>
                    <td class="table-body-cell">130 ₽</td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400">101-300 страниц</td>
                    <td class="table-body-cell">8 ₽</td>
                    <td class="border-right-none table-body-cell ">18 ₽</td>
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
                                    Ref.tooltipContent.classList.add("tooltip-content__active");
                                }}
                                onmouseleave={() => {
                                    Ref.tooltipContent.classList.remove(
                                        "tooltip-content__active",
                                    );
                                }}
                            >
                                <div class="tooltip-content" ref="tooltipContent">
                                    <p class="tooltip-content_text">
                                        Процент заливки цвета в документе (площадь цветных плашек) — в документе присутствуют цветные элементы, плашки со сплошной заливкой. От размера и их количества зависит цена, чем больше процент заливки, тем выше стоимость.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </td>
                    <td class="table-body-cell">30 ₽</td>
                    <td class="table-body-cell">55 ₽</td>
                    <td class="table-body-cell">85 ₽</td>
                    <td class="table-body-cell">110 ₽</td>
                    <td class="table-body-cell">130 ₽</td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap table-body-cell__percent">
                        {`( > 50 %)`}
                    </td>
                    <td class="table-body-cell">36 ₽</td>
                    <td class="table-body-cell">60 ₽</td>
                    <td class="table-body-cell">150 ₽</td>
                    <td class="table-body-cell">190 ₽</td>
                    <td class="table-body-cell">280 ₽</td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap table-body-cell__percent">
                        1-300 страниц
                        <span class="flex align-items-center">
                            {`( < 50 %)`}
                        </span>
                    </td>
                    <td class="table-body-cell">25 ₽</td>
                    <td class="table-body-cell border-right-none">50 ₽</td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                </tr>
                <tr class="table-body-row">
                    <td class="table-body-cell text-gray font-weight-400 table-body-cell__wrap table-body-cell__percent">
                        {`( > 50 %)`}
                    </td>
                    <td class="table-body-cell">30 ₽</td>
                    <td class="table-body-cell border-right-none">55 ₽</td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                    <td class="table-body-cell border-right-none"></td>
                </tr>
            </tbody>
        </table>
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
                        // Static.form.phone.error ? "field__input_error" : null
                    ]}
                    oninput={(e) => {
                        // Static.form.phone.value = e.currentTarget.value
                        // front.Services.functions.formPhone(Static.form.phone)
                        // Func.checkForm()
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
                        <th class="table-body-cell">
                            <p class="font-weight-600">Черно-белое копирование</p>
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
                        <td class="table-body-cell">10 ₽</td>
                        <td class="table-body-cell">22 ₽</td>
                        <td class="table-body-cell">60 ₽</td>
                        <td class="table-body-cell">80 ₽</td>
                        <td class="table-body-cell">130 ₽</td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400">101-300 страниц</td>
                        <td class="table-body-cell">8 ₽</td>
                        <td class="border-right-none table-body-cell ">18 ₽</td>
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
                                        Ref.tooltipContent.classList.add("tooltip-content__active");
                                    }}
                                    onmouseleave={() => {
                                        Ref.tooltipContent.classList.remove(
                                            "tooltip-content__active",
                                        );
                                    }}
                                >
                                    <div class="tooltip-content" ref="tooltipContent">
                                        <p class="tooltip-content_text">
                                            Процент заливки цвета в документе (площадь цветных плашек) — в документе присутствуют цветные элементы, плашки со сплошной заливкой. От размера и их количества зависит цена, чем больше процент заливки, тем выше стоимость.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </td>
                        <td class="table-body-cell">30 ₽</td>
                        <td class="table-body-cell">55 ₽</td>
                        <td class="table-body-cell">85 ₽</td>
                        <td class="table-body-cell">110 ₽</td>
                        <td class="table-body-cell">130 ₽</td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent">
                            {`( > 50 %)`}
                        </td>
                        <td class="table-body-cell">36 ₽</td>
                        <td class="table-body-cell">60 ₽</td>
                        <td class="table-body-cell">150 ₽</td>
                        <td class="table-body-cell">190 ₽</td>
                        <td class="table-body-cell">280 ₽</td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent">
                            1-300 страниц
                            <span class="flex align-items-center">
                                {`( < 50 %)`}
                            </span>
                        </td>
                        <td class="table-body-cell">25 ₽</td>
                        <td class="table-body-cell border-right-none">50 ₽</td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
                    </tr>
                    <tr class="table-body-row">
                        <td class="table-body-cell text-gray font-weight-400 table-body-cell__percent">
                            {`( > 50 %)`}
                        </td>
                        <td class="table-body-cell">30 ₽</td>
                        <td class="table-body-cell border-right-none">55 ₽</td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
                        <td class="table-body-cell border-right-none"></td>
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