import logo from '../../Imagens/logo.png'

function Header (){

    return (
        
        <header>
            <div className="container-box">
                <img src={logo} alt="logo" className="logo"/>
                    <nav>
                        <ul>
                            <li>
                                <a href="/Programação/Visao Usuario/Bruna/cadastrar/cadastro.html" > Cadastrar </a>
                            </li>

                            <li>
                                <a href="/Programação/Visao Usuario/Camila/login/Login.html" className="login">Login</a>
                            </li>

                        </ul>
                    </nav>
            </div>
        </header>
    );
    
}

export default Header