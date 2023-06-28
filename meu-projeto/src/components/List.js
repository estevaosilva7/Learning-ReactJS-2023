import Item from "./Item"

function List() {
    return(
        <>
        <h1> Minha Lista</h1>
        <ul>
            <Item marca="Honda"/>
            <Item marca="Yamaha"/>
            <Item marca="Suzuki"/>
        </ul>
        </>
    )
}

export default List