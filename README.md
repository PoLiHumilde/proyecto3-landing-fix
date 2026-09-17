# Proyecto 3 — Fix de landing (portfolio)

Landing demo para negocio local con 3 bugs intencionales, típicos de encargos de $10-20 en Fiverr/Workana.

## Bugs a corregir (tu práctica)
1. **Formulario se recarga** — falta `preventDefault`, no valida fecha ni servicio, id `formMessage` no existe (es `form-msg`).
2. **Responsive roto** — en móvil el hero y las cards se desbordan. La media query está a `200px` y la imagen tiene `width: 600px` fijo.
3. **UX** — mensaje de error/éxito no se muestra bien por el bug del id.

## Cómo probar
1. Abre `index.html` en el navegador (doble clic).
2. Reduce la ventana a tamaño móvil → verás el desborde.
3. Envía el formulario vacío → verás que se recarga / da error en consola (F12).

## Tu tarea
Corrige `script.js` y `styles.css` y deja constancia del antes/después para tu perfil.
Cuando lo termines, lo revisamos juntos y lo subimos a GitHub.
