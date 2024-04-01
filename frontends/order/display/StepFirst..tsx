import { Cemjsx, Func, Static } from "cemjs-all"
import blueCovers from '@json/coversBlue'
import redCovers from '@json/coversRed'
import logos from '@json/logos'

const FirstStep = function(){
    return(
        <div class="order-first__first">
            <div class="order__subtitle">
                <span class="order-steps__circle order-steps__circle_light">1</span>
                <span 
                    class="order__subtitle-text"
                    onclick={Func.clickNext}
                
                >цвет</span>
            </div>

            <div class="order-first-cover">
                <div 
                    class={[
                        "order-first-cover__item" , 
                        "order-first-cover__item-red",
                        Static.coverColor ? "order-first-cover__item_active" : null
                    ]}
                    onclick={()=>{
                        Static.coverColor = !Static.coverColor
                    }}
                ></div>
                <div 
                    class={[
                        "order-first-cover__item",
                        "order-first-cover__item-blue",
                        Static.coverColor ? null : "order-first-cover__item_active"
                    ]}
                    onclick={()=>{
                        Static.coverColor = !Static.coverColor
                    }}
                ></div>
            </div>
        </div>
    )
}

const SecondStep = function({ covers }){
    return(
        <div class="mt-25">
            <div class="order__subtitle">
                <span class="order-steps__circle order-steps__circle_light">2</span>
                <span 
                    class="order__subtitle-text"
                
                >обложка</span>
            </div>
            <div class="order-covers mt-25">
                {
                    covers.map((item) => {
                        return(
                            <div 
                                class="order-covers__item"
                                // onclick={()=>{

                                // }}
                            >
                                <div class="order-covers__item-img">
                                    <img src={item.image} alt="Обложка диплома" />
                                </div>
                                <p>{item.title}</p>
                                <span>{item.price}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ThreeStep = function(){
    return(
        <div class="mt-25">
            <div class="order__subtitle">
                <span class="order-steps__circle order-steps__circle_light">3</span>
                <span 
                    class="order__subtitle-text"
                
                >добавь фирменную эмблему вуза</span>
            </div>
            <div class="order-logos mt-25">
                {
                    logos.map((item) => {
                        return(
                            <div class="order-logos__item">
                                <div class="order-logos__item-img">
                                    {
                                        item.image ? <img src={item.image} alt="Обложка диплома" /> : null
                                    }
                                </div>
                                <p>{item.title}</p>
                                {
                                    item.price ? 
                                    <span>{item.price}</span> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const FinishStep = function(){
    return(
        <div></div>
    )
}


export default function () {
    return (
        <div class="order-line__item">
            <FirstStep />
            <SecondStep covers={ Static.coverColor ? redCovers : blueCovers } />
            <ThreeStep />
            <button 
                class="btn btn_blue"
                onclick={()=>{ 
                  Static.currentStep++
                  console.log('=6f526a=', Static.currentStep)
                }}
            >Продолжить</button>
        </div>
    )
}