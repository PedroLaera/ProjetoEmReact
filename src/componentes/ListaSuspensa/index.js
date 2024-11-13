import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    
    console.log(props.item)
    
    return (
        <div class='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
        
    )
}

export default ListaSuspensa;