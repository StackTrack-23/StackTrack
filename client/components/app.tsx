import React, { useState, useEffect, Fragment } from 'react';
import Row from './row'
import DummyData from './dummyData'
import Popover from '@material-ui/core/Popover';

// declare global {
//     namespace JSX {
//     interface IntrinsicElements {
//         // button: any;
//         // img: any;
//         input: any;
//         div: any;
//         h1: any;
//         h3: any;
//         p: any;
//         span: any;
//         form: any;
//         label: any;
//         a: any;
// }
//   }
// }
  
const App = () => {
    const [jobPosting, setJobPostings] = useState(DummyData)
    const [isPopoverOpen, setPopover] = useState(false);
    const [modelState, setModelState] = useState();

    const openModel = (index) => {
        const details = Object.values(jobPosting[index]).map((el) => {
           return (
            <Fragment>
                <div className = "notes">{el}</div>
           </Fragment>
           )
           
        });


        const input = (
            <Fragment>
                <input type = "text" placeholder = "Log Communication Here "></input>
            </Fragment>
        )

        details.push(input);
        
        setModelState(details);
        setPopover(true);
    }
    
    const table = jobPosting.map((opportunity: Object, i: Number) => {
        return (<Row 
            key = { `${opportunity.company}-${i}`}
            jobID = {i} 
            company = {opportunity.company}
            position = {opportunity.position}
            date = {opportunity.date}
            status = {opportunity.status}
            salary = {opportunity.salary}
            contact = {opportunity.contact}
            reference = {opportunity.reference}
            link = {opportunity.link}
            notes = {opportunity.notes}
            techStack = {opportunity.techStack}
            openModel = {openModel}
            />)
})

    return (
        <Fragment>
        <Popover
          open = {isPopoverOpen} 
          onClick = {()=> {}}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          PaperProps={{
            style: { width: '70%' },
          }}
        >
        <div className = "noteModelState">
          {modelState}
        </div>
        </Popover>



        <div className = "row-container">
            {table}
        </div>
        </Fragment>
    )
}

export default App;