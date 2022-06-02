export const global = Object.freeze({
    bodyFamily: "'Poppins', sans-serif",
    displayFamily: "'PP Woodland', serif"
});

export const colors = Object.freeze({
    light: '#FFF',
    medium: '#F4F4F4',
    dark: '#222222',
    gray: '#808080',
    accent: '#00061C',
    primary: '#FF7600',
    secondary: '#173300',
    succes: '#00760B',
    danger: '#FF3B00'
});

export const sizes = Object.freeze({
    xs: '0.85rem',
    sm: '1rem',
    base: '1.3rem',
    md: '1.75rem',
    lg: '2rem',
    xl: '4rem',
})

export const lightTheme = {
    bg: colors.light,
    text: colors.dark,
    body: colors.secondary,
    accent: colors.primary,
};

export const darkTheme = {
    bg: colors.dark,
    text: colors.light,
    body: colors.dark,
    accent: colors.accent,
};