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
              front.Services.functions.formPhone(Static.phone.name)
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
        <button 
          class="btn btn-outline w100"
          onclick={()=>{
            Static.currentStep--
            window.localStorage.setItem('currentStep', `${Static.currentStep}`)

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
        </button>
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
            }

            let answer = await front.Services.functions.sendApi("/api/Message", data)

            if (answer.error) {
              console.log('=772754=', answer.error)  
              return
            }

            Fn.linkChange("/thanks")
          }}
        >
          Оформить заказ
          <i class="i i-arrow-right"></i>
        </button>
      </div>
      <p class="order-form_desc">Нажимая кнопку «Оформить заказ», ты даёшь своё согласие на обработку <a href="/privacy" class="link" onclick={Fn.link}>персональных данных</a></p>
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