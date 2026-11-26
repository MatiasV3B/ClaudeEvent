# Cuéntame de ti

Formulario anónimo de gustos e intereses, en una sola página (`index.html`). No necesita instalación ni build.

## Características

- Preguntas que cambian según las respuestas anteriores.
- Máximo 5 opciones por pregunta; la opción "Otra" abre una casilla para escribir.
- Funciona en móvil y escritorio, con modo oscuro y soporte para teclado.
- Sin cookies, sin rastreadores y sin librerías externas (solo tipografías de Google Fonts).

## Estructura

| Ruta | Qué es |
| --- | --- |
| `index.html` | La página completa (estilos, preguntas y lógica). |
| `apps-script/Code.gs` | Script de Google que recibe las respuestas y las guarda en una hoja. |
| `404.html` | Página de error. |
| `robots.txt` | Pide a los buscadores que no indexen el sitio. |
| `PRIVACY.md` | Qué datos se guardan y para qué. |

## Publicar

1. Crea una hoja de Google y abre **Extensiones > Apps Script**.
2. Pega `apps-script/Code.gs` y añade un archivo HTML llamado `index` con el contenido de `index.html` (solo si quieres servirlo también desde Google).
3. **Implementar > Aplicación web**: ejecutar como "Yo", acceso "Cualquier persona". Copia la URL que termina en `/exec`.
4. En `index.html`, pega esa URL en `const ENDPOINT=""`.
5. En **Settings > Pages**, publica desde la rama `main`, carpeta `/ (root)`.

## Probar en local

Abre `index.html` en el navegador. Mientras `ENDPOINT` esté vacío, al enviar solo se imprimen las respuestas en la consola y no se guarda nada.

## Licencia

[MIT](LICENSE)
