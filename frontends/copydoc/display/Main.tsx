import { Cemjsx } from "cemjs-all"

const RenderTitle = () => {
    return(
        <div>
            <h1 class="title_secondary pb-15">Копирование документов</h1>
            <p class="text-wrap text-grey">Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете</p>
        </div>
    )
}

const RenderTable = () => {
    return(
        <table class="table">
            <thead class="table-head">прайс-лист</thead>
            <tbody class="table-body">
                
            </tbody>
        </table>
    )
}

const RenderFile = () => {
    return(
        <div>

        </div>
    )
}

export default function () {
    return (
        <div> 
            <RenderTitle />
            <div class="copy-content"></div>
        </div>
    )
}