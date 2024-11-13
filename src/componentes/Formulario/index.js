import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
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

    const aoSalvar = (evento) => { 
        evento.preventDefault()
        console.log('Form foi submetido')
    }
    return (
        <section className = "formulario">
            <form onSubmit={aoSalvar}>
                <h2>PREENCHA EM CAMPOS PARA CRIAR O CARD</h2>
                <CampoTexto obrigatorio = {true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio = {true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio = {true} label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario