function Evento({numero}) {

    function meuEvento() {
        console.log(`Opa, ativou! ${numero}`)
    }

    return (
        <div>
            <p> Clique aqui</p>
            <button onClick={meuEvento}> Ativar</button>
        </div>

    )
}

export default Evento