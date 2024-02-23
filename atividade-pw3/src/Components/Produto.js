function Produto({imagem, legenda}){
    return (
        <div className="produto">
            <img src = {imagem}  Width={250} Alt = {legenda} />
        </div>
    );
}

export default Produto;