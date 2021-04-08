import base from "@reflexjs/preset-base"
import "fontsource-playfair-display/800-normal.css"
import "fontsource-playfair-display/600-normal.css"
import "fontsource-open-sans/300-normal.css"
import "fontsource-open-sans/400-normal.css"
import "fontsource-open-sans/600-normal.css"

export default {
    preset: base, // highlight-line
    useColorSchemeMediaQuery: false,
    useLocalStorage: false,
    colors: {
        text: "#191924",
        background: "#fff",
        heading: "#07070a",
        primary: "#06f",
        primaryHover: "#005ae0",
        secondary: "#07070a",
        secondaryHover: "#191924",
        accent: "#fb3640",
        accentHover: "#fa0f1b",
        muted: "#f6f6f6",
        mutedHover: "#ebebeb",
        border: "#ebece9",
        borderHover: "#b9bdb3",
        modes: {
            light: {
                text: "#191924",
                background: "#fff",
                heading: "#07070a",
                primary: "#06f",
                primaryHover: "#005ae0",
                secondary: "#07070a",
                secondaryHover: "#191924",
                accent: "#fb3640",
                accentHover: "#fa0f1b",
                muted: "#f6f6f6",
                mutedHover: "#ebebeb",
                border: "#ebece9",
                borderHover: "#b9bdb3",
                slxbutton: "#191924",
                    },
            dark: {
                text: "#fff",
                background: "#07070a",
                heading: "#fff",
                primary: "#06f",
                primaryHover: "#005ae0",
                secondary: "#07070a",
                secondaryHover: "#191924",
                accent: "#fb3640",
                accentHover: "#fa0f1b",
                muted: "#f6f6f6",
                mutedHover: "#ebebeb",
                border: "#ebece9",
                borderHover: "#b9bdb3",
                slxbutton: "#fb3640",
            },
        },
    },
    fonts: {
        body: '"Open Sans", sans-serif',
        heading: "Playfair Display, serif",
    },
    h5: {
        fontFamily: "body",
    },
    p: {
        opacity: "0.6",
    },
    button: {
        primary: {
            bg: "#191924",
            color: "white",
            borderColor: "#191924",
            "&:hover, &:focus": {
              bg: "secondaryHover",
              color: "white",
              borderColor: "#191924",
            }
        },
    },
}
