function Descricao({titulo, descricao, autor, tradutor, formato, avaliacoes, link}){
    return (
        <div className="descricao">
            <h1>{titulo}</h1>
            <div className="container">
                <div className="informacoes-cima">
                        <p>{autor}</p>
                        <p>{tradutor}</p>
                        <p>{formato}</p>
                </div>
                <div className="informacoes-baixo">
                        <p>{avaliacoes}</p>
                        <p>{link}</p>
                </div>
            </div>
            <p>{descricao}</p>
        </div>
    );
}

export default Descricao;