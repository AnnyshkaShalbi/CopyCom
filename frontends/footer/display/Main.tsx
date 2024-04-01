import { Cemjsx, Func, Static, Fn } from "cemjs-all"
import logoWhite from '@svg/logoWhite.svg'

export default function () {
  return (
    <div class="wrapper">
      <div class="footer-inner">

        <a class="footer-logo" href="/" onclick={() => { Fn.link }}>
          <img src={logoWhite} alt="Copycom" />
        </a>

        <div class="footer-socials">
          <a href="#" class="socials socials_pink">
            <i class="i i-inst"></i>
          </a>
          <a href="#" class="socials socials_blue">
            <i class="i i-vk"></i>
          </a>
          <a href="#" class="socials socials_green">
            <i class="i i-whatsup"></i>
          </a>
        </div>

        <a href="tel:+7 (915) 431-06-66" class="footer_phone">+ 7 (915) 431-06-66</a>




        <span class="footer-company">© 2015–2024 Копиком</span>
        <span class="footer-policy">Политика конфиденциальности</span>


      </div>
    </div>
  )
}