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

      <button class="btn btn_blue">Загрузить файл</button>
    </div>
  )
}

const RenderUpdateFileOption = () => {
  return(
    <div class="updateFile-options">

      <div class="updateFile-options__item">
        <h3 class="updateFile-options-title">Печатать</h3>
        <div 
          class="flex align-items-center cursor-pointer"
          onclick={()=>{
            Static.cover.printColor = !Static.cover.printColor
          }}
        >
          <div 
            class={[
                "order-first-cover__item mr-10",
                Static.cover.printColor ? null : "order-first-cover__item-blue",
                Static.cover.printColor ? null : "order-first-cover__item_active"
            ]}
           
          ></div>
          <span class="updateFile-options-text">Чёрно-белая</span>
        </div>
        <div 
          class="flex align-items-center cursor-pointer"
          onclick={()=>{
            Static.cover.printColor = !Static.cover.color
          }}
        >
          <div 
            class={[
                "order-first-cover__item mr-10",
                Static.cover.printColor ? "order-first-cover__item-blue" : null,
                Static.cover.printColor ? "order-first-cover__item_active" : null
            ]}
          ></div>
          <span class="updateFile-options-text">Цветная</span>
        </div>
      </div>

      <div class="updateFile-options__item">
        <h3 class="updateFile-options-title">Дополнительно</h3>
        {
          Static.cover.additionally.map((item)=>{
            return(
              <div 
                class="flex align-items-center justify-content-between cursor-pointer dashed"
                onclick={(e)=>{
                  item.active = !item.active
                }}
              >
                <div class="flex align-items-center">
                  <div
                    class={[
                      "checkbox",
                      item.active ? "checkbox_active" : null
                    ]}
                  >
                  </div>
                  <span class="updateFile-options-text pl-10 pr-3">{item.text}</span>
                </div>
                <span class="updateFile-options-price pl-3">{item.price} ₽</span>
              </div>
            )
          })
        }
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