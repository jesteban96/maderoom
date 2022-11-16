import { Fragment } from "react"
import { useCounter } from "../../../hooks/useCounter"

export const InstanceDemo = ({ SW }) => {

    const {counter, increment, decrement, reset} = useCounter(1);

    // console.log(SW.state.activeStep);

    const getNextStep = () => {
        SW.nextStep();
        increment();
    }

    const getPreviusStep = () =>{
        SW.previousStep();
        decrement();
    }

    console.log({SW})



    return (

        <>
            <Fragment>
                
                {/* <button className={'btn btn-secondary'} onClick={SW.firstStep}>First Step</button>
                &nbsp; */}
                {(counter!=1) && <button className={'btn btn-secondary'} onClick={getPreviusStep}>Previous Step</button>}
                {(counter !=3) && <button className={'btn btn-secondary'} onClick={getNextStep}>Next Step</button>}
                
                
            
                {/* <button className={'btn btn-secondary'} onClick={SW.lastStep}>Last Step</button>
                &nbsp; */}
        
            </Fragment>
        </>
    )
}
