import { Cemjsx, Func, Static, Fn } from "cemjs-all"
import logo from '@svg/logo.svg'

const HeaderMenu = function () {
  return (
    <nav class="header-menu">
      <ul class="header-list">
        <li class="header-list__item" ref="headerLocation">
          <a href="#map">
            <i class="i i-map text-gray"></i>
            Москва
          </a>
        </li>
        <li class="header-list__item header-list__item_circle" ref="headerContact">
          <a href="#map">
            Контакты
          </a>
        </li> 
        <li class="header-list__item">
          <a href="#" class="socials socials_green">
            <i class="i i-whatsup"></i>
          </a>
        </li>
        <li class="header-list__item">
          <a href="/order" class="btn btn_blue" onclick={()=>{Fn.link}} ref="headerBtn">
            Заказать переплёт диплома
            <i class="i i-arrow-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default function () {
  return (
    <div class="wrapper">
      <div class="header-main">
        <div 
          class="header-burger"
          onclick={(e)=>{
            e.currentTarget.classList.toggle('header-burger_active')
          }}
        >
          <span class="header-burger__item header-burger__item_1"></span>
          <span class="header-burger__item header-burger__item_2"></span>
          <span class="header-burger__item header-burger__item_3"></span>
        </div>

        <div class="header-logo">
          <a href="/" onclick={()=>{ Fn.link }}>
            <img src={logo} alt="Copycom logo" />
          </a>
          <span class="header-logo__phone" ref="headerPhone">
            <a href="tel:+7 (915) 431-06-66">+ 7 (915) 431-06-66</a>
          </span>
        </div>
        
        <HeaderMenu />
      </div>
    </div>
  )
}