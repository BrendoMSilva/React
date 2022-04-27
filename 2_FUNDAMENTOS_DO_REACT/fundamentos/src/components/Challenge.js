const Challenge = () => {


    const number1 = 2;
    const number2 = 4;

    return (
        <div>
           <p>number1: {number1}</p>
           <p>number2: {number2}</p>
           <button onClick={() => console.log(number1 + number2)}>Click pra somar</button>
        </div>
    )
}

export default Challenge;