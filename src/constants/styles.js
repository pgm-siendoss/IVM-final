export const global = Object.freeze({
    bodyFamily: "'Poppins', 'Segoe UI', 'Roboto', sans-serif",
    displayFamily: "'PP Woodland', serif"
});

export const colors = Object.freeze({
    light: '#FFF',
    medium: '#F4F4F4',
    dark: '#222222',
    gray: '#808080',
    accent: '#96c934',
    primary: '#22b573',
    secondary: '#cc3366',
    base: '#dedede',
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
    bg: colors.base,
    text: colors.dark,
    body: colors.dark,
    accent: colors.primary,
};

export const darkTheme = {
    bg: colors.dark,
    text: colors.light,
    body: colors.dark,
    accent: colors.accent,
};