const Button = () => {

    const handleClick = () => {
        console.log("Ouch!");
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`);
    }

    let count = 0
    const handleClick3 = (name) => {
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }


    const handleClick4 = (e) => {
        console.log(e);
        e.target.textContent = "OUCH!"
    }

    return(
        <>
            <button onClick={handleClick}>Click me 1!</button>

            {/* if we dont have the arrow function, handleClick2 will be called right away */}
            <button onClick={() => handleClick2("Bro")}>Click me 2!</button>

            {/* if we dont have the arrow function, handleClick3 will be called right away */}
            <button onClick={() => handleClick3("Tom")}>Click me 3!</button>


            <button onClick={(e) => handleClick4(e)}>Click me event</button>

        </>
    )

}

export default Button