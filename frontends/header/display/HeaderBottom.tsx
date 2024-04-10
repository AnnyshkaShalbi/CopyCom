import { Cemjsx, Func, Static, Fn } from "cemjs-all"

export default function () {
  return (
    <div class="wrapper headerBottom" ref="headerBottom">
      <ul class="header-list pY-18">
        <li class="header-list__item">
          <a
            href="/projectdoc"
            onclick={Fn.link}
          // onclick={() => {
          //   Fn.initOne("modalSoon", {})
          // }}
          >
            Проектная документация
          </a>
        </li>
        <li class="header-list__item">
          <a
            href="/copydoc"
            onclick={Fn.link}
          // onclick={() => {
          //   Fn.initOne("modalSoon", {})
          // }}
          >
            Копицентр
          </a>
        </li>
      </ul>
    </div>
  )
}