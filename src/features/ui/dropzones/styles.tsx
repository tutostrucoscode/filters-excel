import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles(() => ({
    wrapper: {
        position: 'relative',
        marginBottom: rem('30px'),
    },
    dropzone: {
        borderWidth: rem('1px'),
        paddingBottom: rem('50px'),
    },
    control: {
        position: 'absolute',
        width: rem('250px'),
        left: `calc(50% - ${rem('125px')})`,
        bottom: rem('-20px'),
    },
}))
