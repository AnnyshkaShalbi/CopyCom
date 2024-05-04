import { Cemjsx, Func, Static, Fn, Ref } from "cemjs-all"
import arrowDownBlue from '@svg/icons/arrowDownBlue.svg'

export default function () {
  return (
    <div class="wrapper headerBottom" ref="headerBottom">
      <ul class="header-list pY-18">
        <li class="header-list__item">
          <a
            href="/order"
            onclick={Fn.link}
          >
            Печать диплома
          </a>
        </li>
        <li class="header-list__item">
          <a href="/projectdoc" onclick={Fn.link}>
            Проектная документация
          </a>
        </li>
        <li class="header-list__item">
          <div
            ref="dropdown"
            class="dropdown"
            onclick={(e) => {
              Ref.dropdownList.classList.toggle('dropdown-body__active')
              Ref.dropdownArrow.classList.toggle('dropdown-head-arrow__active')
            }}
          >
            <div
              ref="dropdownHead"
              class="dropdown-head flex align-items-center">
              <span>Другие услуги</span>
              <img src={arrowDownBlue} alt="КОПИКОМ | копировальный центр для студентов" class="dropdown-head-arrow" ref="dropdownArrow" />
            </div>
            <ul class="dropdown-body" ref="dropdownList">
              <li>
                <a href="/copydoc" onclick={Fn.link} class="dropdown-item">Печать документов</a>
              </li>
              <li>
                <a href="/drawings" onclick={Fn.link} class="dropdown-item">Печать чертежей</a>
              </li>
              <li>
                <a href="/presentations" onclick={Fn.link} class="dropdown-item">Печать презентаций</a>
              </li>
              <li>
                <a href="/patterns" onclick={Fn.link} class="dropdown-item">Печать лекал</a>
              </li>
              <li>
                <a href="/scanning" onclick={Fn.link} class="dropdown-item">Сканирование</a>
              </li>
              <li>
                <a href="/hardcover" onclick={Fn.link} class="dropdown-item">Твёрдый перёплет</a>
              </li>
              <li>
                <a href="/brochure" onclick={Fn.link} class="dropdown-item">Брошюровка</a>
              </li>
            </ul>
          </div>

        </li>
      </ul>
    </div>
  )
}