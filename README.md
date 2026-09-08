VORTEX TIER — SUPER SIMPLE

এই version-এ:
- package.json নেই
- API folder নেই
- database নেই
- GitHub token নেই
- Vercel environment variable নেই

ফাইল:
- index.html = Home
- rankings.html = Rankings
- admin.html = Admin panel
- app.js = সব player data
- style.css = design

ADMIN PASSWORD:
admin.html ফাইল খুলে এই line-এ password বদলান:
const ADMIN_PASSWORD = "CHANGE_THIS_PASSWORD";

কীভাবে player update করবেন:
1. admin.html খুলুন
2. password দিয়ে ঢুকুন
3. player add/edit করুন
4. "Download updated app.js" চাপুন
5. নতুন app.js দিয়ে পুরোনো app.js replace করুন
6. Vercel/GitHub-এ updated app.js upload করে redeploy করুন

গুরুত্বপূর্ণ:
একটা pure static website থেকে browser সরাসরি server-এর app.js বদলাতে পারে না। তাই admin panel update করা data-কে নতুন app.js হিসেবে download করে দেয়। Server/database/API ছাড়া এটিই সবচেয়ে simple এবং safe উপায়।
