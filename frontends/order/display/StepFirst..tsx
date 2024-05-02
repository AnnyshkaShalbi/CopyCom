import { Cemjsx, Func, Static } from "cemjs-all"
import emptyCover from '@images/empty.png'
import arrowDoneBlack from '@svg/icons/arrowDoneBlack.svg'
import blueCovers from '@json/coversBlue'
import redCovers from '@json/coversRed'
import logos from '@json/logos'

const FirstStep = function(){
    return(
        <div class="order-first__first">
            <div class="order__subtitle">
                <span class="order-steps__circle order-steps__circle_light text-dark">1</span>
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
                        Static.cover.color ? "order-first-cover__item_active" : null
                    ]}
                    onclick={()=>{
                        Static.cover.color = !Static.cover.color
                    }}
                ></div>
                <div 
                    class={[
                        "order-first-cover__item",
                        "order-first-cover__item-blue",
                        Static.cover.color ? null : "order-first-cover__item_active"
                    ]}
                    onclick={()=>{
                        Static.cover.color = !Static.cover.color
                    }}
                ></div>
            </div>
        </div>
    )
}

const SecondStep = function({ covers }){
    return(
        <div class="">
            <div class="order__subtitle">
                <span class="order-steps__circle order-steps__circle_light text-dark">2</span>
                <span 
                    class="order__subtitle-text"
                
                >обложка</span>
            </div>
            <div class="order-covers">
                {
                    covers.map((item) => {
                        return(
                            <div 
                                class={["order-covers__item", Static.activeCover == item.id ? "order-covers__item-active" : null]}
                                onclick={()=>{
                                    Static.activeCover = item.id
                                    Static.cover.titleCover = item.title
                                    Static.cover.priceCover = item.price
                                    Static.cover.image = item.image
                                }}
                            >
                                <div class="order-covers__item-img">
                                    <img src={item.image} alt="Обложка диплома" />
                                </div>
                                <p class="order-covers__item-title">{item.title}</p>
                                <span class="order-covers__item-price">{item.price}</span>
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
        <div class="">
            <div class="order__subtitle">
                <span class="order-steps__circle order-steps__circle_light text-dark">3</span>
                <span 
                    class="order__subtitle-text"
                
                >добавь фирменную эмблему вуза</span>
            </div>
            <div class="order-logos mt-25">
                {
                    logos.map((item) => {
                        return(
                            <div 
                                class={["order-logos__item", 
                                Static.activeLogo == item.id ? "order-logos__item-active" : null]}
                                onclick={()=>{
                                    Static.activeLogo = item.id
                                    Static.cover.titleLogo = item.title
                                    Static.cover.priceLogo = item.price
                                }}
                            >
                                <div class="order-logos__item-img">
                                    {
                                        item.image ? <img src={item.image} alt="Обложка диплома" /> : null
                                    }
                                </div>
                                <p class="order-logos__item-title">{item.title}</p>
                                {
                                    item.price ? 
                                    <span class="order-logos__item-price">{item.price}</span> : null
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
        <div>
            <div class="order__subtitle">
                <span class="order-steps__circle order-steps__circle_light">
                    <img src={arrowDoneBlack} alt="КОПИКОМ | копицентр для студентов " />
                </span>
                <span 
                    class="order__subtitle-text"
                
                >твой выбор</span>
            </div>
            <div class="cover-finish mt-25">
                <div class="cover-finish-img">
                    <img src={Static.cover.image ? Static.cover.image : emptyCover} alt="КОПИКОМ | копицентр для студентов" />
                </div>
                <div>
                    <p>{Static.cover.color ? "Красная" : "Синяя"} обложка</p>
                    <p>{Static.cover.titleCover ? Static.cover.titleCover : "Без тиснения"}</p>
                    <p>{Static.cover.titleLogo ? Static.cover.titleLogo : "Без эмблемы"}</p>
                    <p>{Static.cover.priceCover + Static.cover.priceLogo}</p>
                </div>
            </div>
        </div>
    )
}


export default function () {
    return (
        <div class="order-item">
            <FirstStep />
            <SecondStep covers={ Static.coverColor ? redCovers : blueCovers } />
            <ThreeStep />
            <FinishStep />
            {/* { Static.activeColor && Static.activeLogo ? <FinishStep /> : null } */}
            {/* <button 
                class="btn btn_blue"
                onclick={()=>{ 
                  Static.currentStep++
                  console.log('=6f526a=', Static.currentStep)
                }}
            >Продолжить</button> */}
        </div>
    )
}