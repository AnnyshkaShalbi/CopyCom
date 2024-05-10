import { Cemjsx, Static, front, Func, Fn, Ref } from "cemjs-all"
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
        accept=".pdf"
        ref="updateFileInput"
        id="updateFileInput"
        class="updateFile-form__input"
        oninput={(e)=>{
         Func.uploadFile(e.currentTarget)
        }}
      />

      <label for="updateFileInput" class="updateFile-form__label" ref="updateFileContent">
        <img src={imgPdf} alt="Загрузить файл диплома в формате pdf"></img>
        <p>Загрузите файл в формате PDF</p>
        {/* <p>Макс. размером 100 мб</p> */}
      </label>

      <button 
        class="btn btn_blue"
        onclick={()=>{
          Ref.updateFileInput.click()
          // Func.getCountPages()
        }}
      >
        Загрузить файл
      </button>
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
            Static.cover.printColor = false
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
            Static.cover.printColor = true
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

const RenderReadiness = () => {
  return(
    <div class="readiness">
      <h6 class="readiness-title">Готовность 15.05.2024</h6>

      <div class="readiness-content">
        <div class="readiness-order">
          <div class="readiness-order-item flex align-items-center justify-content-between">
            <p class="readiness-order-item_title">Обложка</p>
            <span class="readiness-order-item_price">1200 руб</span>
          </div>
          <div class="readiness-order-item flex align-items-center justify-content-between">
            <p class="readiness-order-item_title">Страницы 109 х 10 ₽</p>
            <span class="readiness-order-item_price">1090 руб</span>
          </div>
          <div class="readiness-order-item flex align-items-center justify-content-between">
            <p class="readiness-order-item_title">Карман для рецензии</p>
            <span class="readiness-order-item_price">50 руб</span>
          </div>
          <div class="readiness-order-item flex align-items-center justify-content-between">
            <p class="readiness-order-item_title">Карман для CD диска</p>
            <span class="readiness-order-item_price">50 руб</span>
          </div>
          <div class="readiness-order-item flex align-items-center justify-content-between">
            <p class="readiness-order-item_title">Файл перед титулом 4 х 20 ₽</p>
            <span class="readiness-order-item_price">80 руб</span>
          </div>
        </div>

        <div class="readiness-sum">
          <span class="readiness-sum-price">
            1200 
            <span class="readiness-sum-price_index">руб</span>
          </span>
          <button 
            class="btn btn_blue"
            onclick={()=>{
              Static.currentStep++
              Func.checkForm()
            }}
          >
            Продолжить
            <i class="i i-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function () {
    return (
      <div>
        <div class="updateFile">
          <RenderUpdateFileForm />
          <RenderUpdateFileOption />
        </div>
        <RenderReadiness />
      </div>
        
    )
}