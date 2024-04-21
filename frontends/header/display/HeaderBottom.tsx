import { Cemjsx, Func, Static, Fn, Ref } from "cemjs-all"
import arrowDownBlue from '@svg/icons/arrowDownBlue.svg'

export default function () {
  return (
    <div class="wrapper headerBottom" ref="headerBottom">
      <ul class="header-list pY-18">
        <li class="header-list__item">
          <a href="/projectdoc" onclick={Fn.link}>
            Проектная документация
          </a>
        </li>
        <li class="header-list__item">
          <div class="dropdown">
            <div 
              class="dropdown-head flex align-items-center"
              onclick={(e)=>{
                Ref.dropdownList.classList.toggle('dropdown-body__active')
              }}
            >
              {/* <a href="/copydoc" onclick={Fn.link}> Копицентр</a> */}
              <span>Копицентр</span>
              <img src={arrowDownBlue} alt="КОПИКОМ | копировальный центр для студентов" />
            </div>
            <ul class="dropdown-body" ref="dropdownList">
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Твёрдый переплёт</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Чертежи</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Брошюровка</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Сканирование</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Лекала</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Презентации</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Печать документов</a>
              </li>
            </ul>
          </div>
          
        </li>
      </ul>
    </div>
  )
}