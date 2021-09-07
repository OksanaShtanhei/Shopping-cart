import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Component from './Component'

const App = () => {
    const columns = [0,1,2,3,4,5,6,7,8,9]
    const item = {
        title: 'Ginger the Cat',
        price: 123
    }
    const [choosed, setChoosed] = useState([])
    const [sum, setSum] = useState(0)
    const [length, setLength] = useState(0)
    const [flag, setFlag] = useState(false)

    const chooseItem = () =>{
        setChoosed([...choosed, item.price])   
    }
    useEffect(() => {
        setLength(() => {
            return choosed.length
        })
        if(choosed.length == 1){
            setSum(choosed)
        }
        else if(choosed.length > 1){
            setSum(choosed.reduce((a, b) => {
                return a + b
            }))
        }
        else if(choosed.length == 0){
            setSum(0)
        }  
    }, [choosed])

    const showCard = () => {
        setFlag(!flag)  
    }

    const deleteItem = (e) => {
        const newArr = choosed.filter((el, index) => index !== Number(e.target.parentNode.id))
        setChoosed(newArr)
    }
    return (
        <>
            <Navbar length={length}
                    showCard={showCard} 
                    flag={flag} />
            <div className="container-fluid row row-cols-4 mt-3">
                {columns.map(el => {
                    return <Component key={el} 
                                      item={item} 
                                      chooseItem={chooseItem} 
                                      choosed={choosed} 
                                      sum={sum} 
                                      flag={flag} 
                                      deleteItem={deleteItem}
                                       />
                })} 
            </div>
        </>
    )
}
export default App