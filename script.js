/* Coloque este script dentro da tag <script> no final do <body> no seu HTML */

const defaultConfig = {
  background_color: '#000000',
  primary_color: '#a855f7',
  secondary_color: '#ec4899',
  accent_color: '#3b82f6',
  text_color: '#ffffff',
  font_family: 'Inter',
  font_size: 16,
  mural_title: 'Mural de Streamers e Patrocinadores — Destaques do Mês',
  mural_description: 'Celebramos quem brilhou e os patrocinadores que impulsionaram essa jornada.',
  streamer1_name: 'Peixotolive',
  streamer2_name: 'annasousav',
  streamer3_name: 'amandinhanery',
  sponsor1_name: 'Patrocinador 1',
  sponsor2_name: 'Patrocinador 2',
  sponsor3_name: 'Patrocinador 3'
};

const streamersData = [
  {
    id: 1,
    photoUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/streamer1.png',
    sponsorUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/patrocinador1.png',
    sponsorLink: 'https://www.kwai.com/@3LLUKASILVER',
    streamerLink: 'https://www.kwai.com/@Peixotolive'
  },
  {
    id: 2,
    photoUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/streamer2.png',
    sponsorUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/patrocinador2.png',
    sponsorLink: 'https://www.kwai.com/@admdaciganaofi',
    streamerLink: 'https://www.kwai.com/@annasousav'
  },
  {
    id: 3,
    photoUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/streamer3.png',
    sponsorUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/patrocinador3.png',
    sponsorLink: 'https://k.kwai.com/u/@tiagoribeiro294/Co1Ggjuz',
    streamerLink: 'https://www.kwai.com/@amandinhanery'
  }
];

function renderStreamers(config) {
  const grid = document.getElementById('streamers-grid');
  grid.innerHTML = '';

  streamersData.forEach((streamer) => {
    const streamerName = config[`streamer${streamer.id}_name`] || defaultConfig[`streamer${streamer.id}_name`];
    
    const card = document.createElement('div');
    card.className = 'streamer-card';
    
    // const sponsorName = config[`sponsor${streamer.id}_name`] || defaultConfig[`sponsor${streamer.id}_name`]; // Nome do patrocinador não é usado na exibição atual
    
    card.innerHTML = `
      <div class="streamer-card-border"></div>
      <div class="rank-badge">${streamer.id}</div>
      
      <div class="avatar-container">
        <div class="avatar-frame rank-${streamer.id}">
          <div class="avatar">
            ${streamer.photoUrl ? `<img src="${streamer.photoUrl}" alt="${streamerName}" onerror="this.style.display='none';">` : ''}
          </div>
        </div>
      </div>
      
      <h2 class="streamer-name">${streamerName}</h2>
      
      <div class="sponsor-section">
        <div class="sponsor-label">Patrocinador</div>
        <div class="sponsor-container" onclick="window.open('${streamer.sponsorLink}', '_blank', 'noopener,noreferrer')">
          ${streamer.sponsorUrl ? `<img src="${streamer.sponsorUrl}" alt="Patrocinador" onerror="this.style.display='none';">` : ''}
        </div>
      </div>
      
      <div class="buttons-container">
        <button class="profile-button" onclick="window.open('${streamer.streamerLink}', '_blank', 'noopener,noreferrer')">
          Ver Perfil do Streamer
        </button>
        <button class="sponsor-button" onclick="window.open('${streamer.sponsorLink}', '_blank', 'noopener,noreferrer')">
          Ver Perfil do Patrocinador
        </button>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

async function onConfigChange(config) {
  // Lógica para aplicar mudanças de configuração dinâmica (cores, fontes, textos)
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
  const baseSize = config.font_size || defaultConfig.font_size;

  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  
  const titleElement = document.getElementById('mural-title');
  titleElement.textContent = config.mural_title || defaultConfig.mural_title;
  titleElement.style.fontSize = `${baseSize * 2.625}px`;
  
  const descriptionElement = document.getElementById('mural-description');
  descriptionElement.textContent = config.mural_description || defaultConfig.mural_description;
  descriptionElement.style.fontSize = `${baseSize}px`;

  // Renderiza novamente os cartões para garantir que os nomes atualizados sejam usados
  renderStreamers(config);
  
  // Aplica o dimensionamento de fonte após a renderização dos elementos
  const streamerNames = document.querySelectorAll('.streamer-name');
  streamerNames.forEach(name => {
    name.style.fontSize = `${baseSize * 1.375}px`;
  });

  const sponsorLabels = document.querySelectorAll('.sponsor-label');
  sponsorLabels.forEach(label => {
    label.style.fontSize = `${baseSize * 0.875}px`;
  });

  const buttons = document.querySelectorAll('.profile-button, .sponsor-button');
  buttons.forEach(button => {
    button.style.fontSize = `${baseSize * 0.75}px`;
  });
}

if (window.elementSdk) {
  // Lógica de inicialização do SDK para edição, conforme no código original
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    // ... restante da lógica de mapeamento do SDK
  });
}

// Inicializa a renderização com as configurações padrão ao carregar
renderStreamers(defaultConfig);
