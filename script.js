// Selecionar o botão e a tabela na página
const tabelaBtn = document.getElementById('tabela');
const tabelaContainer = document.querySelector('table'); // Definir a tabela como o "container"
const tabelaBody = document.querySelector('table tbody');

// Função para carregar o XML e criar a tabela
tabelaBtn.addEventListener('click', () => {
    // Carregar o ficheiro XML (se necessário)
    fetch('agencia.xml')
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

            // Limpar tabela antes de preencher
            tabelaBody.innerHTML = '';

            // Selecionar os destinos no XML
            const destinos = xmlDoc.getElementsByTagName('destino');

            // Preencher a tabela com os dados dos destinos
            for (let destino of destinos) {
                const nome = destino.getElementsByTagName('nome')[0].textContent;
                const descricao = destino.getElementsByTagName('descricao')[0].textContent;
                const preco = destino.getElementsByTagName('preco')[0].textContent;

                // Criar uma nova linha na tabela
                const row = document.createElement('tr');

                // Criar células para o nome, descrição e preço
                const nomeCell = document.createElement('td');
                nomeCell.textContent = nome;

                const descricaoCell = document.createElement('td');
                descricaoCell.textContent = descricao;

                const precoCell = document.createElement('td');
                precoCell.textContent = `Desde €${parseFloat(preco).toFixed(2)}`;

                // Adicionar as células à linha
                row.appendChild(nomeCell);
                row.appendChild(descricaoCell);
                row.appendChild(precoCell);

                // Adicionar a linha ao corpo da tabela
                tabelaBody.appendChild(row);
            }
        })
        .catch(error => console.error('Erro ao carregar o XML:', error));
});
