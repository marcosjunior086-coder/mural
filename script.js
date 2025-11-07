const defaultConfig = {
  background_color: '#000000',
  primary_color: '#a855f7',
  secondary_color: '#ec4899',
  accent_color: '#3b82f6',
  text_color: '#ffffff',
  font_family: 'Orbitron',
  font_size: 16,
  mural_title: 'Mural de Streamers e Patrocinadores — Destaques',
  mural_description: 'Celebramos quem brilhou e os patrocinadores que impulsionaram essa jornada.',
  streamer1_name: 'Nome 1',
  streamer2_name: 'Nome 2',
  streamer3_name: 'Nome 3',
  sponsor1_name: 'Patrocinador 1',
  sponsor2_name: 'Patrocinador 2',
  sponsor3_name: 'Patrocinador 3'
};

const streamersData = [
  {
    id: 1,
    photoUrl: '', // Adicione URLs de fotos aqui se quiser
    sponsorUrl: '', // Adicione URLs de fotos aqui se quiser
    sponsorLink: 'https://kawai.com/patrocinador-1'
  },
  {
    id: 2,
    photoUrl: '',
    sponsorUrl: '',
    sponsorLink: 'https://kawai.com/patrocinador-2'
  },
  {
    id: 3,
    photoUrl: '',
    sponsorUrl: '',
    sponsorLink: 'https://kawai.com/patrocinador-3'
  }
];

function renderStreamers(config) {
  const grid = document.getElementById('streamers-grid');
  grid.innerHTML = '';

  streamersData.forEach((streamer, index) => {
    const streamerName = config[`streamer${streamer.id}_name`] || defaultConfig[`streamer${streamer.id}_name`];
    
    const card = document.createElement('div');
    card.className = 'streamer-card';
    
    const sponsorName = config[`sponsor${streamer.id}_name`] || defaultConfig[`sponsor${streamer.id}_name`];
    
    card.innerHTML = `
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
          ${streamer.sponsorUrl ? `<img src="${streamer.sponsorUrl}" alt="${sponsorName}" onerror="this.style.display='none';">` : ''}
        </div>
        <div class="sponsor-name">${sponsorName}</div>
      </div>
      
      <div class="buttons-container">
        <button class="profile-button" onclick="window.open('https://kawai.com/streamer/${streamerName.toLowerCase().replace(/\s+/g, '-')}', '_blank', 'noopener,noreferrer')">
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
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Orbitron, Rajdhani, Exo 2, sans-serif';
  const baseSize = config.font_size || defaultConfig.font_size;

  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  
  const titleElement = document.getElementById('mural-title');
  titleElement.textContent = config.mural_title || defaultConfig.mural_title;
  titleElement.style.fontSize = `${baseSize * 2.625}px`;
  
  const descriptionElement = document.getElementById('mural-description');
  descriptionElement.textContent = config.mural_description || defaultConfig.mural_description;
  descriptionElement.style.fontSize = `${baseSize}px`;

  const streamerNames = document.querySelectorAll('.streamer-name');
  streamerNames.forEach(name => {
    name.style.fontSize = `${baseSize * 1.375}px`;
  });

  const sponsorLabels = document.querySelectorAll('.sponsor-label');
  sponsorLabels.forEach(label => {
    label.style.fontSize = `${baseSize * 0.875}px`;
  });

  const sponsorNames = document.querySelectorAll('.sponsor-name');
  sponsorNames.forEach(name => {
    name.style.fontSize = `${baseSize * 0.875}px`;
  });

  const buttons = document.querySelectorAll('.profile-button, .sponsor-button');
  buttons.forEach(button => {
    button.style.fontSize = `${baseSize * 0.75}px`;
  });

  renderStreamers(config);
}

// Esta parte do código era para o editor do Canva.
// Ela não será executada no seu site, o que é esperado.
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.primary_color || defaultConfig.primary_color,
          set: (value) => {
            config.primary_color = value;
            window.elementSdk.setConfig({ primary_color: value });
          }
        },
        {
          get: () => config.secondary_color || defaultConfig.secondary_color,
          set: (value) => {
            config.secondary_color = value;
            window.elementSdk.setConfig({ secondary_color: value });
          }
        },
        {
          get: () => config.accent_color || defaultConfig.accent_color,
          set: (value) => {
            config.accent_color = value;
            window.elementSdk.setConfig({ accent_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['mural_title', config.mural_title || defaultConfig.mural_title],
      ['mural_description', config.mural_description || defaultConfig.mural_description],
      ['streamer1_name', config.streamer1_name || defaultConfig.streamer1_name],
      ['streamer2_name', config.streamer2_name || defaultConfig.streamer2_name],
      ['streamer3_name', config.streamer3_name || defaultConfig.streamer3_name],
      ['sponsor1_name', config.sponsor1_name || defaultConfig.sponsor1_name],
      ['sponsor2_name', config.sponsor2_name || defaultConfig.sponsor2_name],
      ['sponsor3_name', config.sponsor3_name || defaultConfig.sponsor3_name]
    ])
  });
}

// Esta linha garante que seu site carregue os dados padrão
// mesmo sem o editor do Canva.
renderStreamers(defaultConfig);
