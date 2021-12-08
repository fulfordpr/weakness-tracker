import React, { useState } from 'react';

function NewWeakness(props){
    const [newWeakness, setNewWeakness] = useState('');

    const addWeakness = () =>{
        const newWeaknessObject = ({title: newWeakness, id: props.weaknessLength + 1})
        props.addWeaknessHandler(newWeaknessObject)
    }
    return(
        <div>
            <input type="text" onChange={(e)=>setNewWeakness(e.target.value)}/>
            <button onClick={addWeakness}>+</button>
        </div>
    )
}

export default NewWeakness;