import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface JobProps {
  onClick: any
}

function JobStart({ onClick }: JobProps) {
  return (
    <button onClick={onClick}> 출근 </button>
  )
}

function JobEnd({ onClick }: JobProps) {
  return (
    <button onClick={onClick}> 퇴근 </button>
  )
}


interface Time {
  jobStart : Date | null;
  jobEnd: Date | null; 
}

function App() {
  const [ job, setJob ] = useState<boolean>(false);
  const [ time, setTime ] = useState<Time>({
    jobStart: null,
    jobEnd: null
  });

  const checkJob = () => {
    setJob(!job);
    if(!job) {
      setTime(Object.assign({}, time, {
        jobStart: Date.now()
      }));
    } else {
      setTime(Object.assign({}, time, {
        jobEnd: Date.now()
      }));
    }

  }

  return (
    <div className="App">
      { time.jobStart?  <div> 출근 시간: { time.jobStart } </div> : null }
      { time.jobEnd? <div> 퇴근 시간: { time.jobEnd } </div> : null }
      { time.jobStart && time.jobEnd? <div> { (Number(time.jobEnd) - Number(time.jobStart))/(1000 * 60 * 60) % 24 } </div>  : null }

      {
        !job? 
        <JobStart onClick={checkJob} /> 
        : <JobEnd onClick={checkJob} />
      }
      
    </div>
  );
}

export default App;
