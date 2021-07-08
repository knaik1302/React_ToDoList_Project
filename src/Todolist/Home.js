import React, { useState } from 'react'
import List from './List';
import Navbar from './Navbar';
import Form from './Form';

const Home = () => {
    const[todolist,setTodolist]=useState("");
    const [todoallArray, setTodoallArray] = useState([]);

    const submitform=(e)=>{
        if(todolist){
            e.preventDefault();
            const newEntry={todolist};
            setTodoallArray([...todoallArray, newEntry]);
    
            setTodolist("");
        }
        else{
            e.preventDefault();
            alert("please fill the details");
        }
    }

    const deleteItems = (id) =>{
        const newarray = todoallArray.filter((curElm, index) =>{
            return index !== id;
        });
        setTodoallArray(newarray);
    }
    if(todoallArray.length>0){
        return (
            <div>
                <div>{<Navbar/>}</div>
                <br />
                 {<Form
                  onsubform={submitform}
                  value={todolist}
                  onSetlist={setTodolist}
                 />}
                <br/>
                <div className="container">
                    {
                        todoallArray.map((curElm, index)=>{
                            return <List 
                            key={index} 
                            id={index} 
                            itemval={curElm.todolist}
                            onSelect={deleteItems}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <div>{<Navbar/>}</div>
                <br />
                 {<Form
                  onsubform={submitform}
                  value={todolist}
                  onSetlist={setTodolist}
                 />}
                <br/>
                <div className="container">
                    <h4>Your Todolist is empty...</h4>
                </div>
            </div>
        )
    }
    
}

export default Home
