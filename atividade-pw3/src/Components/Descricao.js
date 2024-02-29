function Descricao({titulo, descricao, autor, tradutor, formato, avaliacoes, link}){
    return (
        <div className="descricao">
            <h2>{titulo}</h2>
            <div className="container">
                <div className="informacoes-cima">
                        <p >{autor}</p>
                        <p>{tradutor}</p>
                        <p id="info">{formato}</p>
                </div>
                <div className="informacoes-baixo">
                        <p id="info">{avaliacoes}</p>
                        <p id="info">{link}</p>
                </div>
            </div>
            <p>{descricao}</p>
        </div>
    );
}

export default Descricao;