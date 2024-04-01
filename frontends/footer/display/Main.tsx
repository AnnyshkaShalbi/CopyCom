import { Cemjsx, Func, Static, Fn } from "cemjs-all"
import logoWhite from '@svg/logoWhite.svg'

// const HeaderMenu = function () {
//   return (
//     <nav class="header-menu">
//       <ul class="header-list">
//         <li class="header-list__item">
//           <a href="#map">
//             <i class="i i-map text-gray"></i>
//             Москва
//           </a>
//         </li>
//         <li class="header-list__item header-list__item_circle">
//           <a href="#map">
//             Контакты
//           </a>
//         </li> 
//         <li class="header-list__item">
//           <a href="#" class="socials socials_green">
//             <i class="i i-whatsup"></i>
//           </a>
//         </li>
//         <li class="header-list__item">
//           <a href="/order" class="btn btn_blue" onclick={()=>{Fn.link}}>
//             Заказать переплёт диплома
//             <i class="i i-arrow-right"></i>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default function () {
  return (
    <div class="wrapper">
      <div class="footer-inner">
        <a href="/" onclick={()=>{Fn.link}}>
          <img src={logoWhite} alt="Copycom" />
        </a>

        <div class="f-col footer_center">
          <div class="footer-socials">
            <a href="#" class="socials socials_pink">
              <i class="i i-inst"></i>
            </a>
            <a href="#" class="socials socials_blue">
              <i class="i i-vk"></i>
            </a>
          </div>
          <span>© 2015–2024 Копиком</span>
        </div>

        <div class="f-col footer_right">
          <div class="footer-socials">
            <a href="#" class="socials socials_green">
              <i class="i i-whatsup"></i>
            </a>
            <a href="tel:+7 (915) 431-06-66" class="footer_phone">+ 7 (915) 431-06-66</a>
          </div>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </div>
  )
}