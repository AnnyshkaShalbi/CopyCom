import { Cemjsx, Func, Static, Fn } from "cemjs-all"
import logoWhite from '@svg/logoNewWhite.svg'

export default function () {
  return (
    <div class="wrapper">
      <div class="footer-inner">
        <a class="footer-logo" href="/" onclick={() => { Fn.link }}>
          <img src={logoWhite} alt="Copycom" />
        </a>
        <div class="footer-socials">
          <a href="https://www.instagram.com/copy.kom?igsh=dHI1b21uMm5udm5v" class="socials socials_pink" target="_blank">
            <i class="i i-inst"></i>
          </a>
          <a href="https://vk.com/copykom" class="socials socials_blue" target="_blank">
            <i class="i i-vk"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=79154310666" class="socials socials_green" target="_blank">
            <i class="i i-whatsup"></i>
          </a>
        </div>
        <a href="tel:+7 (915) 431-06-66" class="footer_phone">+ 7 (915) 431-06-66</a>
        <span class="footer-company">{`© 2015–${Static.currentYear} Копиком`}</span>
        <a href="/privacy" onclick={Fn.link} class="footer-policy">Политика конфиденциальности</a>
      </div>
    </div>
  )
}