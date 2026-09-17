# Landing Barbería — Fix de formulario + responsive

Demo para negocio local. La tomé con 3 fallos típicos de webs baratas y la dejé lista para producción: sin recargas, con validación y 100% responsive.

**Demo online:** https://polihumilde.github.io/proyecto3-landing-fix/
*(se activa en Settings > Pages, tarda 1-2 min)*

## Qué estaba roto → qué hice

| Antes | Después |
|---|---|
| El formulario recargaba la página al enviar | `preventDefault()` + validación de nombre, fecha y servicio, mensajes de error/éxito visibles |
| `getElementById('formMessage')` no existía → error en consola, mensaje nunca aparecía | Corregido a `form-msg`, el id real del HTML |
| Imagen con `width: 600px` fijo, media query a `200px` → scroll horizontal en móvil | Imagen fluida `width: 100%`, breakpoint a `768px`, cards y hero se apilan en columna |

## Stack
HTML · CSS (flexbox + media queries) · JavaScript vanilla. Sin frameworks, carga instantánea.

## Cómo verlo
1. Abre la demo online, o abre `index.html` en local.
2. Prueba enviar el formulario vacío → verás validación sin recarga.
3. Reduce a ancho móvil → todo se apila, sin scroll lateral.

## Para clientes
Hago este tipo de arreglos en 24h: formularios que no envían, webs rotas en celular, errores de JavaScript.
Contacto por Fiverr / Workana / Upwork.
