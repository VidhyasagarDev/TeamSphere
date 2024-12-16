import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-brand-50: #eff6ff;
        --color-brand-100: #dbeafe;
        --color-brand-200: #bfdbfe;
        --color-brand-300: #93c5fd;
        --color-brand-400: #60a5fa;
        --color-brand-500: #3b82f6;
        --color-brand-600: #2563eb;
        --color-brand-700: #1d4ed8;
        --color-brand-800: #1e40af;
        --color-brand-900: #1e3a8a;
        --color-brand-950: #172554;
        --color-aside: #192432;

        --color-grey-0: #fff;
        --color-grey-50: #f8fafc;
        --color-grey-100: #f1f5f9;
        --color-grey-200: #e2e8f0;
        --color-grey-300: #cbd5e1;
        --color-grey-400: #94a3b8;
        --color-grey-500: #64748b;
        --color-grey-600: #475569;
        --color-grey-700: #334155;
        --color-grey-800: #1e293b;
        --color-grey-900: #0f172a;
        --color-grey-950: #020617;

        --border-radius-tiny: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: backgrond-color .3s;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Inter', sans-serif;
        color: var(--color-grey-700);
        line-height: 1;
        font-size: 1.4rem;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    select:disabled,
    input:disabled {
        background-color: var(--color-grey-200);
        color: var(--color-grey-500);
    }

    input:focus,
    textarea:focus,
    select:focus {
        outline: 2px solid var(--color-brand-500);
        outline-offset: -1px;
    }

    button:focus {
        outline: 2px solid var(--color-brand-300);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        /* overflow-wrap: break-word;
        hyphens: auto; */
    }

    img {
        max-width: 100%;
    }

    .text-primary {
        color: var(--color-brand-600);
    }
`;

export default GlobalStyle;
