import { Fragment, useState } from "react";
import StepWizard from "react-step-wizard";
import { Step1, Step2, Step3 } from "./wizard";

export const Contactanos = () => {

	const [state, setState] = useState({demo:true});

	const onStepChange = (stats) => {
        // console.log(stats);
    };

	const updateForm = (key, value) => {
        const { form } = state;

        form[key] = value;
        setState({
            ...state,
            form,
        });
    };

	const setInstance = SW => setState({
        ...state,
        SW,
    });

    const { SW, demo } = state;

    return (
        <>
			<StepWizard 
				initialStep={1}
				onStepChange={onStepChange}
				instance={setInstance}
			>

				<Step1/>
				<Step2/>
				<Step3/>

			</StepWizard>
			{ (demo && SW) && <InstanceDemo SW={SW} /> }
        </>
    )
}
export default Contactanos;

/** Demo of using instance */
const InstanceDemo = ({ SW }) => (
    <Fragment>
        
        <button className={'btn btn-secondary'} onClick={SW.previousStep}>Previous Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={SW.nextStep}>Next Step</button>
        &nbsp;
        
    </Fragment>
);
