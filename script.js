function carregarDadosCSV(url, nomeSecao, callback) {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      console.log(`>>> Dados da seção ${nomeSecao}:`, results.data);
      if (results.data.length > 0) {
        console.log(`>>> Primeira linha da seção ${nomeSecao}:`, results.data[0]);
      }
      callback(results.data);
    },
    error: function(err) {
      console.error(`Erro ao carregar ${nomeSecao}:`, err);
    }
  });
}

// EQUIPE (GID correto: 1742586084)
carregarDadosCSV(
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1742586084&single=true&output=csv',
  'Equipe',
  function(data) {
    const container = document.getElementById('equipe-content');
    container.innerHTML = '';
    data.forEach(pessoa => {
      const nome = pessoa['Nome']?.trim();
      const cargo = pessoa['Cargo']?.trim();
      const mini = pessoa['Mini Currículo'] || pessoa['Mini CurrÃ­culo'] || '';
      const foto = pessoa['URL da Foto']?.trim();

      if (nome || cargo || mini || foto) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          ${foto ? `<img src="${foto}" alt="${nome}">` : ''}
          <div>
            <h3>${nome}</h3>
            <p><strong>${cargo}</strong></p>
            <p>${mini}</p>
          </div>
        `;
        container.appendChild(card);
      }
    });
  }
);

// OBRAS EM ANDAMENTO (GID correto: 1482567846)
carregarDadosCSV(
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1611364421&single=true&output=csv',
  'Obras em Andamento',
  function(data) {
    const container = document.getElementById('obras-andamento-content');
    container.innerHTML = '';
    data.forEach(obra => {
      if (obra['Nome da Obra']?.trim()) {
        const card = document.createElement('div');
        card.className = 'obra';
        card.innerHTML = `
          ${obra['URL da Imagem'] ? `<img src="${obra['URL da Imagem']}" alt="${obra['Nome da Obra']}">` : ''}
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

// OBRAS CONCLUÍDAS (GID correto: 1611364421)
carregarDadosCSV(
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1611364421&single=true&output=csv',
  'Obras Concluídas',
  function(data) {
    const container = document.getElementById('obras-concluidas-content');
    container.innerHTML = '';
    data.forEach(obra => {
      if (obra['Nome da Obra']?.trim()) {
        const card = document.createElement('div');
        card.className = 'obra';
        card.innerHTML = `
          ${obra['URL da Imagem'] ? `<img src="${obra['URL da Imagem']}" alt="${obra['Nome da Obra']}">` : ''}
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