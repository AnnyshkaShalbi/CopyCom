import { Cemjsx } from "cemjs-all"
import sberbank from '@svg/banksLogo/sberbank.svg'
import tinkoff from '@svg/banksLogo/tinkoff.svg'

export default function () {
    return (
       <div class="thanks-pay-wrapper">
         <div class="thanks-pay"> 
            <h2 class="thanks-pay-title">Оплата онлайн</h2>
            <p class="text-align-center">Также ты можешь выбрать банковскую карту и оплатить заказ сейчас</p>
            <div class="thanks-pay-banks">
              <img src={sberbank} alt="Сбербанк" />
              <img src={tinkoff} alt="Тинькофф" />
            </div>
            {/* <a href="/" class="btn btn_blue">
              Оплатить онлайн
            </a> */}
        </div>
       </div>
    )
}