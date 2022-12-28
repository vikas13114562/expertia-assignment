import React, {useState} from 'react'
import './dashboard.css'

export default function Dashboard() {

    const [task, setTask] = useState("")
    const [taskArr, setTaskArr] = useState([])
    const [err, setErr] = useState("")

    function handleArr() {
        if(taskArr.length < 5) {
            setTaskArr([...taskArr,task])
            
        }
        else{
            setErr("Daily limit exceeded")
        }
        setTask("")
       
    }
  return (
    <main>
        <div className='main-container'>
        <p>Hello</p>
        <h2>Name</h2>
        <p>Good to see you here !</p>
        <h4 className='task-heading'>Task for the day</h4>
        <div className='task-container'>
            <ul>
                {taskArr.map((ele,ind) =>{
                    return(
                        <li key={ind}>{ele}</li>
                    )
                })}
            </ul>
            <p className='err-text'>{err}</p>
        </div>
        <div>
            <input
                type="text"
                placeholder="Eg. Need to finish my assignment"
                onChange={(e)=>{setTask(e.target.value)}}
                name="task"
                value={task}
                />
            <button className='add-btn' onClick={handleArr}>Add New Task</button>
            <h4 className='logout-text'>Logout</h4>
        </div>
    </div>
    </main>
  )
}
