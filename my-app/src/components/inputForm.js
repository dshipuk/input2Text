import React from "react";

const inputForm = (props) => {
    const { handleChanges, text } = props


    return (
        <div>
            <h1>{text}</h1>
            <label>Enter Text:
                <input 
                    type="text"
                    name="textInput"
                    value={text}
                    onChange={handleChanges}
                />
            </label>
        </div>
    )
}

export default inputForm;