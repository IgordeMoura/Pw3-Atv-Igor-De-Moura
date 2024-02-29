function Header({logo, legenda}){
    return (
        <div className="header">
            <img src = {logo} className="logo" Alt = {legenda} />
            <div className="local-entrega">
                <p>A Entrega Será Feita Em Embu 4002-8922</p>
                <h1>Atualizar Local</h1>
            </div>
            <form className="barra-pesquisa">
                <label className="barra-pesquisa">
                    <input type="text" />
                </label>
            </form>
            <div className="login">
                <p>Olá, Faça seu Login</p>
                <p id="login">Contas e Listas</p>
            </div>
        </div>
    );
}

export default Header;