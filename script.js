const streamersData = [
  {
    id: 1,
    name: 'Peixotolive',
    photoUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/streamer1.png',
    sponsorUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/patrocinador1.png',
    sponsorLink: 'https://www.kwai.com/@3LLUKASILVER',
    streamerLink: 'https://www.kwai.com/@Peixotolive'
  },
  {
    id: 2,
    name: 'annasousav',
    photoUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/streamer2.png',
    sponsorUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/patrocinador2.png',
    sponsorLink: 'https://www.kwai.com/@admdaciganaofi',
    streamerLink: 'https://www.kwai.com/@annasousav'
  },
  {
    id: 3,
    name: 'amandinhanery',
    photoUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/streamer3.png',
    sponsorUrl: 'https://raw.githubusercontent.com/marcosjunior086-coder/mural/main/patrocinador3.png',
    sponsorLink: 'https://k.kwai.com/u/@tiagoribeiro294/Co1Ggjuz',
    streamerLink: 'https://www.kwai.com/@amandinhanery'
  }
];

function renderStreamers() {
  const grid = document.getElementById('streamers-grid');
  
  streamersData.forEach((streamer) => {
    const card = document.createElement('div');
    card.className = 'streamer-card';
    
    card.innerHTML = `
      <div class="rank-badge">${streamer.id}</div>
      
      <div class="avatar-container">
        <div class="avatar-frame rank-${streamer.id}">
          <div class="avatar">
            ${streamer.photoUrl ? `<img src="${streamer.photoUrl}" alt="${streamer.name}" onerror="this.style.display='none';">` : ''}
          </div>
        </div>
        
        <div class="sponsor-section">
          <div class="sponsor-label">Patrocinador</div>
          <div class="sponsor-container" onclick="window.open('${streamer.sponsorLink}', '_blank', 'noopener,noreferrer')">
            ${streamer.sponsorUrl ? `<img src="${streamer.sponsorUrl}" alt="Patrocinador" onerror="this.style.display='none';">` : ''}
          </div>
        </div>
      </div>
      
      <h2 class="streamer-name">${streamer.name}</h2>
      
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

// Render ao carregar
renderStreamers();
