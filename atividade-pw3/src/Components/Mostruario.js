function Mostruario({imagemAmostra1, imagemAmostra2, legendaMostruario}){
    return (
        <div className="imagem-amostra">
            <img src = {imagemAmostra1}  Width={50}  Alt = {legendaMostruario} />
            <img src = {imagemAmostra2}  Width={50} Alt = {legendaMostruario} />
        </div>
    );
}

export default Mostruario;