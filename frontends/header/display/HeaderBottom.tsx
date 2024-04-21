import { Cemjsx, Func, Static, Fn } from "cemjs-all"
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
            <div class="dropdown-head flex align-items-center">
              <a href="/copydoc" onclick={Fn.link}> Копицентр</a>
              <img src={arrowDownBlue} alt="КОПИКОМ | копировальный центр для студентов" />
            </div>
            <ul>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
          
        </li>
      </ul>
    </div>
  )
}