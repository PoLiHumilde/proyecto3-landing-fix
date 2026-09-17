# Barbershop Landing — Form + Responsive Fix

Demo for a local business. I took it with 3 typical cheap-website failures and shipped it production-ready: no reloads, with validation, 100% responsive.

**Live demo:** https://polihumilde.github.io/proyecto3-landing-fix/

## What was broken → what I did

| Before | After |
|---|---|
| Form reloaded the page on submit | `preventDefault()` + name, date and service validation, visible error/success messages |
| `getElementById('formMessage')` did not exist → console error, message never showed | Fixed to `form-msg`, the real HTML id |
| Image with fixed `width: 600px`, media query at `200px` → horizontal scroll on mobile | Fluid image `width: 100%`, breakpoint at `768px`, cards and hero stack in column |

## Stack
HTML · CSS (flexbox + media queries) · vanilla JavaScript. No frameworks, instant load.

## How to try it
1. Open the live demo, or open `index.html` locally.
2. Submit the empty form → validation without reload.
3. Shrink to mobile width → everything stacks, no side scroll.

## For clients
I do this kind of fix in 24h: forms that do not submit, mobile-broken pages, JavaScript errors.
Contact via Fiverr / Workana / Upwork.
