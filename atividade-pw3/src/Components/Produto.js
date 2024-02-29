function Produto({imagem, legenda}){
    return (
        <div className="produto">
            <img src = {imagem}  id="imagem" Alt = {legenda} />
        </div>
    );
}

export default Produto;