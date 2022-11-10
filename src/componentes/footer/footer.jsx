import insta from '../../Imagens/insta.png'
import face from '../../Imagens/facebook.png'

function Footer (){

    return (
        <footer>

        <div className="footer-container">
            <div className="images">
                <a href="https://www.facebook.com/GLUB-ofc-108608445282951/" className="img-instagram"> <img src={face} alt="facebook"/> </a>
                <a href="https://www.instagram.com/gerenciamentoglub/" className="img-facebook"> <img src={insta} alt="instagram"/> </a>
            </div>
                <p>Copyright © 2022 Glub. All rights reserved.</p>

        </div>
        </footer>
    );
    
}

export default Footer