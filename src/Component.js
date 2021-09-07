import React from 'react'
import cat from './img/cat.jpg'
import Shopcard from './Shopcard'

const Component = ({ item, chooseItem, choosed, sum, flag, deleteItem }) => {
    return (
        <>
            <div className="card" >
                <img className="card-img-top " src={cat} alt="Card image cap" />
                <div className="card-body d-grid">
                    <h5 className="card-title">{item.title}</h5>
                    <blockquote className="blockquote fs-6">
                        <p>How we behave toward cats here below determines our status in heaven...</p>
                        <footer className="blockquote-footer fst-italic "><small>Somebody famous</small></footer>
                    </blockquote>
                    <button className="btn btn-dark btn-block" onClick={chooseItem}>Price {item.price} $</button>
                </div>
            </div>
            {flag && <Shopcard item={item}
                  choosed={choosed} 
                  sum={sum} 
                  deleteItem={deleteItem} />}
        </>
    )
}
export default Component