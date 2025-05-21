function carregarDadosCSV(url, nomeSecao, callback) {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      console.log(`>>> Dados da seção ${nomeSecao}:`, results.data);
      callback(results.data);
    },
    error: function(err) {
      console.error(`Erro ao carregar ${nomeSecao}:`, err);
    }
  });
}

// OBRAS EM ANDAMENTO – com conversão automática de links do Drive
carregarDadosCSV(
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1482567846&single=true&output=csv',
  'Obras em Andamento',
  function(data) {
    const container = document.getElementById('obras-andamento-content');
    container.innerHTML = '';
    data.forEach(obra => {
      if (obra['Nome da Obra']?.trim()) {
        let imagem = obra['URL da Imagem']?.trim();
        if (imagem && imagem.includes("drive.google.com/file/d/")) {
          const id = imagem.split("/d/")[1].split("/")[0];
          imagem = `https://drive.google.com/uc?export=view&id=${id}`;
        }
        const card = document.createElement('div');
        card.className = 'obra';
        card.innerHTML = `
          ${imagem ? `<img src="${imagem}" alt="${obra['Nome da Obra']}">` : ''}
          <div>
            <h4>${obra['Nome da Obra']}</h4>
            <p>Área: ${obra['Área Construída'] || obra['Área Construída (m²)']} m²</p>
            <p>Local: ${obra['Localização']}</p>
          </div>
        `;
        container.appendChild(card);
      }
    });
  }
);