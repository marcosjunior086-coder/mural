const defaultConfig = {
    background_color: '#000000',
    primary_color: '#a855f7',
    secondary_color: '#ec4899',
    accent_color: '#3b82f6',
    text_color: '#ffffff',
    font_family: 'Inter',
    font_size: 16,
    mural_title: 'Mural de Streamers e Patrocinadores 🚀 Destaques do Mês',
    mural_description: 'Aqui celebramos a evolução dos nossos streamers e os patrocinadores que impulsionaram seus resultados. Este espaço destaca talento, parceria e desempenho que marcaram o mês.',
    streamer1_name: 'Peixotolive',
    streamer2_name: 'annasousav',
    streamer3_name: 'amandinhanery',
    sponsor1_name: 'Patrocinador 1',
    sponsor2_name: 'Patrocinador 2',
    sponsor3_name: 'Patrocinador 3'
};

// Dados dos streamers, fotos e links do seu GitHub
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
    if (!grid) return;
    grid.innerHTML = '';

    streamersData.forEach((streamer) => {
        const streamerName = config[`streamer${streamer.id}_name`] || defaultConfig[`streamer${streamer.id}_name`];

        const card = document.createElement('div');
        card.className = 'streamer-card';

        const streamerImgTag = streamer.photoUrl
            ? `<img src="${streamer.photoUrl}" alt="${streamerName}" onerror="this.style.display='none';">`
            : '';

        const sponsorImgTag = streamer.sponsorUrl
            ? `<img src="${streamer.sponsorUrl}" alt="Patrocinador" onerror="this.style.display='none';">`
            : '';

        card.innerHTML = `
            <div class="streamer-card-border"></div>
            <div class="rank-badge">${streamer.id}</div>
            
            <div class="avatar-container">
                <div class="avatar-frame rank-${streamer.id}">
                    <div class="avatar">${streamerImgTag}</div>
                </div>
                
                <div class="sponsor-section">
                    <div class="sponsor-label">Patrocinador</div>
                    <div class="sponsor-container" onclick="window.open('${streamer.sponsorLink}', '_blank', 'noopener,noreferrer')">
                        ${sponsorImgTag}
                    </div>
                </div>
            </div>
            
            <h2 class="streamer-name">${streamerName}</h2>
            
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
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontStack = 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
    const baseSize = config.font_size || defaultConfig.font_size;

    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
    
    const titleElement = document.getElementById('mural-title');
    if (titleElement) {
        titleElement.textContent = config.mural_title || defaultConfig.mural_title;
        titleElement.style.fontSize = `${baseSize * 2.1875}px`;
    }
    
    const descriptionElement = document.getElementById('mural-description');
    if (descriptionElement) {
        descriptionElement.textContent = config.mural_description || defaultConfig.mural_description;
        descriptionElement.style.fontSize = `${baseSize}px`;
    }

    renderStreamers(config);

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
} else {
    renderStreamers(defaultConfig);
}
