// Pegar en: Hoja de cálculo > Extensiones > Apps Script
const COLS = ["q1", "ot2", "q2", "qb", "qd", "sm1", "apr", "tr1", "ask", "ia1", "ia2", "ia3", "ia4", "ia5", "tp1", "tp2", "tp3", "ia6", "disp", "ab1", "fin"];

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Cuéntame de ti")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

// Recibe los envíos cuando la página está alojada en otro sitio (GitHub Pages).
function doPost(e) {
  try {
    const a = JSON.parse(e.postData.contents);
    guardar(a);
  } catch (err) {}
  return ContentService.createTextOutput("ok");
}

function guardar(a) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    const head = ["fecha", "ruta"].concat(COLS);
    if (sh.getLastRow() === 0) sh.appendRow(head);
    const clean = v => {
      if (Array.isArray(v)) v = v.join(", ");
      v = String(v == null ? "" : v).slice(0, 400);
      return /^[=+\-@]/.test(v) ? "'" + v : v; // evita fórmulas inyectadas
    };
    sh.appendRow([new Date(), clean(a && a.ruta)].concat(COLS.map(k => clean(a && a[k]))));
  } finally { lock.releaseLock(); }
  return true;
}
