const Challenge = () => {


    const number1 = 2;
    const number2 = 4;
    console.log(number1, number2)

    return (
        <div>
            <div>
                <button onClick={() => console.log(number1 + number2)}>click para somar</button>
            </div>
        </div>
    )
}

export default Challenge;