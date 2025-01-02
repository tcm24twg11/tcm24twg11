function carregarXML(url) {
    return fetch(url)
      .then(response => response.text())
      .then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "text/xml");
        return xmlDoc;
      })
      .catch(error => console.error('Erro ao carregar o XML:', error));
  }
  
  function atualizarPagina(destino) {
    carregarXML('dados.xml').then(xmlDoc => {
      let destinos = xmlDoc.getElementsByTagName("destino");
  
      for (let i = 0; i < destinos.length; i++) {
        let nomeDestino = destinos[i].getAttribute("nome");
  
        if (nomeDestino.toLowerCase() === destino.toLowerCase()) {
          document.querySelector('header h1').innerText = destinos[i].getElementsByTagName('nome')[0].textContent;
          document.querySelector('header p').innerText = destinos[i].getElementsByTagName('descricao')[0].textContent;
          
          let detalhesPacote = destinos[i].getElementsByTagName('detalhes')[0].getElementsByTagName('item');
          let listaDetalhes = document.querySelector('.detalhes-pacote');
          listaDetalhes.innerHTML = ''; 
          for (let j = 0; j < detalhesPacote.length; j++) {
            let li = document.createElement('li');
            li.textContent = detalhesPacote[j].textContent;
            listaDetalhes.appendChild(li);
          }
  
          document.querySelector('.preco').innerText = `€${destinos[i].getElementsByTagName('preco')[0].textContent}`;
  
          let imagens = destinos[i].getElementsByTagName('imagem');
          let galeriaImagens = document.querySelector('.imagens-pacote');
          galeriaImagens.innerHTML = ''; 
          for (let j = 0; j < imagens.length; j++) {
            let img = document.createElement('img');
            img.src = imagens[j].textContent;
            img.alt = `Imagem de ${nomeDestino}`;
            img.style.width = "100%";
            img.style.height = "auto";
            galeriaImagens.appendChild(img);
          }
  
          let linkReserva = destinos[i].getElementsByTagName('link_reserva')[0].textContent;
          document.querySelector('.button').setAttribute('href', linkReserva);
          
          break; p
        }
      }
    });
  }
  
  function carregarInformacoesPorDestino() {
    const urlAtual = window.location.href;
    const nomeDestino = urlAtual.split("/").pop().split(".")[0]; 
    atualizarPagina(nomeDestino);
  }
  
  window.onload = carregarInformacoesPorDestino;
  
