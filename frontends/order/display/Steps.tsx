import { Cemjsx, Static } from "cemjs-all"

export default function () {
    return (
        <div class="order-steps">
            {
                Static.steps.map((item, index) => {
                    return(
                        <div 
                            class={[
                                "order-steps__item",
                                item.active ? "order-steps__item_active" : null
                            ]}
                        >
                            <span 
                                class={[
                                    "order-steps__circle",
                                    item.active ? "order-steps__circle_active" : null,
                                    item.valid ? "order-steps__circle_active" : null
                                ]}
                            >
                                {index+1}
                            </span>
                            <div class="order-steps__item-info">
                                <span class="order-steps__item-title">{item.title}</span>
                                <p class="order-steps__item-desc">{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}