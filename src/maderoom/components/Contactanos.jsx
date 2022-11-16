import { Fragment, useState } from "react";
import StepWizard from "react-step-wizard";
import { InstanceDemo, Step1, Step2, Step3 } from "./wizard";

export const Contactanos = () => {

	const [state, setState] = useState({demo:true});

	const setInstance = SW => setState({
        ...state,
        SW,
    });
    
    const { SW, demo } = state;

    return (
        <>
            <div className="animate__fadeInRight">
                
                <StepWizard 
                    initialStep={1}
                    instance={setInstance}
                >

                    <Step1 name="firts"/>
                    <Step2/>
                    <Step3/>

                </StepWizard>
                { (demo && SW) && <InstanceDemo SW={SW}/> }
            </div>
        </>
    )
}
export default Contactanos;
