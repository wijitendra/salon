import React, {useState} from 'react'

const ButtonGroup = () => {
    const [buttonItems1, setButtonItem1] = useState(['x1','x2','x3','x4','x5']);
    const [buttonItems2, setButtonItem2] = useState(['Oldest','Newest','Title desc','Title asc']);
    return (
        <div className='buttons_container'>
            <div className='first_wrapper RadioButtonGroup__buttons RadioButtonGroup__buttons_scondary'>
                {
                    buttonItems1.map((currVal,index,arr)=>{
                        return (
                            <a href="" key={index}>{currVal}</a>
                        )
                    })
                }
            </div>
            <div className='second_wrapper RadioButtonGroup__buttons'>
                {
                    buttonItems2.map((currVal,index,arr)=>{
                        return (
                            <a href="" key={index}>{currVal}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ButtonGroup
