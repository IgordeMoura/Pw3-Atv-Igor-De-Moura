function Header({logo, legenda}){
    return (
        <div className="header">
            <img src = {logo} Width={192} height={73} Alt = {legenda} />
                <p>teste</p>
        </div>
    );
}

export default Header;