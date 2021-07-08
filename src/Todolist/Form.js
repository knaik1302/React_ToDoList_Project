import React from 'react'
import { FiEdit2 } from "react-icons/fi";

const Form = (props) => {
    return (
        <div>
            <form action="" className="container" onSubmit={props.onsubform}>
                <div >
                    <div>
                        <input type="todolist" name="todolist" id="todolist" placeholder="Add your list" autoComplete="off"
                        value={props.value} onChange={(e) => props.onSetlist(e.target.value)}/>
                        <button className="btnInner"><span><FiEdit2/></span></button>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default Form
