import { Cemjsx } from "cemjs-all"
import Main from "./display/Main"
import Steps from "./display/Steps"

export default function () {
  return (
    <div class="order-inner">
      <h2 class="title_secondary">твёрдый переплет дипломов</h2>
      <p class="order_text">Твёрдый переплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены</p>
      <Steps />
      <Main />
    </div>
  )
}