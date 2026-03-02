function setTheme(theme){

const root = document.documentElement;

if(theme === "dark"){
root.style.setProperty("--bg","#0f172a");
root.style.setProperty("--text","white");
}

if(theme === "light"){
root.style.setProperty("--bg","#f1f5f9");
root.style.setProperty("--text","#0f172a");
}

if(theme === "neon"){
root.style.setProperty("--bg","#020617");
root.style.setProperty("--text","#22d3ee");
}
}