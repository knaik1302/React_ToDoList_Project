import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";

const List = (props) => {
    return(
        <div key={props.id} className="showDataStyle">
            <div className="deleteicon">
            <BsFillTrashFill 
            onClick={()=>{
                props.onSelect(props.id);
            }}
            />
            </div>
            <div className="listscenter">
                    {props.itemval}
            </div>        
      </div>
      );
};

export default List
