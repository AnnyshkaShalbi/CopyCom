import { Cemjsx, Static } from "cemjs-all"
import Main from "./display/Main"
import Steps from "./display/Steps"

export default function () {
  return (
    <div class="order-inner">
      <h2 class="title_secondary mb-20">твёрдый переплёт дипломов</h2>
      {
        Static.localStep > 1 ? null : 
        Static.currentStep > 1 ? 
        null : 
        <p class="order_text">Твёрдый перёплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены</p>
      }

      {/* {
        Static.currentStep > 1 ? 
        null : 
        <p class="order_text">Твёрдый перёплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены</p>
      } */}
      <Steps />
      <Main />
    </div>
  )
}