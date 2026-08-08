<!DOCTYPE html>
<html lang="bn">
<head>
    <meta property="og:title" content="Vortex Tier | Official Website" />
    <meta property="og:site_name" content="Vortex Tier" />
    <meta name="description" content="Vortex Tier - Vortex Tier is the best Minecraft PvP tier testing server with skilled testers, active leaderboards, fair rankings, and competitive gameplay.">
    <meta name="google-site-verification" content="8RENsYVW-vmReK0zH10BDiU4cVjnqKDUTWhVANmFzIQ" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vortex Tier</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { background-color: #0b0e14; color: #fff; }

        nav { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 20px 5%; 
            background: #161b22; 
            position: absolute; 
            top: 0; 
            width: 100%; 
            z-index: 2000; 
        }
        nav a { color: #fff; text-decoration: none; margin-left: 20px; cursor: pointer; }

        .container { padding: 40px 5%; }
        .table-wrapper { background: #161b22; border-radius: 8px; overflow: hidden; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 15px; text-align: left; border-bottom: 1px solid #21262d; }
  
        #landing-page {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at 5% 5%, #1a1a35 0%, #0b0e14 70%);
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            text-align: center; padding: 20px; z-index: 1000;
        }
        .badge { 
            background: #1a202c; color: #818cf8; padding: 5px 12px; border-radius: 20px; 
            margin-bottom: 20px; border: 1px solid #312e81; font-size: 0.75rem; 
            display: inline-flex; align-items: center; gap: 8px;
        }
        .status-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; }
        
        h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 20px; color: #fff; }
        .highlight { color: #facc15; } 
        
        p { color: #94a3b8; max-width: 500px; margin-bottom: 30px; font-size: 1rem; }

        .btn-group { display: flex; gap: 15px; }
        .btn { padding: 12px 25px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; transition: 0.3s; }
        .btn-primary { background: #6366f1; color: white; }
        .btn-secondary { background: #1e293b; color: white; }

        #main-content { display: none; padding: 20px; max-width: 1200px; margin: 0 auto; }
        header { background: #161b22; padding: 20px; border-radius: 8px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
        .overall-table { width: 100%; background: #161b22; border-radius: 8px; border-collapse: collapse; }
        .overall-table th, .overall-table td { padding: 12px; border-bottom: 1px solid #21262d; text-align: left; }

        .player-container { display: flex; align-items: center; gap: 12px; }
        .player-details { display: flex; flex-direction: column; }
        .player-name { font-weight: bold; color: #f0f6fc; font-size: 1rem; }
        .rank-desc { font-size: 0.8rem; color: #8b949e; }

        .skin-wrapper {
            position: relative;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
        }

        .skin-bg {
            position: absolute;
            width: 42px;
            height: 42px;
            background-color: #2f363d;
            border-radius: 4px;
            z-index: 1;
        }

        .player-skin-full {
            width: 41px;
            height: auto;
            z-index: 2;
            position: relative;
            object-fit: contain;
        }

        .player-row-item .player-container { 
            display: flex; 
            align-items: center; 
            gap: 12px; 
        }

        .region-badge { 
            background: #3d2626; 
            color: #ff8888; 
            padding: 2px 6px; 
            border-radius: 4px; 
            font-size: 0.70rem; 
            font-weight: bold; 
            border: 1px solid #5a3a3a;
            margin-left: 20px; 
        }

        .tiers-container { display: flex; gap: 8px; align-items: center; }
        .tier-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .tier-icon { width: 22px; height: 22px; object-fit: contain; }
        .tier-label { font-size: 0.7rem; font-weight: bold; }
        
        .player-head {
            width: 24px;
            height: 24px;
            background-color: #30363d;
            border: 2px solid #444c56;
            border-radius: 4px;
            position: relative;
            flex-shrink: 0;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .page-section.active {
            display: block;
            animation: fadeIn 0.4s ease-out;
        }

        @media (max-width: 650px) {
            header { padding-top: 65px; }
        }
    </style>
</head>
<body>

<!-- ল্যান্ডিং পেজ -->
<div id="landing-page">
    <nav>
        <div class="logo"><h2>Vortex Tier</h2></div>
        <div class="menu">
            <a onclick="showSection('landing-page')">Home</a>
            <a onclick="showSection('main-content')">Ranking</a>
            <a href="https://discord.gg/CNnWfV99m8">Discord</a>
        </div>
    </nav>
    <div class="badge"><div class="status-dot"></div> Server Active ● LIVE</div>
    <h1>The <span class="highlight">#1 Cracked</span><br>& Premium Tierlist</h1>
    <p>Vortex Tier is the best Minecraft PvP tier testing server with skilled testers, active leaderboards, fair rankings, and competitive gameplay.</p>
    
    <div class="btn-group">
        <button class="btn btn-primary" onclick="showWebsite()">⚡ View Tier List</button>
        <button class="btn btn-secondary">Join Discord</button>
    </div>
</div>

<!-- মেইন ওয়েবসাইট -->
<div id="main-content">
    <header>
        <h1>Vortex Tier</h1>
        <div style="display:flex; gap:10px;">
            <a href="https://discord.gg/CNnWfV99m8" style="background: #5865F2; color: white; padding: 8px 15px; border-radius: 6px; text-decoration: none;">Discord</a>
            <input type="text" id="tierSearch" placeholder="Search player..." onkeyup="liveSearch()" style="padding: 8px; border-radius: 6px; border: 1px solid #30363d; background: #0b0e14; color: white;">
        </div>
    </header>

    <table class="overall-table">
        <thead>
            <tr><th>#</th><th>Player</th><th>Region</th><th>Game Modes & Tiers</th></tr>
        </thead>
        <tbody id="playerTable">
            <!-- Player 1 -->
            <tr class="player-row-item">
                <td class="rank-col">1.</td>
                <td>
                    <div class="player-container">
                        <img src="https://render.crafty.gg/3d/bust/4bb70487-9146-4fc7-89ec-971808e414b9" class="player-skin-full" alt="skin">
                        <div class="player-details">
                            <span class="player-name">DIZZ69</span>
                            <span class="rank-desc">Combat Master (88 points)</span>
                        </div>
                        <span class="region-badge">AS</span> 
                    </div>
                </td>
                <td></td>
                <td>
                    <div class="tiers-container">
                        <div class="tier-item"><img src="https://i.postimg.cc/qM3XBvN6/nethop.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">HT4</span></div>
                        <div class="tier-item"><img src="https://i.postimg.cc/xdK4XPqk/axe.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">HT5</span></div>
                        <div class="tier-item"><img src="https://i.postimg.cc/zD9KQY0P/uhc.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">?</span></div>
                        <div class="tier-item"><img src="https://i.postimg.cc/cL1RRMDy/smp.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">?</span></div>
                        <div class="tier-item"><img src="https://i.postimg.cc/nLYDjsJS/638965736295609752.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">HT5</span></div>
                        <div class="tier-item"><img src="https://i.postimg.cc/qB8vkfpb/sword.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">LT4</span></div>
                        <div class="tier-item"><img src="https://i.postimg.cc/sXG1PvdS/pot.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">?</span></div>
                        <div class="tier-item"><img src="https://i.postimg.cc/3x6kkgVP/mace.png" class="tier-icon"><span class="tier-label" style="color: #f08a24;">HT5</span></div>
                    </div>
                </td>
            </tr>
            <!-- এভাবে বাকি প্লেয়ারদের রো গুলো সঠিকভাবে সাজানো হয়েছে -->
        </tbody>
    </table>
</div>

<script>
    function showWebsite() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
    
    function showSection(sectionId) {
        if(sectionId === 'landing-page') {
            document.getElementById('landing-page').style.display = 'flex';
            document.getElementById('main-content').style.display = 'none';
        } else {
            showWebsite();
        }
    }
</script>

</body>
</html>

