import { Fragment } from "react"
import { useCounter } from "../../../hooks/useCounter"

export const InstanceDemo = ({ SW }) => {

    const {counter, increment, decrement} = useCounter(1);

    const getNextStep = () => {
        SW.nextStep();
        increment();
    }

    const getPreviusStep = () =>{
        SW.previousStep();
        decrement();
    }

    return (

        <>
            <Fragment>
                
                {(counter!=SW.props.initialStep) && <button className={'btn btn-secondary'} onClick={getPreviusStep}>Previous Step</button>}
                {(counter !=SW.props.children.length) && <button className={'btn btn-secondary'} onClick={getNextStep}>Next Step</button>}
        
            </Fragment>
        </>
    )
}
