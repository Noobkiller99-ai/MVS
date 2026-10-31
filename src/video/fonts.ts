import { staticFile } from "remotion";

export const fontStyles = `
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  src: url('${staticFile("fonts/playfair-display-latin-400-normal.woff2")}') format('woff2');
}

@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  src: url('${staticFile("fonts/playfair-display-latin-400-italic.woff2")}') format('woff2');
}

@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  src: url('${staticFile("fonts/playfair-display-latin-600-normal.woff2")}') format('woff2');
}

@font-face {
  font-family: 'Libre Caslon Text';
  font-style: normal;
  font-weight: 400;
  src: url('${staticFile("fonts/libre-caslon-text-latin-400-normal.woff2")}') format('woff2');
}

@font-face {
  font-family: 'Libre Caslon Text';
  font-style: italic;
  font-weight: 400;
  src: url('${staticFile("fonts/libre-caslon-text-latin-400-italic.woff2")}') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('${staticFile("fonts/inter-latin-400-normal.woff2")}') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url('${staticFile("fonts/inter-latin-600-normal.woff2")}') format('woff2');
}

@font-face {
  font-family: 'Noto Serif Devanagari';
  font-style: normal;
  font-weight: 400;
  src: url('${staticFile("fonts/noto-serif-devanagari-devanagari-400-normal.woff2")}') format('woff2');
}
`;
