import React, { useState } from 'react'


export const Nav = ({sentToParent , user , sentCheckStateToParent}) => {
    const [inputValue , setInputValue] = useState('')
    const [filtredMostStared , setFiltredMostStared] = useState(false)

    const multipeChange = (ev) => {
        // controll the input  and the parent input changes   
        const value = ev.target.value;
        /* the value const is used to garantue that the inputValue state and the parent input state w
        will recieve the latest changes due to the asynchrs behave of useState */  
        setInputValue(value);
        sentToParent(value); 
    }

    function handleChecked (e) {
        // controll the checkState and the parent checkStatus 
        const chekState = e.target.checked ;
        setFiltredMostStared(chekState) ;
        sentCheckStateToParent(chekState)
    }



    return (
        <div className='flex flex-col sm:flex-row gap-6 sm:justify-between items-center w-full'>
            <form action="">
                <input 
                    type='checkbox'
                    checked={filtredMostStared}
                    onChange={handleChecked} 
                />
                <label htmlFor="">List most stared repos only</label>
            </form>
                <input
                    value={inputValue}
                    onChange={(e)=> multipeChange(e)}  
                    type="text" 
                    className='px-4 order-[-1] sm:order-[0] sm:w-[300px] py-3 w-64 md:w-[366px] lg:w-[580px] text-2xl' 
                    placeholder='Enter userName'
                />
            <div className='flex items-center justify-center gap-4'>
                <img src={user.avatar} alt="" className='h-8 w-8 rounded-full' />
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-xl font-bold'>{user.userName}</p>
                    <p className='text xl'>jhon65@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
