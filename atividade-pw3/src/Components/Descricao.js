import Informacoes from './Components/Informacoes';
function Descricao({titulo, descricao}){
    return (
        <div className="descricao">
            <h1>{titulo}</h1>
            {/* <Informacoes
                autor='teste'
                tradutor='teste'
                formato='teste'
                avaliacoes='teste'
                link='teste'
            /> */}
            <p>{descricao}</p>
        </div>
    );
}

export default Descricao;