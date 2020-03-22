import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      alignItems: 'center',
      textAlign : 'center',
      width: '100%',
      height: '100%',
    },
    input: {
      padding: '1%',
      paddingBottom :'0',
    },
}));


export default useStyles;