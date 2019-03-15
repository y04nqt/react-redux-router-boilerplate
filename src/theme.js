import { createMuiTheme } from '@material-ui/core/styles';

const GREEN = "#009344"
const BLUE = "#2e7f9d"
const WHITE = "#FFFFFF"

export default createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            // 3 VUE Green
            main: GREEN,
            contrastText: WHITE
        },
        secondary: {
            main: WHITE,
            contrastText: BLUE
        }
    }
})
