import React from 'react';
import Popover from '@material-ui/core/Popover';


const Row = ({company, position, status, date, salary, contact, reference, link, notes, jobID, openModel}) => {
    return (
      <div className = "row-container"> 
      <button className = "elements" onClick = {() => openModel(jobID) }> {jobID} </button>
      <div className = "elements" onClick = {() => window.open(link)}> {company} </div>
      <div className = "elements"> {position} </div>
      <div className = "elements"> {date.substring(0, 10)} </div>
      <div className = "elements"> {status} </div>
      <div className = "elements"> {salary} </div>
      
      {/* <div className = "elements"> {contact} </div>{} */}
      {/* <div className = "elements"> {notes} </div> */}
    </div>
    )
    

}

export default Row; 