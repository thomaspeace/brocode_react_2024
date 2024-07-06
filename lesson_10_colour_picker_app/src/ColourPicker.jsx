import { useState } from "react";

const ColourPicker = () => {

    const [colour, setColour] = useState("#FFFFFF");

    const handleColourChange = (e) => {
        setColour(e.target.value)
    }

    return(
        <div className="colour-picker-container">
            <h1>Colour Picker</h1>
            <div className="colour-display" style={{backgroundColor: colour}}>
                <p>Selected Colour: {colour}</p>
            </div>
            <label>Select a colour:</label>
            <input type="color" value={colour} onChange={handleColourChange} />
        </div>
    )


}

export default ColourPicker;