import { Cemjsx, Static, front, Func, Fn } from "cemjs-all"

const FormOrder  = function (){
  return (
    <div class="order-form">
      
      <div class="g-equal-2">
        <div class="field">
          <label for="phone" class="field__label">{Static.form.phone.placeholder}</label>
          <input 
            type="text"
            id="phone"
            autocomplete="off"
            placeholder="+7 (980) 324 - 12 - 32"
            class={[
              "field__input",
              Static.form.phone.error ? "field__input_error" : null
            ]}
            oninput={(e)=>{
              Static.form.phone.value = e.currentTarget.value
              front.Services.functions.formPhone(Static.form.phone)
              Func.checkForm()
            }} 
          />
        </div>
        <div class="field">
          <label for="name" class="field__label">{Static.form.name.placeholder}</label>
          <input 
            type="text"
            id="name"
            autocomplete="off"
            placeholder="Андрей"
            class={[
              "field__input",
              Static.form.name.error ? "field__input_error" : null
            ]}
            oninput={(e)=>{
              Static.form.name.value = e.currentTarget.value
              front.Services.functions.formName(Static.form.name)
              Func.checkForm()
            }} 
          />
        </div>
      </div>
      <div class="field">
        <label for="email" class="field__label">{Static.form.email.placeholder}</label>
        <input 
          type="text"
          id="email"
          autocomplete="off"
          placeholder="example@gmail.com"
          class={[
            "field__input",
            Static.form.email.error ? "field__input_error" : null
          ]}
          oninput={(e)=>{
            Static.form.email.value = e.currentTarget.value
            front.Services.functions.formEmail(Static.form.email)
            Func.checkForm()
          }} 
        />
      </div>
      <div class="field">
        <label for="comment" class="field__label">{Static.form.comment.placeholder}</label>

        <textarea
          autocomplete="off"
          class={[
            "field__input",
            "field__input_textarea"
          ]}
          placeholder="Завернуть диплом в пленку или добавить пакет"
          oninput={(e)=>{
            Static.form.comment.value = e.currentTarget.value
            Func.checkForm()
          }} 
        ></textarea>
      </div>

      <div class="g-equal-2">
        {/* <button 
          class="btn btn-outline w100"
          onclick={()=>{
            Static.currentStep--
            // window.localStorage.setItem('currentStep', `${Static.currentStep}`)

            Static.steps.forEach((item)=>{
              item.active = false
              item.valid = false
            })

            Static.steps[1].active = true

            Func.checkForm()
          }}
        >
          <i class="i i-arrow-left"></i>
          Назад
        </button> */}
        <button 
          class={[
            "btn",
            "btn_blue",
            "w100",
            Static.form.isValid ? null : "btn_passive"
          ]}
          onclick={async ()=>{
            if(!Static.form.isValid) return

            let data = {
              name: Static.form.name.value,
              phone: Static.form.phone.value,
              email: Static.form.email.value,
              comment: Static.form.comment.value,
              color: Static.cover.color,
              titleCover: Static.cover.titleCover ? Static.cover.titleCover : "Без тиснения",
              titleLogo: Static.cover.titleLogo ? Static.cover.titleLogo : "Без эмблемы",
              totalPages: Static.form.countPages,
              coloredPages: Static.cover.coloredPages,
              countBlackPages: Static.form.countPages - Static.cover.coloredPages.length,
              countColorPages: Static.cover.coloredPages.length,
              price: Static.totalPrice,
              pocketForReview: Static.cover.additionally[0].active,
              pocketDiskCD: Static.cover.additionally[1].active,
              plasticFileBefore: {
                active: Static.cover.additionally[2].options[0].active,
                quantity: Static.cover.additionally[2].options[0].active ? Static.cover.additionally[2].options[0].quantity : 0
              },
              plasticFileAfter: {
                active: Static.cover.additionally[2].options[1].active,
                quantity: Static.cover.additionally[2].options[1].active ? Static.cover.additionally[2].options[1].quantity : 0
              },
              plastikFileInTheEnd: {
                active: Static.cover.additionally[2].options[2].active,
                quantity: Static.cover.additionally[2].options[2].active ? Static.cover.additionally[2].options[1].quantity : 0
              }
            }

            console.log('=data Message=', data)

            let answer = await front.Services.functions.sendApi("/api/Message", data)

            if (answer.error) {
              console.log('=772754=', answer.error)  
              return
            }

            Fn.log("===answer api===", answer)
            Fn.log("===Static.cover.input===", Static.cover.input)



            setTimeout(()=>{
              console.log('=Static.cover.input=',Static.cover.input)
              if(Static.cover.input){
                Func.uploadPdf(Static.cover.input)
                Fn.linkChange("/thanks")
              }
              return
            }, 2000)

          }}
        >
          Оформить заказ
          <i class="i i-arrow-right"></i>
        </button>
        <div>
          <p class="order-form_desc">Нажимая кнопку «Оформить заказ», ты даёшь своё согласие на обработку <a href="/privacy" class="link" onclick={Fn.link}>персональных данных</a></p>
        </div>
      </div>
      
    </div>
  )
}

export default function () {
    return (
        <section class="order-finish">
            <div>
              <FormOrder />
              
            </div>
            <div class="order-finish__desc">
              <p class="order-finish__desc_text">после оформления заказа ты можешь оплатить его онлайн и забрать свой диплом без надоедливой очереди</p>
            </div>
        </section>
    )
}