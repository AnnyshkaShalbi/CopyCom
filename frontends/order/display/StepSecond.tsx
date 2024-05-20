import { Cemjsx, Static, front, Func, Fn, Ref } from "cemjs-all"
import imgPdf from '@svg/icons/filePdf.svg'
import pdfDone from '@svg/icons/fileDone.svg'

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

      {
        front.Variable.countPages ? 
        <div class="updateFile-form__label">
          <img src={pdfDone} alt="Файл в формате pdf" />
          <p>{`Количество страниц — ${front.Variable.countPages}`}</p>
          <p>{`Размер файла — ${Static.formatBytes}`}</p>
        </div> : 
        <label for="updateFileInput" class="updateFile-form__label" ref="updateFileContent">
          <img src={imgPdf} alt="Загрузить файл диплома в формате pdf"></img>
          <p>Загрузите файл в формате PDF</p>
        </label>
      }

      <button 
        class="btn btn_blue"
        onclick={()=>{
          Ref.updateFileInput.click()
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
        <h3 class="updateFile-options-title mb-10">Печатать</h3>
        <div 
          class="flex align-items-center cursor-pointer mb-10"
          onclick={()=>{
            Static.cover.printColor = false
            Func.checkPrice()
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
            Func.checkPrice()
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

        {
          Static.cover.printColor ? 
          <div>
            {
              front.Variable.countPages ?
              <div>
                <p class="updateFile-options-text mt-10">Выберите номер цветных страниц</p>
                <div class="countPages-wrap">
                  <div class="countPages">
                    {
                      Array.from(Array(front.Variable.countPages).keys()).map((item, index) => {
                        return(
                          <div 
                            class={[
                              "countPages-item", 
                              Static.cover.coloredPages?.includes(index + 1) ? "countPages-item_active" : null
                            ]}
                            onclick={(e)=>{
                              if (Static.cover.coloredPages?.includes(index + 1)) {
                                Static.cover.coloredPages?.splice( Static.cover.coloredPages?.indexOf(index + 1), 1);
                                e.currentTarget.classList.remove("countPages-item_active")
                              } else {
                                Static.cover.coloredPages?.push(index + 1);
                                e.currentTarget.classList.add("countPages-item_active")
                              }
                              Func.checkPrice()
                            }}
                          >
                            <span>{index + 1}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              
              : null
            }
          </div> : null
        }
      </div>

      <div class="updateFile-options__item">
        <h3 class="updateFile-options-title">Дополнительно</h3>
        {
          Static.cover.additionally.map((item)=>{
            return(
              <div>
                <div 
                  class="flex align-items-center justify-content-between cursor-pointer dashed mt-10"
                  onclick={(e)=>{
                    item.active = !item.active
                    Func.checkPrice()
                    
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
                {
                  item.active ? 
                    <div>
                      {
                        item.checked ? 
                        <div class="ml-20">
                          {
                            item.options.map((el)=>{
                              return(
                                <div>
                                  <div 
                                    class="flex align-items-center mt-10 cursor-pointer"
                                    onclick={()=>{
                                      el.active = !el.active
                                    }}
                                  >
                                    <div
                                      class={[
                                        "checkbox", 
                                        el.active ? "checkbox_active" : null
                                      ]}
                                    >
                                    </div>
                                    <span class="updateFile-options-text pl-10 pr-3">{el.text}</span>
                                  </div>
                                  {
                                    el.active ?
                                    <div>
                                      <p class="updateFile-options-text mt-10">Выбери количество</p>
                                      <div class="updateFile-countFile-wrap">
                                        <div class="updateFile-countFile">
                                          {
                                            el.countFiles.map((count, i)=>{
                                              return(
                                                <div 
                                                  class={["updateFile-countFile_item", count.active ? "updateFile-countFile_item_active" : null]}
                                                  onclick={()=>{
                                                    el.countFiles.forEach(identificator => {
                                                      identificator.active = false
                                                    })
                                                    count.active = true
                                                  }}
                                                >
                                                  {count.id}
                                                </div>
                                              )
                                            })
                                          }
                                        </div>
                                      </div>
                                    </div> : null
                                  }
                                </div>
                                
                              )
                            })
                          }
                        </div> : null
                      }
                    </div> : null
                }
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
            <span class="readiness-order-item_price">{Static.cover.priceCover + Static.cover.priceLogo} руб</span>
          </div>

          {
            front.Variable.countPages ? 
            <div>
              {
                Static.cover.printColor ? 
                <div>
                  <div class="readiness-order-item flex align-items-center justify-content-between">
                    <p class="readiness-order-item_title">{`Страницы ${front.Variable.countPages - Static.cover.coloredPages.length} х 10 ₽`}</p>
                    <span class="readiness-order-item_price">{`${(front.Variable.countPages - Static.cover.coloredPages.length) * 10} руб`}</span>
                  </div>
                  {
                    Static.cover.coloredPages.length > 0 ? 
                    <div>
                      
                      <div class="readiness-order-item flex align-items-center justify-content-between">
                        <p class="readiness-order-item_title">{`Цветные страницы ${Static.cover.coloredPages.length} х 30 ₽`}</p>
                        <span class="readiness-order-item_price">{`${Static.cover.coloredPages.length * 30} руб`}</span>
                      </div>
                    </div> : null
                  }
                </div> : 
                <div class="readiness-order-item flex align-items-center justify-content-between">
                  <p class="readiness-order-item_title">{`Страницы ${front.Variable.countPages} х 10 ₽`}</p>
                  <span class="readiness-order-item_price">{`${front.Variable.countPages * 10} руб`}</span>
                </div>
              }
            </div> : null
          }
          
          {
            Static.cover.additionally[0].active ? 
            <div class="readiness-order-item flex align-items-center justify-content-between">
              <p class="readiness-order-item_title">Карман для рецензии</p>
              <span class="readiness-order-item_price">50 руб</span>
            </div> : null
          }

          {
            Static.cover.additionally[1].active ? 
            <div class="readiness-order-item flex align-items-center justify-content-between">
              <p class="readiness-order-item_title">Карман для CD диска</p>
              <span class="readiness-order-item_price">50 руб</span>
            </div> : null
          }

          {
            Static.cover.additionally[2].active ? 
            <div>
              {
                Static.cover.additionally[2].options[0].active ? 
                <div>
                  <div class="readiness-order-item flex align-items-center justify-content-between">
                    <p class="readiness-order-item_title">
                      {`Файл перед титулом ${Static.cover.additionally[2].options[0].quantity} х 20 ₽`}
                    </p>
                    <span class="readiness-order-item_price">
                      {`${Static.cover.additionally[2].options[0].quantity * 20} руб`}
                    </span>
                  </div>
                </div> : null
              }
            </div> : null
          }

          {
            Static.cover.additionally[2].active ? 
            <div>
              {
                Static.cover.additionally[2].options[1].active ? 
                <div>
                  <div class="readiness-order-item flex align-items-center justify-content-between">
                    <p class="readiness-order-item_title">
                      {`Файл после титула ${Static.cover.additionally[2].options[1].quantity} х 20 ₽`}
                    </p>
                    <span class="readiness-order-item_price">
                      {`${Static.cover.additionally[2].options[1].quantity * 20} руб`}
                    </span>
                  </div>
                </div> : null
              }
            </div> : null
          }

          {
            Static.cover.additionally[2].active ? 
            <div>
              {
                Static.cover.additionally[2].options[2].active ? 
                <div>
                  <div class="readiness-order-item flex align-items-center justify-content-between">
                    <p class="readiness-order-item_title">
                      {`Файл в конце работы ${Static.cover.additionally[2].options[2].quantity} х 20 ₽`}
                    </p>
                    <span class="readiness-order-item_price">
                      {`${Static.cover.additionally[2].options[2].quantity * 20} руб`}
                    </span>
                  </div>
                </div> : null
              }
            </div> : null
          }

        </div>

        <div class="readiness-sum">
          <span class="readiness-sum-price">
            {/* 1200  */}
            {/* <p ref="totalPrice"></p> */}
            { front.Variable.totalPrice }
            <span class="readiness-sum-price_index">руб</span>
          </span>
          <div class="readiness-btns">
            <button 
              class="btn btn-outline"
              onclick={()=>{
                Static.currentStep--
                // window.localStorage.setItem('currentStep', `${Static.currentStep}`)

                Static.steps.forEach((item)=>{
                  item.active = false
                  item.valid = false
                })

                Static.steps[0].active = true

                Func.checkForm()
              }}
            >
              <i class="i i-arrow-left"></i>
              Назад
            </button>
            <button 
              class="btn btn_blue"
              onclick={()=>{
                Static.currentStep++
                // window.localStorage.setItem('currentStep', `${Static.currentStep}`)
                Func.checkPrice()
                Func.checkForm()
              }}
            >
              Продолжить
              <i class="i i-arrow-right"></i>
            </button>
          </div>
          
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