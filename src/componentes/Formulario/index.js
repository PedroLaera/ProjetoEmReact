import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Back-end',
        'Data Science',
        'Devops',
        'Ux Desing',
        'Mobile',
        'Inovação e Gestão',
    ]

    return (
        <section className = "formulario">
            <form>
                <h2>PREENCHA EM CAMPOS VAZIOS</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                
            </form>
        </section>
    )
}

export default Formulario