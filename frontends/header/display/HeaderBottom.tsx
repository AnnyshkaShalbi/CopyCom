import { Cemjsx, Func, Static, Fn, Ref } from "cemjs-all"
import arrowDownBlue from '@svg/icons/arrowDownBlue.svg'

export default function () {
  return (
    <div class="wrapper headerBottom" ref="headerBottom">
      <ul class="header-list pY-18">
        <li class="header-list__item">
          <a 
            // href="/projectdoc" 
            // onclick={Fn.link}
            onclick={() => {
              Fn.initOne("modalSoon", {})
            }}
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
            onclick={(e)=>{
              Ref.dropdownList.classList.toggle('dropdown-body__active')
              Ref.dropdownArrow.classList.toggle('dropdown-head-arrow__active')
            }}
          >
            <div 
              ref="dropdownHead"
              class="dropdown-head flex align-items-center">
              {/* <a href="/copydoc" onclick={Fn.link}> Копицентр</a> */}
              <span>Другие услуги</span>
              <img src={arrowDownBlue} alt="КОПИКОМ | копировальный центр для студентов" class="dropdown-head-arrow" ref="dropdownArrow" />
            </div>
            <ul class="dropdown-body" ref="dropdownList">
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Печать документов</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Печать чертежей</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Печать презентаций</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Печать лекал</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Сканирование</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Твердый переплет</a>
              </li>
              <li>
                <a href="/" onclick={Fn.link} class="dropdown-item">Брошюровка</a>
              </li>
            </ul>
          </div>
          
        </li>
      </ul>
    </div>
  )
}