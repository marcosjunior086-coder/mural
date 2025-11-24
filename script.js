const defaultConfig = {
    background_color: '#000000',
    primary_color: '#a855f7',
    secondary_color: '#ec4899',
    accent_color: '#3b82f6',
    text_color: '#ffffff',
    font_family: 'Inter',
    font_size: 16,
    mural_title: 'Mural de Streamers e Patrocinadores 🚀 Destaques do Mês',
    mural_description:
        'Aqui celebramos a evolução dos nossos streamers e os patrocinadores que impulsionaram seus resultados. Este espaço destaca talento, parceria e desempenho que marcaram o mês.',
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
    if (!grid) return;

    grid.innerHTML = '';

    streamersData.forEach(streamer => {
        const name = config[`streamer${streamer.id}_name`];

        const card = document.createElement('div');
        card.className = 'streamer-card';

        card.innerHTML = `
            <div class="streamer-card-border"></div>
            <div class="rank-badge">${streamer.id}</div>

            <div class="avatar-container">
                <div class="avatar-frame rank-${streamer.id}">
                    <div class="avatar">
                        <img src="${streamer.photoUrl}">
                    </div>
                </div>

                <div class="sponsor-section">
                    <div class="sponsor-label">Patrocinador</div>

                    <div class="sponsor-container" onclick="window.open('${streamer.sponsorLink}')">
                        <img src="${streamer.sponsorUrl}">
                    </div>
                </div>
            </div>

            <h2 class="streamer-name">${name}</h2>

            <div class="buttons-container">
                <button class="profile-button" onclick="window.open('${streamer.streamerLink}')">
                    Ver Perfil do Streamer
                </button>

                <button class="sponsor-button" onclick="window.open('${streamer.sponsorLink}')">
                    Ver Perfil do Patrocinador
                </button>
            </div>
        `;

        grid.appendChild(card);
    });
}

renderStreamers(defaultConfig);
