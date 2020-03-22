import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(0),
      width : '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(0),
    },
}));

export default useStyles;