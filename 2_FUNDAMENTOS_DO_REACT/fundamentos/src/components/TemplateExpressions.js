const TemplateExpressions = () => {

    const name = "Brendo";
    const perfil = {
        age: 20,
        job: "Desenvolvedor."
    }

    return  (
        <div>
            <h1>Ola, {name}!</h1>
            <p>voce tem {perfil.age} anos, e sua profissão é {perfil.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )

}

export default TemplateExpressions;