import './CampoTexto.css'

const aoDigitado = (eventos) => {

}
const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onCharge={aoDigitado} required = {props.obrigatorio} placeholder = {props.placeholder}/>
        </div>
    )
}

export default CampoTexto;