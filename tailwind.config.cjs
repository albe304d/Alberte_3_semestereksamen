/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // (Globale tokens) Når farverne bruges til styling, skriver man eksempelvis xx-pink-700, da bindestregen automatisk tilføjes
      pink: {
        100: "#FEF8FB",
        200: "#FCEAF3",
        300: "#F9D4E6",
        400: "#F7C6DE",
        500: "#F5B8D6",
        600: "#EC78B1",
        700: "#E54392",
        800: "#D81E79",
        900: "#951553",
      },
      sienna: {
        100: "#FFA673",
        200: "#FF7A2D",
        300: "#DB5000",
        400: "#BB4400",
        500: "#A03A00",
        600: "#853000",
        700: "#6E2800",
        800: "#5B2100",
        900: "#4C1B00",
      },
      black: {
        100: "#666666",
        200: "#5A5A5A",
        300: "#4D4D4D",
        400: "#404040",
        500: "#333333",
        600: "#262626",
        700: "#1A1A1A",
        800: "#0D0D0D",
        900: "#000000",
      },
      white: {
        100: "#FFFFFF",
        200: "#F2F2F2",
        300: "#E6E6E6",
        400: "#D9D9D9",
        500: "#CCCCCC",
        600: "#C0C0C0",
        700: "#B3B3B3",
        800: "#A6A6A6",
        900: "#999999",
      },
      check: {
        green: "#2a5f38",
      },

      // Alias tokens/Component-specific tokens
      // tekstfarver
      color_h1: "#A03A00",
      color_h2: "#A03A00",
      overskriftColor: "#A03A00",

      // tokens til components
      footer: "#FCEAF3",
      copyColor: "#5B2100",
      menuBackgroundColor: "#FEF8FB",
      iconColor: "#5B2100",
      // Primary button
      primaryButton: "#D81E79",
      primaryButtonHover: "#951553",
      primaryButtonTextColor: "#FFFFFF",
      primaryButtonHoverTextColor: "#FEF8FB",
      primaryButtonBorder: "#F5B8D6",

      // Secondary button
      secondaryButton: "#F5B8D6",
      secondaryButtonHover: "#FCEAF3",
      secondaryButtonTextColor: "#6E2800",
      secondaryButtonBorder: "#6E2800",

      // Forms
      formBorder: "#5B2100",
      fromPlaceholderTextColor: "#666666",
      formBgColor: "#FEF8FB",
      formFocusBorder: "#5B2100",

      // Cards
      cardsBgColor: "#FFFFFF",

      // Darkmode
      // tekstfarver
      darkColor_h1: "#F5B8D6",
      darkColor_h2: "#F5B8D6",
      darkOverskriftColor: "#F5B8D6",
      // tokens til components
      darkFooter: "#262626",
      darkCopyColor: "#FEF8FB",
      darkMenuBackgroundColor: "#1A1A1A",
      // Cards
      darkCardsBgColor: "#333333",
    },

    fontSize: {
      // Ved styling skriver man eksempelvis text-H3_mobile

      // Fonthieraki til desktop
      H1_desktop: [
        "3.815rem",
        { letterSpacing: "0.08rem", fontWeight: "100", lineHeight: "79.9px" },
      ],
      H2_desktop: [
        "3.052rem",
        {
          letterSpacing: "0.08rem",
          fontWeight: "light",
          lineHeight: "66.5px",
        },
      ],
      H3_desktop: [
        "2.441rem",
        {
          letterSpacing: "0.08rem",
          fontWeight: "medium",
          lineHeight: "53.2px",
        },
      ],
      menulinks_desktop: [
        "1.953rem",
        { letterSpacing: "0.05rem", fontWeight: "book", lineHeight: "42.6px" },
      ],
      body_base: ["1rem", { letterSpacing: "0.05rem", lineHeight: "27px" }],
      body_semibold: [
        "1rem",
        { letterSpacing: "0.05rem", fontWeight: "600", lineHeight: "27px" },
      ],
      body_xs: ["0.8rem", { letterSpacing: "0.05rem", lineHeight: "27px" }],

      // Fonthieraki til mobile
      H1_mobile: [
        "3.052rem",
        { letterSpacing: "0.08rem", fontWeight: "light", lineHeight: "55.6px" },
      ],
      H2_mobile: [
        "1.953rem",
        { letterSpacing: "0.08rem", fontWeight: "light" },
      ],
      H3_mobile: [
        "1.563rem",
        { letterSpacing: "0.08rem", fontWeight: "medium" },
      ],
      menulinks_mobile: [
        "1.563rem",
        { letterSpacing: "0.05rem", fontWeight: "book" },
      ],
      knaptekst: ["1.188rem", { lineHeight: "24.4px" }],
    },

    // Komponenter i Web og mobil
    dropShadow: {
      knapShadow: "4px 4px 4px rgba(13, 13, 13, 0.25)",
      knapHoverShadow: "5px 5px 5px rgba(13, 13, 13, 0.25)",
      billederShadow: "2px 2px 4px rgba(13, 13, 13, 0.25)",
      cardShadow: "4px 4px 4px rgba(13, 13, 13, 0.25)",
      cardHoverShadow: "5px 5px 5px rgba(13, 13, 13, 0.25)",
      popupShadow: "-4px -4px 4px rgba(13, 13, 13, 0.25)",
    },

    borderRadius: {
      billederRadius: "5px",
      cardsRadius: "5px",
      knapperRadius: "12px",
      formRadius: "10px",
      nyhedRadius: "100px",
    },

    extend: {
      padding: {
        small: "0.625rem",
        medium: "1.563rem",
        large: "3.75rem",
        xLarge: "8.125rem",
      },
      margin: {
        small: "0.625rem",
        medium: "1.563rem",
        large: "3.75rem",
        xLarge: "8.125rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
