import './App.css';



function App() {
  return (
    <div classNameName="App">
      
      <main>
    <div class="title-box">
        <h1> O que o site faz</h1>
        <p>O site de gerenciamento de lixo urbano brasileiro (GLUB) tem como propósito informar os moradores locais sobre a forma correta de descarte além de notificar e mostrar a rota do caminhão de lixo, mostrando que dia irá passar e o que irá recolher.</p>
    </div>

    <div class="content-box">
        <div class="primeira-imagem">
            <img src="/Imagens/lixao-redonda.png" alt="main-image" class="main-image"/>
        </div>

        <div class="segunda-imagem">
            
            <img src="/Imagens/praia-redondo.png" alt="main-image" class="main-image"/>
        </div>

        <div class="terceira-imagem">
        
            <img src="/Imagens/praca-redondo.png" alt="main-image" class="main-image"/>
        </div>
    </div>
</main>

<section class="faq">
    <h1> Perguntas frequentes</h1>

    <div class="grid-container">
        <div class="primeira-pergunta">
            <h3> Tem notificação de quando o caminhão passa?</h3>
            <p> Sim, tem notificação quando o caminhão estiver perto da sua casa.</p>
        </div>    

        <div class="segunda-pergunta">

            <h3> Como funcionará o sistema de GPS?</h3>
            <p>O GPS é conectado com o caminhão de lixo mostrando sua rota atual, tendo a possibilidade de entrar e ver onde ele está na cidade.</p>
           
            
        </div>

        <div class="terceira-pergunta">
            <h3> A prefeitura estará com o site?</h3>
            <p> Sim, e eles irão responder suas dúvidas.</p>
        </div>

        <div class="quarta-pergunta">
            <h3> Posso alterar o meu endereço a qualquer momento?</h3>
            <p>Sim, através das configurações localizadas no canto superior direito.</p>
        </div>

    </div>
</section>

    </div>
  );
}

export default App;
