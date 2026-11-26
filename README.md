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
| `404.html` | Página de error. |
| `robots.txt` | Pide a los buscadores que no indexen el sitio. |
| `PRIVACY.md` | Qué datos se guardan y para qué. |

## Publicar

1. Crea una clave gratuita en [Web3Forms](https://web3forms.com) con tu correo.
2. En `index.html`, pega la clave en `const WEB3KEY=""`. Las claves de Web3Forms son públicas por diseño.
3. En **Settings > Pages**, publica desde la rama `main`, carpeta `/ (root)`.

Cada envío llega como un correo con las respuestas.

## Probar en local

Abre `index.html` en el navegador. Mientras `WEB3KEY` esté vacío, al enviar solo se imprimen las respuestas en la consola y no se guarda nada.

## Licencia

[MIT](LICENSE)
