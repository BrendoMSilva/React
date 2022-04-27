const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);

        console.log("Voce clicou em mim!");
    }

    const renderSomething = (x) => {
        if(x) {
            return <h2>Redenrizou isso!</h2>
        } else {
            return <h2>tbm rederizou isso</h2>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click em mim!</button>
                {/*caso simples vc pode utilizar dessa forma*/}
                <button onClick={() => console.log("clicado!")}>click aqui!</button>
                {/*e permitodo dessa forma, mas n podemos fazer assim, logica com html é ERRADO*/}
                <button onClick={() => {
                    if(true) {
                        console.log("clicou novamente!");
                    }
                }}>click novamente</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events;