# Dev Studio

React + Vite + Tailwind CSS implementation of `Dev Studio.html`.

## Run locally

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
npm run lint
```

## Source organization

- `src/App.jsx`: page composition.
- `src/components/`: separate navigation, hero, marquee, services, benefits, process, previews, AI chat, engagement options, team, FAQ, contact, footer and background.
- `src/behaviors/`: focused animation and interaction initializers. `navigation.js` provides theme persistence for the React navbar.
- `src/hooks/useStudioEffects.js`: lifecycle ownership of event listeners, observers, timers and animation frames, with cleanup for React StrictMode.
- `src/styles/design.css`: original design tokens, exact geometry, theme palettes, custom effects and responsive rules.
- `src/index.css`: Tailwind entry point, reference default normalization and the mobile navigation fix.
- `src/assets/robot.webp`: original robot extracted unchanged from the reference HTML.

Layout primitives use Tailwind utilities; exact custom styling and keyframes preserve the reference. Both themes share the original palettes and persist under the original `th_full` localStorage key. The saved theme is applied before first paint.

The original 960px, 760px and 560px breakpoints are retained. The mobile menu can scroll on short screens so every link and the theme toggle remain accessible.

The contact form and AI conversation intentionally retain the reference's demo behavior. Sending a message does not call a backend. Contact details and concept previews remain the original placeholders.

Google Fonts supplies Bricolage Grotesque and Instrument Sans; loading these fonts is required for the original typography.
