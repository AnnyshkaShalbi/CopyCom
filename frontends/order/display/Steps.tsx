import { Cemjsx, Static } from "cemjs-all"

export default function () {
    return (
        <div class="order-steps">
            {
                Static.steps.map((item, index) => {
                    return(
                        <div class="order-steps__item">
                            <span 
                                class={[
                                    "order-steps__circle",
                                    item.active ? "order-steps__circle_active" : null,
                                    item.valid ? "order-steps__circle_active" : null
                                ]}
                            >
                                {index+1}
                            </span>
                            <div class="order-steps__item-desc">
                                <span>{item.title}</span>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}