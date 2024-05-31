import { Cemjsx, Fn } from "cemjs-all"

export default function () {
  return (
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
  )
}