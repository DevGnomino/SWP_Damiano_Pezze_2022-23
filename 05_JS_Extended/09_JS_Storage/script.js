// Cookies vs Local Storage vs Session Storage

// Local Storage
// Wird nur im Browser gespeichert
// Läuft nie ab
// Zugreifbar von jedem Fenster
localStorage.setItem("name", "Martin");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

// Session Storage
// Wird nur im Browser gespeichert
// Läuft bei schließen des Tabs ab
// Zugreifbar nur vom gleichen Tab
sessionStorage.setItem("name", "Gerold");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

// Cookies
// Werden im Browser und auf dem Server gespeichert
// Ablaufzeit manuell einstellbar
// Zugreifbar von jedem Fenster
document.cookie = "name=Hubert; expires=" + new Date(2023, 0, 1).toUTCString;
document.cookie = "lastName=Huber; expires=" + new Date(9999, 0, 1).toUTCString;
console.log(document.cookie);