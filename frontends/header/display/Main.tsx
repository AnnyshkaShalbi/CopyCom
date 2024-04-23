import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import logo from '@svg/logoNewBlack.svg'

const HeaderMenu = function () {
  return (
    <nav class="header-menu">
      <ul class="header-list">
        <li
          class="header-list__item headerLocation"
        >
          <a
            href="#map"
            onclick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector(e.currentTarget.getAttribute('href')).offsetTop - 155,
                behavior: "smooth"
              })
            }}
          >
            <i class="i i-map text-gray"></i>
            Москва
          </a>
        </li>
        <li class="header-list__item headerContact header-list__item_circle">
          <a
            href="#metro"
            onclick={(e) => {
              e.preventDefault();
              document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
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

      <a
        class="header-mobileMenu_title mb-30 pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}>
        печать диплома
      </a>
      <a
        class="header-mobileMenu_title mb-30 pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}
      >
        проектная документация
      </a>
      <a
        // onclick={() => {
        //   Fn.initOne("modalSoon", {})
        // }}
        class="header-mobileMenu_title mb-30 pb-5"
      >
        другие услуги
      </a>
      <a
        class="header-mobileMenu_item pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}
      >
        Печать документов
      </a>
      <a
        class="header-mobileMenu_item pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}
      >
        Печать чертежей
      </a>
      <a
        class="header-mobileMenu_item pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}
      >
        Печать презентаций
      </a>
      <a
        class="header-mobileMenu_item pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}
      >
        Печать лекал и выкроек
      </a>
      <a
        class="header-mobileMenu_item pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}
      >
        Сканирование документов
      </a>
      <a
        class="header-mobileMenu_item pb-5"
        onclick={() => {
          Fn.initOne("modalSoon", {})
        }}
      >
        Брошюровка на пластиковую пружину
      </a>
      <div class="flex align-items-center justify-content-between flex-wrap pb-20">
        <span class="header-logo__phone">
          <a href="https://api.whatsapp.com/send/?phone=79154310666">+ 7 (915) 431-06-66</a>
        </span>
        <nav class="header-menu">
          <ul class="header-list">
            <li class="header-list__item">
              <a
                href="#map"
                onclick={(e) => {
                  front.Variable.openSidebar = !front.Variable.openSidebar
                  Fn.initAll()
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector(e.currentTarget.getAttribute('href')).offsetTop - 155,
                    behavior: "smooth"
                  })
                }}
              >
                <i class="i i-map text-gray"></i>
                Москва
              </a>
            </li>
            <li class="header-list__item header-list__item_circle">
              <a
                href="#metro"
                onclick={(e) => {
                  front.Variable.openSidebar = !front.Variable.openSidebar
                  Fn.initAll()
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector(e.currentTarget.getAttribute('href')).offsetTop - 100,
                    behavior: "smooth"
                  })
                }}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
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
            // e.currentTarget.classList.toggle('header-burger_active')
            front.Variable.openSidebar = !front.Variable.openSidebar;
            Fn.initAll();
          }}
        >
          <span class="header-burger__item"></span>
          <span class="header-burger__item"></span>
          <span class="header-burger__item"></span>
        </div>

        <div class="header-logo">
          <a href="/" onclick={Fn.link} class="flex align-items-center">
            <img src={logo} alt="Копиком копицентр для студентов" />
          </a>
          <span class="header-logo__phone headerPhone">
            <a href="https://api.whatsapp.com/send/?phone=79154310666">+ 7 (915) 431-06-66</a>
          </span>
        </div>

        <HeaderMenu />
        <HeaderMobileMenu />
      </div>
    </div>
  )
}