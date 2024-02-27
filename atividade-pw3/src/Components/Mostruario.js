function Mostruario({imagem, legenda}){
    return (
        <div className="imagem-amostra">
            <img src = {imagem}  Width={50}  Alt = {legenda} />
            <img src = {imagem}  Width={50} Alt = {legenda} />
        </div>
    );
}

export default Mostruario;