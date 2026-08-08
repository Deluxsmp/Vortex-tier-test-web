const playersData = [
    {
        name: "Itz_Dhrubo",
        points: 490,
        region: "AS",
        regionFull: "North America",
        tiers: [
            { icon: "https://i.postimg.cc/qM3XBvN6/nethop.png", label: "HT3" },
            { icon: "https://i.postimg.cc/xdK4XPqk/axe.png", label: "HT1" },
            { icon: "https://i.postimg.cc/qB8vkfpb/sword.png", label: "HT1" },
            { icon: "https://i.postimg.cc/sXG1PvdS/pot.png", label: "HT1" },
            { icon: "https://i.postimg.cc/zD9KQY0P/uhc.png", label: "HT1" },
            { icon: "https://i.postimg.cc/cL1RRMDy/smp.png", label: "HT1" },
            { icon: "https://i.postimg.cc/nLYDjsJS/638965736295609752.png", label: "LT2" },
            { icon: "https://i.postimg.cc/3x6kkgVP/mace.png", label: "LT2" }
        ]
    },
    {
        name: "Marlowww",
        points: 450,
        region: "NA",
        regionFull: "North America",
        tiers: [
            { icon: "https://i.postimg.cc/qM3XBvN6/nethop.png", label: "HT1" },
            { icon: "https://i.postimg.cc/xdK4XPqk/axe.png", label: "HT1" },
            { icon: "https://i.postimg.cc/qB8vkfpb/sword.png", label: "HT1" },
            { icon: "https://i.postimg.cc/sXG1PvdS/pot.png", label: "HT1" },
            { icon: "https://i.postimg.cc/zD9KQY0P/uhc.png", label: "HT1" },
            { icon: "https://i.postimg.cc/cL1RRMDy/smp.png", label: "HT1" },
            { icon: "https://i.postimg.cc/nLYDjsJS/638965736295609752.png", label: "LT1" },
            { icon: "https://i.postimg.cc/3x6kkgVP/mace.png", label: "LT1" }
        ]
    },
    {
        name: "ItzRealMe",
        points: 330,
        region: "NA",
        regionFull: "North America",
        tiers: [
            { icon: "https://i.postimg.cc/qM3XBvN6/nethop.png", label: "HT3" },
            { icon: "https://i.postimg.cc/xdK4XPqk/axe.png", label: "HT1" },
            { icon: "https://i.postimg.cc/qB8vkfpb/sword.png", label: "HT1" },
            { icon: "https://i.postimg.cc/sXG1PvdS/pot.png", label: "HT1" },
            { icon: "https://i.postimg.cc/zD9KQY0P/uhc.png", label: "HT1" },
            { icon: "https://i.postimg.cc/cL1RRMDy/smp.png", label: "HT1" },
            { icon: "https://i.postimg.cc/nLYDjsJS/638965736295609752.png", label: "LT2" },
            { icon: "https://i.postimg.cc/3x6kkgVP/mace.png", label: "LT2" }
        ]
    },
    {
        name: "ninorc15",
        points: 196,
        region: "EU",
        regionFull: "Europe",
        tiers: [
            { icon: "https://i.postimg.cc/qM3XBvN6/nethop.png", label: "LT2" },
            { icon: "https://i.postimg.cc/xdK4XPqk/axe.png", label: "LT3" },
            { icon: "https://i.postimg.cc/qB8vkfpb/sword.png", label: "LT1" },
            { icon: "https://i.postimg.cc/sXG1PvdS/pot.png", label: "LT2" },
            { icon: "https://i.postimg.cc/zD9KQY0P/uhc.png", label: "LT2" },
            { icon: "https://i.postimg.cc/cL1RRMDy/smp.png", label: "LT2" },
            { icon: "https://i.postimg.cc/nLYDjsJS/638965736295609752.png", label: "LT2" },
            { icon: "https://i.postimg.cc/3x6kkgVP/mace.png", label: "LT2" }
        ]
    },
    {
        name: "Swight",
        points: 290,
        region: "NA",
        regionFull: "North America",
        tiers: [
            { icon: "https://i.postimg.cc/qM3XBvN6/nethop.png", label: "LT3" },
            { icon: "https://i.postimg.cc/xdK4XPqk/axe.png", label: "HT1" },
            { icon: "https://i.postimg.cc/qB8vkfpb/sword.png", label: "HT1" },
            { icon: "https://i.postimg.cc/sXG1PvdS/pot.png", label: "HT1" },
            { icon: "https://i.postimg.cc/zD9KQY0P/uhc.png", label: "HT1" },
            { icon: "https://i.postimg.cc/cL1RRMDy/smp.png", label: "HT2" },
            { icon: "https://i.postimg.cc/nLYDjsJS/638965736295609752.png", label: "LT2" },
            { icon: "https://i.postimg.cc/3x6kkgVP/mace.png", label: "LT2" }
        ]
    }
];

function renderTable(dataToRender = playersData) {
    dataToRender.sort((a, b) => b.points - a.points);
    const tbody = document.getElementById('playerTable');
    tbody.innerHTML = "";

    dataToRender.forEach((player, index) => {
        let rankNum = index + 1;
        let computedRank = "";
        let rowClass = "player-row-item";

        if (rankNum === 1) {
            computedRank = "Combat Grandmaster";
            rowClass += " row-rank-1";
        } else if (rankNum === 2 || rankNum === 3) {
            computedRank = "Combat Master";
            if (rankNum === 2) rowClass += " row-rank-2";
            if (rankNum === 3) rowClass += " row-rank-3";
        } else if (rankNum >= 4 && rankNum <= 50) {
            computedRank = "Combat Ace";
        } else {
            computedRank = "Combat Veteran";
        }

        player.computedRank = computedRank;

        let tiersHTML = '';
        player.tiers.forEach(t => {
            if(t.label === "-" || !t.label) {
                tiersHTML += `<div class="tier-item"><img src="${t.icon}" class="tier-icon"><span class="tier-empty">-</span></div>`;
            } else {
                tiersHTML += `<div class="tier-item"><img src="${t.icon}" class="tier-icon"><span class="tier-label">${t.label}</span></div>`;
            }
        });

        let regionClass = "region-badge region-" + player.region.toLowerCase();

        let row = document.createElement('tr');
        row.className = rowClass;
        row.onclick = () => openPlayerModal(playersData.indexOf(player));

        row.innerHTML = `
            <td class="rank-col">${rankNum}.</td>
            <td>
                <div class="player-container">
                    <img src="https://render.crafty.gg/3d/bust/${player.name}" class="player-skin-full" alt="skin" onerror="this.src='https://render.crafty.gg/3d/bust/steve'">
                    <div class="player-details">
                        <span class="player-name">${player.name}</span>
                        <span class="rank-desc"><span style="color:#f43f5e">♦</span> ${computedRank} <span style="color:#8b949e">(${player.points} points)</span></span>
                    </div>
                </div>
            </td>
            <td>
                <span class="${regionClass}">${player.region}</span>
            </td>
            <td>
                <div class="tiers-container">${tiersHTML}</div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterPlayers() {
    let query = document.getElementById('tierSearch').value.toLowerCase();
    let filtered = playersData.filter(p => p.name.toLowerCase().includes(query));
    renderTable(filtered);
}

function showWebsite() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    renderTable();
}

function showSection(sectionId) {
    if(sectionId === 'landing-page') {
        document.getElementById('landing-page').style.display = 'flex';
        document.getElementById('main-content').style.display = 'none';
    } else {
        showWebsite();
    }
}

function openPlayerModal(index) {
    const player = playersData[index];
    document.getElementById('modalPlayerName').innerText = player.name;
    document.getElementById('modalRankText').innerText = player.computedRank;
    document.getElementById('modalPointsText').innerText = player.points + " points";
    document.getElementById('modalRegionText').innerText = player.regionFull;
    document.getElementById('modalPositionNum').innerText = (index + 1) + ".";
    
    let skinUrl = `https://render.crafty.gg/3d/bust/${player.name}`;
    let modalImg = document.getElementById('modalSkinImg');
    modalImg.src = skinUrl;
    modalImg.onerror = function() {
        this.src = 'https://render.crafty.gg/3d/bust/steve';
    };

    document.getElementById('modalNameMCLink').href = `https://namemc.com/search?q=${player.name}`;

    let modalTiersHTML = '';
    player.tiers.forEach(t => {
        modalTiersHTML += `<div class="tier-item"><img src="${t.icon}" class="tier-icon"><span class="tier-label">${t.label}</span></div>`;
    });
    document.getElementById('modalTiersContainer').innerHTML = modalTiersHTML;
    
    document.getElementById('playerModal').style.display = 'flex';
}

function closePlayerModal() {
    document.getElementById('playerModal').style.display = 'none';
}

window.onclick = function(event) {
    let modal = document.getElementById('playerModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
