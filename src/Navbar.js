import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {FaRegTimesCircle} from 'react-icons/fa'

const Navbar = ({length, showCard, flag}) => {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-dark bg-dark text-light p-2">
                    <h2>Cat Shop</h2>
                    <div className="d-flex justify-content-end">
                        <div className="num">
                            <p className="border-top border-bottom mt-3">{length}</p>
                        </div>
                        <a href="#" className="px-4 py-2 fs-4 text-light d-inline" onMouseEnter={showCard}>
                            {flag ? <FaRegTimesCircle /> : <FaShoppingCart />}
                        </a>
                    </div>
                    
                    
                </nav> 
            </div>
        </>
    )
}
export default Navbar