function Informacoes({autor, tradutor, formato, avaliacoes, link}){
    return (
        <div className="informacoes">
            <p>{autor}</p>
            <p>{tradutor}</p>
            <p>{formato}</p>
            <p>{avaliacoes}</p>
            <p>{link}</p>
        </div>
    );
}

export default Informacoes;