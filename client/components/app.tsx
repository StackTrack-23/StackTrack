import React, { useState, useEffect, Fragment } from 'react';

import Row from './row';
import DummyData from './dummyData';
import applyData from './applyData';
import Popover from '@material-ui/core/Popover';
import ConverRateChart from './converRateChart';
import ProgressBar from './progressBar';
import CalendarHeatmap from 'reactjs-calendar-heatmap';


const App = () => {
    const [jobPosting, setJobPostings] = useState([])
    const [isPopoverOpen, setPopover] = useState(false);
    const [modelState, setModelState] = useState();

    // Input state for new job application _______________
    const [newCompany, setNewCompany] = useState('');
    const [newPosition, setNewPosition] = useState('');
    const [newApplyDate, setNewApplyDate] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newLink, setNewLink] = useState('');
    const [newContact, setNewContact] = useState('');
    const [newReference, setNewReference] = useState('');
    const [newNote, setNewNote] = useState('');
    const [newBaseSalary, setNewBaseSalary] = useState();

    // ___________________________________________________




  useEffect( () => {
    fetch('/post/101339886264631932984/all')
    .then(data => data.json())
    .then(data => {
      console.log(data)
      setJobPostings(data)
    })
  },[])




    const handleSubmit = () => {
      postSubmit()

      // Clears all input state _______________
      const inputSetters = [
        setNewCompany, setNewPosition, setNewApplyDate, setNewStatus,
        setNewBaseSalary, setNewNote, setNewReference, setNewContact, setNewLink
        ]


      inputSetters.forEach(setter => setter(''))
    }

    const postSubmit = () => {
      const newPost = {}
      newPost.company = newCompany
      newPost.position = newPosition
      newPost.date = newApplyDate
      newPost.status = newStatus
      newPost.salary = newBaseSalary
      newPost.contact = newContact
      newPost.reference = newReference
      newPost.link = newLink
      newPost.notes = newNote


      fetch('/post/101339886264631932984', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(newPost),
      })
      .then(data => data.json())
      .then(res => {
        const oldData = jobPosting;
        const newData = [...jobPosting];
        newData.push(newPost)
        setJobPostings(newData)
      })
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
          setNewApplyDate((e.target.value).slice(0,9))
          break;
        case "Status":
          setNewStatus(e.target.value)
          break;
        case "Salary":
          setNewBaseSalary(e.target.value)
          break;
        case "Contact":
          setNewContact(e.target.value)
          break;
        case "Link":
          setNewLink(e.target.value)
          break;
        case "Note":
          setNewNote(e.target.value)
          break;
      }
    }


    const openModel = (index) => {
        const details = Object.values(jobPosting[index])
        const cleanedDetailed = details.filter((_,i) => i !== 3)
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
            date = {opportunity.date_apply}
            status = {opportunity.status}
            salary = {opportunity.salary}
            contact = {opportunity.contact}
            reference = {opportunity.reference}
            link = {opportunity.link}
            notes = {opportunity.notes}
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
            <input className = "element" placeholder = "Note" onChange = {(e) => handleChange(e)} value = {newNote}></input>
            <input className = "element" placeholder = "Company" onChange = {(e) => handleChange(e)} value = {newCompany}></input>
            <input className = "element" placeholder = "Position" onChange = {(e) => handleChange(e)} value = {newPosition}></input>
            <input className = "element" placeholder = "Date" onChange = {(e) => handleChange(e)} value = {newApplyDate}></input>
            <input className = "element" placeholder = "Status" onChange = {(e) => handleChange(e)} value = {newStatus}></input>
            <input className = "element" placeholder = "Salary" onChange = {(e) => handleChange(e)} value = {newBaseSalary}></input>
            <input className = "element" placeholder = "Link" onChange = {(e) => handleChange(e)} value = {newLink}></input>
            <input className = "element" placeholder = "Contact" onChange = {(e) => handleChange(e)} value = {newContact}></input>
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