import { Cemjsx, Static, front, Func, Fn } from "cemjs-all"
import imgPdf from '@svg/icons/filePdf.svg'

const RenderUpdateFileForm = () => {
  return(
    <div 
      ref="updateFileWrap"
      class="updateFile-form"
      ondragenter={Func.dragEnter}
      ondragleave={Func.dragLeave}
      ondragover={Func.dragOver}
      ondrop={Func.myDrop}
    >
      <input 
        type="file" 
        ref="updateFileWrapInput"
        id="updateFileInput"
        class="updateFile-form__input"
      />
      <label for="updateFileInput" class="updateFile-form__label">
        <img src={imgPdf} alt="Загрузить файл диплома в формате pdf"></img>
        <p>Загрузите файл в формате PDF</p>
        <p>Макс. размером 100 мб</p>
      </label>
    </div>
  )
}

const RenderUpdateFileOption = () => {
  return(
    <div class="updateFile-options">
      <div class="updateFile-options__item">
        <h3>Печатать</h3>
        <div class="order-first-cover__item order-first-cover__item_blue"></div>
      </div>
      <div class="updateFile-options__item">
        <h3>Дополнительно</h3>
      </div>
    </div>
  )
}

export default function () {
    return (
        <div class="updateFile">
          <RenderUpdateFileForm />
          <RenderUpdateFileOption />
        </div>
    )
}