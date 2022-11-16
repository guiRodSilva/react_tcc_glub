
import './App.css';
import '../../footer/footer.css'
import '../../header/header.css'

import principal from '../../../Imagens/imagem-principal.png'
import lixao from '../../../Imagens/lixao-redonda.png'
import praia from '../../../Imagens/praia-redondo.png'
import praca from '../../../Imagens/praca-redondo.png'

import Footer from '../../footer/footer'
import Header from '../../header/header'


function App() {
  return (
    <div className="App">
    <Header/>   
    <section>
        <div className="presentation-box">
            <div className="text-presentation">
                <h1> Gerenciamento de lixo urbano brasileiro</h1>
                <h3>Mais que sua obrigação, reciclagem é necessidade.</h3>
            
            </div>
            <img src={principal} alt="main-image" className="main-image"/>
        </div>
    </section>
      <main>
    <div className="title-box">
        <h1> O que o site faz</h1>
        <p>O site de gerenciamento de lixo urbano brasileiro (GLUB) tem como propósito informar os moradores locais sobre a forma correta de descarte além de notificar e mostrar a rota do caminhão de lixo, mostrando que dia irá passar e o que irá recolher.</p>
    </div>

    <div className="content-box">
        <div className="primeira-imagem">
            <img src={lixao} alt="main-image" className="main-image"/>
        </div>

        <div className="segunda-imagem">
            
            <img src={praia} alt="main-image" className="main-image"/>
        </div>

        <div className="terceira-imagem">
        
            <img src={praca} alt="main-image" className= "main-image"/>
        </div>
    </div>
</main>

<section className="faq">
    <h1> Perguntas frequentes</h1>

    <div className="grid-container">
        <div className="primeira-pergunta">
            <h3> Tem notificação de quando o caminhão passa?</h3>
            <p> Sim, tem notificação quando o caminhão estiver perto da sua casa.</p>
        </div>    

        <div className="segunda-pergunta">

            <h3> Como funcionará o sistema de GPS?</h3>
            <p>O GPS é conectado com o caminhão de lixo mostrando sua rota atual, tendo a possibilidade de entrar e ver onde ele está na cidade.</p>
           
            
        </div>

        <div className="terceira-pergunta">
            <h3> A prefeitura estará com o site?</h3>
            <p> Sim, e eles irão responder suas dúvidas.</p>
        </div>

        <div className="quarta-pergunta">
            <h3> Posso alterar o meu endereço a qualquer momento?</h3>
            <p>Sim, através das configurações localizadas no canto superior direito.</p>
        </div>

    </div>
</section>

    <Footer/>   

    </div>
    
  );
}

export default App;
