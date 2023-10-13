import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    text_color: {
        '&:hover': {
            color: '#FFFFFF',
        },
    },

    control: {
        fontWeight: 500,
        display: 'block',
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        color: '#3e3e3e',
        fontSize: theme.fontSizes.sm,

        '&:hover': {
            backgroundColor: '#3e3e3e',
            color: '#FFFFFF',
        },
    },

    linkStyle: {
        fontWeight: 500,
        display: 'block',
        textDecoration: 'none',
        color: '#3e3e3e',
        '&:hover': {
            backgroundColor: '#3e3e3e',
            color: '#FFFFFF',
        },
    },
    linkActive: {
        backgroundColor: '#3e3e3e',
        color: '#FFFFFF',
        borderLeft: `${rem(1)} solid #D7FD52`,

        fontWeight: 500,
        display: 'block',
        textDecoration: 'none',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        paddingLeft: rem(31),
        marginLeft: rem(30),
        fontSize: theme.fontSizes.sm,
    },
    linkActive2: {
        fontWeight: 500,
        display: 'block',
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        fontSize: theme.fontSizes.sm,

        backgroundColor: '#3e3e3e',
        color: '#FFFFFF',
    },
    link: {
        fontWeight: 500,
        display: 'block',
        textDecoration: 'none',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        paddingLeft: rem(31),
        marginLeft: rem(30),
        fontSize: theme.fontSizes.sm,
        color: '#3e3e3e',
        borderLeft: `${rem(1)} solid #3e3e3e`,

        '&:hover': {
            backgroundColor: '#3e3e3e',
            color: '#FFFFFF',
            borderLeft: `${rem(1)} solid #D7FD52`,
        },
    },

    chevron: {
        transition: 'transform 200ms ease',
    },
}))
