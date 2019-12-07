import React from 'react';

export const themes = {
    default: {
        /* THIS THEME USES SPOTIFY'S COLOR AS ITS SECONDARY (2) */

        /* THE VERYSIMILAR GREEN HAS BEEN MODIFIED FROM THE GREEN IN THE URL BELOW */

        /* Palette URL: http://paletton.com/#uid=74E170kvvwqjjDVoCyMy5pdCOjQ */

        /* As hex codes */
        /* Main Primary color */
        colorprimary0: "#6C0DAC",
        colorprimary1: "#9654C2",
        colorprimary2: "#7E31B2",
        colorprimary3: "#530887",
        colorprimary4: "#41056A",
        /* Main Secondary color (1) */
        colorsecondary10: "#FF3004",
        colorsecondary11: "#FF8065",
        colorsecondary12: "#FF5D3B",
        colorsecondary13: "#C92300",
        colorsecondary14: "#9E1B00",
        /* Main Secondary color (2) */
        colorsecondary20: "#1ED760",
        colorsecondary21: "#6FE89C",
        colorsecondary22: "#43DE7D",
        colorsecondary23: "#00D14E",
        colorsecondary24: "#009C3A",
        /* Main Complement color */
        colorcomplement0: "#FFFA04",
        colorcomplement1: "#FFFC65",
        colorcomplement2: "#FFFB3B",
        colorcomplement3: "#C9C500",
        colorcomplement4: "#9E9B00",
        /* As RGBa codes */
        /* Main Primary color */
        rgbarimary0: "rgba(108, 13, 172, 1)",
        rgbaprimary1: "rgba(150, 84, 194, 1)",
        rgbaprimary2: "rgba(126, 49, 178, 1)",
        rgbaprimary3: "rgba(83, 8, 135, 1)",
        rgbaprimary4: "rgba(65, 5, 106, 1)",
        /* Main Secondary color (1) */
        rgbasecondary10: "rgba(255, 48, 4, 1)",
        rgbasecondary11: "rgba(255, 128, 101, 1)",
        rgbasecondary12: "rgba(255, 93, 59, 1)",
        rgbasecondary13: "rgba(201, 35, 0, 1)",
        rgbasecondary14: "rgba(158, 27, 0, 1)",
        /* Main Secondary color (2) */
        rgbasecondary20: "rgba(3, 186, 71, 1)",
        rgbasecondary21: "rgba(81, 205, 127, 1)",
        rgbasecondary22: "rgba(44, 191, 99, 1)",
        rgbasecondary23: "rgba(0, 146, 54, 1)",
        rgbasecondary24: "rgba(0, 115, 43, 1)",
        /* Main Complement color */
        rgbacomplement0: "rgba(255, 250, 4, 1)",
        rgbacomplement1: "rgba(255, 252, 101, 1)",
        rgbacomplement2: "rgba(255, 251, 59, 1)",
        rgbacomplement3: "rgba(201, 197, 0, 1)",
        rgbacomplement4: "rgba(158, 155, 0, 1)"

        /* Generated by Paletton.com © 2002 - 2014 */

        /* http://paletton.com */

    },
    alternate: {
        /* THIS THEME USES SPOTIFY'S COLOR AS ITS PRIMARY */

        /* Palette URL: http://paletton.com/#uid=72X170kryIIgFQrmlM7CfFKDMr4 */

        /* As hex codes */
        /* Main Primary color */
        colorprimary0: "#1ED760",
        colorprimary1: "#6FE89C",
        colorprimary2: "#43DE7D",
        colorprimary3: "#00D14E",
        colorprimary4: "#009C3A",
        /* Main Secondary color (1) */
        colorsecondary10: "#4237D3",
        colorsecondary11: "#867FE5",
        colorsecondary12: "#6157DB",
        colorsecondary13: "#2316CC",
        colorsecondary14: "#190F96",
        /* Main Secondary color (2) */
        colorsecondary20: "#FFCD24",
        colorsecondary21: "#FFE17A",
        colorsecondary22: "#FFD64D",
        colorsecondary23: "#FFC500",
        colorsecondary24: "#D8A600",
        /* Main Complement color */
        colorcomplement0: "#FF4A24",
        colorcomplement1: "#FF917A",
        colorcomplement2: "#FF6C4D",
        colorcomplement3: "#FF2C00",
        colorcomplement4: "#D82500",
        /* As RGBa codes */
        /* Main Primary color */
        rgbaprimary0: "rgba(30, 215, 99, 1)",
        rgbaprimary1: "rgba(111, 232, 156, 1)",
        rgbaprimary2: "rgba(67, 222, 125, 1)",
        rgbaprimary3: "rgba(0, 209, 78, 1)",
        rgbaprimary4: "rgba(0, 156, 58, 1)",
        /* Main Secondary color (1) */
        rgbasecondary10: "rgba(66, 55, 211, 1)",
        rgbasecondary11: "rgba(134, 127, 229, 1)",
        rgbasecondary12: "rgba(97, 87, 219, 1)",
        rgbasecondary13: "rgba(35, 22, 204, 1)",
        rgbasecondary14: "rgba(25, 15, 150, 1)",
        /* Main Secondary color (2) */
        rgbasecondary20: "rgba(255, 205, 36, 1)",
        rgbasecondary21: "rgba(255, 225, 122, 1)",
        rgbasecondary22: "rgba(255, 214, 77, 1)",
        rgbasecondary23: "rgba(255, 197, 0, 1)",
        rgbasecondary24: "rgba(216, 166, 0, 1)",
        /* Main Complement color */
        rgbacomplement0: "rgba(255, 74, 36, 1)",
        rgbacomplement1: "rgba(255, 145, 122, 1)",
        rgbacomplement2: "rgba(255, 108, 77, 1)",
        rgbacomplement3: "rgba(255, 44, 0, 1)",
        rgbacomplement4: "rgba(216, 37, 0, 1)"

        /* Generated by Paletton.com © 2002 - 2014 */

        /* http://paletton.com */
    },
};

export const ThemeContext = React.createContext(
    themes.default
);