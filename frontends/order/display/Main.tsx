import { Cemjsx, Func, Static } from "cemjs-all"
import StepFirst from "./StepFirst."
import StepSecond from "./StepSecond"
import StepThree from "./StepThree"


export default function () {
    return (
        <section class="order-line">

            {/* {
                Static.localStep ? 
                Static.localStep == 1 ? <StepFirst /> :
                Static.localStep == 2 ? <StepSecond /> :
                Static.localStep == 3 ? <StepThree /> : <p>Loading...</p> 
                :
                Static.currentStep == 1 ? <StepFirst /> :
                Static.currentStep == 2 ? <StepSecond /> :
                Static.currentStep == 3 ? <StepThree /> : <p>Loading...</p>
            } */}
            
            {
                Static.currentStep == 1 ? <StepFirst /> :
                Static.currentStep == 2 ? <StepSecond /> :
                Static.currentStep == 3 ? <StepThree /> : <p>Loading...</p>
            }
        </section>
    )
}