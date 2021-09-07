import React from 'react'
import {IoMdClose} from 'react-icons/io'

const Shopcard = ({item, choosed, sum, deleteItem}) => {    
    return (
        <div className="position-absolute top-1 end-0" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Shopping Card</h5> 
                    <ul className="list-group ">
                        {choosed.map((el, index) => {
                            return (
                                    <li className="list-group-item d-flex justify-content-between" key={index} id={index}>
                                        <p>{item.title}</p>
                                        <p id={index} onClick={deleteItem}>{el} $ <IoMdClose /></p>
                                    </li> 
                                )
                        })}    
                    </ul>
                    <div className="d-flex justify-content-end fs-3">{sum} $</div>
                </div>
            </div>
        </div> 
    )
}
export default Shopcard