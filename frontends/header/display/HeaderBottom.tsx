import { Cemjsx, Func, Static, Fn } from "cemjs-all"
// import logo from '@svg/logo.svg'

// const HeaderMenu = function () {
//   return (
//     <nav class="header-menu">
//       <ul class="header-list">
//         <li class="header-list__item">
//           <a href="#map">
//             <i></i>
//             Москва
//           </a>
//         </li>
//         <li class="header-list__item">
//           <a href="#map">
//             Контакты
//           </a>
//         </li> 
//         <li class="header-list__item">
//           <a href="#">
//             <i></i>
//           </a>
//         </li>
//         <li class="header-list__item">
//           <a href="" class="btn btn_blue">
//             Заказать переплёт диплома
//             <i></i>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default function () {
  return (
    <div class="wrapper">
      <ul class="header-list pY-18">
        <li class="header-list__item">
          <a href="">
            Проектная документация
          </a>
        </li>
        <li class="header-list__item">
          <a href="">
            Копицентр
          </a>
        </li>
      </ul>
    </div>
  )
}