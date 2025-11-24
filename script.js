const defaultConfig = {
    // Cores e tamanhos foram mantidos, mas não são usados para estilos dinâmicos nesta versão simplificada, exceto texto e títulos.
    background_color: '#000000',
    primary_color: '#a855f7',
    secondary_color: '#ec4899',
    accent_color: '#3b82f6',
    text_color: '#ffffff',
    font_family: 'Inter',
    font_size: 16,
    // Nomes e textos configuráveis
    mural_title: 'Mural de Streamers e Patrocinadores 🚀 Destaques do Mês',
    mural_description: 'Aqui celebramos a evolução dos nossos streamers e os patrocinadores que impulsionaram seus resultados. Este espaço destaca talento, parceria e desempenho que marcaram o mês.',
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

    // Atualiza os textos do cabeçalho com base no config
    document.getElementById('mural-title').textContent = config.mural_title;
    document.getElementById('mural-description').textContent = config.mural_description;

    streamersData.forEach((streamer) => {
        // Pega o nome do streamer e do patrocinador usando o ID
        const streamerName = config[`streamer${streamer.id}_name`] || defaultConfig[`streamer${streamer.id}_name`];
        const sponsorName = config[`sponsor${streamer.id}_name`] || defaultConfig[`sponsor${streamer.id}_name`];
        
        const card = document.createElement('div');
        card.className = 'streamer-card';
        
        card.innerHTML = `
            <div class="streamer-card-border"></div>
            <div class="rank-badge">${streamer.id}</div>
            
            <div class="avatar-container">
                <div class="avatar-frame rank-${streamer.id}">
                    <div class="avatar">
                        ${streamer.photoUrl ? `<img src="${streamer.photoUrl}" alt="${streamerName}" onerror="this.style.display='none';">` : ''}
                    </div>
                </div>
                
                <div class="sponsor-section">
                    <div class="sponsor-label">Patrocinador</div>
                    <a href="${streamer.sponsorLink}" target="_blank" rel="noopener noreferrer" class="sponsor-container">
                        ${streamer.sponsorUrl ? `<img src="${streamer.sponsorUrl}" alt="${sponsorName}" onerror="this.style.display='none';">` : ''}
                    </a>
                </div>
            </div>
            
            <h2 class="streamer-name">${streamerName}</h2>
            
            <div class="buttons-container">
                <a href="${streamer.streamerLink}" target="_blank" rel="noopener noreferrer" class="profile-button">
                    Ver Perfil do Streamer
                </a>
                <a href="${streamer.sponsorLink}" target="_blank" rel="noopener noreferrer" class="sponsor-button">
                    Ver Perfil do Patrocinador
                </a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Para usar o código em um ambiente estático (como o GitHub Pages), 
// chamamos a função de renderização após o DOM ser carregado.
document.addEventListener('DOMContentLoaded', () => {
    // Removemos a lógica de `onConfigChange` e `elementSdk`
    // e chamamos a renderização diretamente com a configuração padrão.
    renderStreamers(defaultConfig);
});
