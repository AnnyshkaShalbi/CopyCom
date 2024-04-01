import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import logo from '@svg/logo.svg'

const HeaderMenu = function () {
  return (
    <nav class="header-menu">
      <ul class="header-list">
        <li class="header-list__item headerLocation">
          <a href="#map">
            <i class="i i-map text-gray"></i>
            Москва
          </a>
        </li>
        <li class="header-list__item headerContact header-list__item_circle">
          <a href="#map">
            Контакты
          </a>
        </li>
        <li class="header-list__item">
          <a href="#" class="socials socials_green">
            <i class="i i-whatsup"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const HeaderMobileMenu = function () {
  return (
    <div
      ref="mobileMenu"
      class={[
        "header-mobileMenu",
        front.Variable.openSidebar ? "header-mobileMenu__active" : null
      ]}
    >
      <div class="flex align-items-center justify-content-between">
        <span class="header-logo__phone">
          <a href="tel:+7 (915) 431-06-66">+ 7 (915) 431-06-66</a>
        </span>
        <nav class="header-menu">
          <ul class="header-list">
            <li class="header-list__item">
              <a href="#map">
                <i class="i i-map text-gray"></i>
                Москва
              </a>
            </li>
            <li class="header-list__item header-list__item_circle">
              <a href="#map">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="/dev" class="header-mobileMenu_title mb-30 pb-5">твёрдый переплёт и печать дипломов</a>
      <a href="/dev" class="header-mobileMenu_title mb-30 pb-5">проектная документация</a>
      <a href="/dev" class="header-mobileMenu_title mb-30 pb-5">копицентр</a>
      <a href="/dev" class="header-mobileMenu_item pb-5">Печать документов</a>
      <a href="/dev" class="header-mobileMenu_item pb-5">Печать чертежей</a>
      <a href="/dev" class="header-mobileMenu_item pb-5">Печать презентаций</a>
      <a href="/dev" class="header-mobileMenu_item pb-5">Печать лекал и выкроек</a>
      <a href="/dev" class="header-mobileMenu_item pb-5">Сканирование документов</a>
      <a href="/dev" class="header-mobileMenu_item pb-5">Брошюровка на пластиковую пружину</a>
    </div>
  )
}

export default function () {
  return (
    <div class="wrapper">
      <div class="header-main">
        <div
          class="header-burger"
          onclick={(e) => {
            e.currentTarget.classList.toggle('header-burger_active')
            front.Variable.openSidebar = !front.Variable.openSidebar;
            Fn.initAll();
          }}
        >
          <span class="header-burger__item"></span>
          <span class="header-burger__item"></span>
          <span class="header-burger__item"></span>
        </div>

        <div class="header-logo">
          <a href="/" onclick={() => { Fn.link }}>
            <img src={logo} alt="Copycom logo" />
          </a>
          <span class="header-logo__phone headerPhone">
            <a href="tel:+7 (915) 431-06-66">+ 7 (915) 431-06-66</a>
          </span>
        </div>

        <HeaderMenu />
        <HeaderMobileMenu />
      </div>
    </div>
  )
}