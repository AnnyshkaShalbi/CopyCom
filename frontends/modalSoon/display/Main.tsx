import { Cemjsx, Fn } from "cemjs-all"
import dev from '@svg/icons/development.svg'

export default function () {
    return (
        <div class="modal_content">
            <header class="modal_header">
                <button
                    class="modal_close"
                    onclick={() => {
                        setTimeout(() => {
                            Fn.clearData()
                        }, 5);
                    }}>
                    x
                </button>
            </header>
            <main class="modal_body">
                <div class="modal_body_dev">
                    <span>В разработке ...</span>
                    <img src={dev} alt="В разработке" />
                </div>
            </main>
        </div>
    )
}