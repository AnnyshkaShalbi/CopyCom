import { Cemjsx, Fn } from "cemjs-all"
import Header from './Header'
import Footer from './Footer'

export default function () {
    return (
        <div class="modal_content">
            <Header />
            <main class="modal_body">
                <div class="modal_body_dev">
                    <span>Нажимая кнопку "Назад", данные заполненные на стором шаге онулируются. Вы уверенны, что хотите вернуться назад?</span>
                </div>
            </main>
            <Footer />
        </div>
    )
}