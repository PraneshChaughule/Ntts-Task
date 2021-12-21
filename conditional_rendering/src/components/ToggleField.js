import React, { useState } from 'react'
import './ToggleField.css'

function ToggleField() {
    const [condition, setCondition] = useState(false)

    const handleToggle = () => {
        condition ? setCondition(false) : setCondition(true);
    }
    return (
        <div>
            <label class="switch">
                <input type="checkbox" onClick={handleToggle} />
                <span class="slider round"></span>
            </label>
            <div>
                {condition ? <span>ON</span> : <span>OFF</span>}
            </div>
        </div>
    )
}

export default ToggleField
