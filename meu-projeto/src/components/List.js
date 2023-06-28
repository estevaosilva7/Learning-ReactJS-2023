import Item from "./Item"

function List() {
    return(
        <>
        <h1> Minha Lista</h1>
        <ul>
            <Item marca="Honda" ano_lancamento={1970} />
            <Item marca="Yamaha" ano_lancamento={1910}/>
            <Item/>
          
        </ul>
        </>
    )
}

export default List