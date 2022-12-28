import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from './data/user-context'
import { useNavigate } from "react-router-dom";
import './dashboard.css'

export default function Dashboard() {

    const navigate = useNavigate()

    const {fname, date} = useContext(UserContext)
    

    const [task, setTask] = useState("")
    const [taskArr, setTaskArr] = useState([])
    const [err, setErr] = useState("")
    const [text, setText] = useState("")

    useEffect(() =>{
        if(date){
            let d = date.getDate();
        
            if(d%10 === 1) setText("st ")
            if(d%10 === 2) setText("nd ")
            if(d%10 === 3) setText("rd ")
            else setText("th ")
        }
        

    },[date])

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
        <h2>{fname}</h2>
        <p>Good to see you here !</p>
        <h4 className='task-heading'>Tasks for {date !==""? date.getDate():""}{text}
          {date !==""? date.toLocaleString('en-US', {month: 'short'}):""}, {date !==""? date.getFullYear():""}:</h4>
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
            <h4 className='logout-text' onClick={() => {navigate('/login')}}>Logout</h4>
        </div>
    </div>
    </main>
  )
}
