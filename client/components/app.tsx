import React, { useState, useEffect, Fragment } from 'react';

import Row from './row';
import DummyData from './dummyData';
import applyData from './applyData';
import Popover from '@material-ui/core/Popover';
import ConverRateChart from './converRateChart';
import ProgressBar from './progressBar';
import CalendarHeatmap from 'reactjs-calendar-heatmap';



// declare global {
//     namespace JSX {
//     interface Intrinsicpostfield {
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

    // Input state for new job application _______________
    const [newCompany, setNewCompany] = useState('');
    const [newPosition, setNewPosition] = useState('');
    const [newApplyDate, setNewApplyDate] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newLink, setNewLink] = useState('');
    const [newBaseSalary, setNewBaseSalary] = useState(0);

    // ___________________________________________________




  // useEffect( () => {
  //   console.log('yooo')
  //   fetch('/post/112471007958051224275/all')
  //   .then(data => data.json())
  //   .then(data => {
  //     setJobPostings(data)
  //   })
  // },[])


    const handleSubmit = () => {
      postSubmit()

      // Clears all input state _______________
      const inputSetters = [setNewCompany, setNewPosition, setNewApplyDate, setNewStatus, setNewBaseSalary]
      inputSetters.forEach(setter => setter(''))
    }

    const postSubmit = () => {
       /*
      Uncomment when we  have server set up.

      fetch('/addJob', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          newCompany,
          newPosition,
          newApplyDate,
          newStatus,
          newBaseSalary
        }),
      })
      .then(data => data.json())
      .then(newEntry => {
        const updatedPosting = [...jobPosting].push(newEntry);
      })
      */
    }

    const handleChange = (e) => {
      switch (e.target.placeholder) {
        case "Company":
          setNewCompany(e.target.value)
          break;
        case "Position":
          setNewPosition(e.target.value)
          break;
        case "Date":
          setNewApplyDate(e.target.value)
          break;
        case "Status":
          setNewStatus(e.target.value)
          break;
        case "Base Salary":
          setNewBaseSalary(e.target.value)
          break;
        case "PostingLink":
          setNewLink(e.target.value)
        case "Notes":
          console.log(e.target.value)
          setUpdatedNote(e.target.value)
          setUpdatedNote(e.target.value)
          break;
      }
    }


    const openModel = (index) => {
        const details = Object.values(jobPosting[index])
        const cleanedDetailed = details.filter((_,i) => i !== 8)
        const modelInfo = cleanedDetailed.map((el , i) => {
           return (
            <Fragment>
                <div className = "notes">{el}</div>
           </Fragment>
           )
        });

  

        const input = (
          <Fragment>
              <textarea type = "text" rows="25" cols="100" placeholder = "Communication Log" value = {jobPosting[index].notes} onChange={(e) => handleChange(e)}> </textarea>
          </Fragment>
          )

        modelInfo.push(input);

        
        setModelState(modelInfo);
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

/* dummy data */


    return (
      
      <Fragment>
        <h1 id="appTitle">StackTrack App</h1>
        <a href="/auth/google">Sign In with Google</a>
          <div className = "main-charts"> 
            <CalendarHeatmap
              className = "calendarHeatmap"
              data={applyData}
              color={'green'}
              overview={'year'}
              handler={print}>
            </CalendarHeatmap>
          </div>
            
          <div><ConverRateChart/></div>


        <div className = "row-container">
            <input className = "element" placeholder = "Company" onChange = {(e) => handleChange(e)} value = {newCompany}></input>
            <input className = "element" placeholder = "Position" onChange = {(e) => handleChange(e)} value = {newPosition}></input>
            <input className = "element" placeholder = "PostingLink" onChange = {(e) => handleChange(e)} value = {newLink}></input>
            <input className = "element" placeholder = "Date" onChange = {(e) => handleChange(e)} value = {newApplyDate}></input>
            <input className = "element" placeholder = "Status" onChange = {(e) => handleChange(e)} value = {newStatus}></input>
            <input className = "element" placeholder = "Base Salary" onChange = {(e) => handleChange(e)} value = {newBaseSalary}></input>
            <button className = "element" onClick = {() => handleSubmit()}> Add Application </button>
            {table}
        </div>


        <Popover
          open = {isPopoverOpen}
          onDoubleClick = {() => setPopover(false)}
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
      </Fragment>
    )
}

export default App;