VORTEX TIER — SAME DESIGN / NO DATABASE VERSION

এই version-এ আগের Vortex Tier-এর index.html, rankings.html এবং styles.css একই রাখা হয়েছে। শুধু rankings-এর data loading API থেকে সরিয়ে app.js-এর ভিতরের data করা হয়েছে।

ফাইলে:
- index.html — আগের design
- rankings.html — আগের design
- styles.css — আগের design
- app.js — player data + original ranking logic
- admin.html — password-protected local admin panel

কোনো package.json, API folder, database, GitHub token বা environment variable নেই।

Password:
admin.html খুলে ADMIN_PASSWORD-এর value বদলান।

Admin update:
1. admin.html খুলুন
2. password দিন
3. player add/edit করুন
4. Download updated app.js চাপুন
5. downloaded app.js দিয়ে website-এর app.js replace করুন
6. deploy/re-upload করুন

নোট: pure static website থেকে নিজে নিজে server-এর app.js লেখা সম্ভব নয়। তাই database/API ছাড়া admin panel updated app.js বানিয়ে দেয়।


ICON FIX: Tier 1–5 headers always use 🏆. If a custom mode image URL is provided in Admin, that image is used instead of the mode emoji. If a player has not been tested in a mode, its slot stays blank at the same size.


ICON BEHAVIOR
- Put an image URL for each mode in Admin > Mode Images.
- The image replaces the mode emoji in the mode selector.
- The same image is used in the Overall leaderboard's mini mode boxes.
- The same image is used again inside the player-click modal.
- If no image URL is set, the normal mode emoji is used as fallback.
- Untested player modes remain blank and keep their empty box size.
- Tier 1–5 headers always use 🏆.
