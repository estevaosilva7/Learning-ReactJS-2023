function Pessoa({nome, idade, profissao, imagem}) {
    return(
        <div>
            <h1> Nome:{nome} </h1>
            <p> Idade:{idade} </p>
            <p> Profissão {profissao} </p>
            <img src={imagem} alt={nome} />
        </div>
    )
}

export default Pessoa