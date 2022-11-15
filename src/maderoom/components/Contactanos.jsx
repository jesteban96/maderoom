import { Fragment, useState } from "react";
import StepWizard from "react-step-wizard";
import { Step1, Step2, Step3 } from "./wizard";

export const Contactanos = () => {

	const [state, setState] = useState({demo:true});

	const setInstance = SW => setState({
        ...state,
        SW,
    });
    
    const { SW, demo } = state;
    console.log({SW})

    return (
        <>
            <div className="animate__fadeInRight">
                
                <StepWizard 
                    initialStep={1}
                    instance={setInstance}
                >

                    <Step1/>
                    <Step2/>
                    <Step3/>

                </StepWizard>
                { (demo && SW) && <InstanceDemo SW={SW} /> }
            </div>
        </>
    )
}
export default Contactanos;

/** Demo of using instance */
const InstanceDemo = ({ SW }) => (
    <Fragment>

        <button className={'btn btn-secondary'} onClick={SW.firstStep}>First Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={SW.previousStep}>Previous Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={SW.nextStep}>Next Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={SW.lastStep}>Last Step</button>
        &nbsp;
       
    </Fragment>
);
