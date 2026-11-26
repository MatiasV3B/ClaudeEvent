# Cuéntame de ti

Formulario de gustos e intereses de una sola página (`index.html`), sin dependencias ni build.

- Las preguntas cambian según lo que responde cada persona.
- Es anónimo: no pide nombre ni datos personales.
- Las respuestas se guardan en una hoja de Google Sheets mediante un Google Apps Script.

## Publicar

1. Crea una hoja de Google, abre **Extensiones > Apps Script** y pega el script de recepción.
2. **Implementar > Aplicación web**: ejecutar como "Yo", acceso "Cualquier persona". Copia la URL que termina en `/exec`.
3. En `index.html`, pega esa URL en `const ENDPOINT=""`.
4. En **Settings > Pages**, publica desde la rama `main`, carpeta `/ (root)`.

## Probar en local

Abre `index.html` en el navegador. Mientras `ENDPOINT` esté vacío, el envío solo imprime las respuestas en la consola y no guarda nada.
