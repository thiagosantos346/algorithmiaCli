import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width : '90%',
      marginLeft : '5%',
      marginRight : '5%',
    },
    paper: {
      width : '100%',
      margin : 0,
      padding: theme.spacing(0),
      borderRadius : '0px',      
      color: theme.palette.text.secondary,
    },
    selectorLeft : {
      width : '40%',
      textAlign: 'center',
      padding : 0,
    },
    selectorRigth : {
      width : '40%',
      textAlign: 'center',
      padding : 0,
    },
    swapButton : {
      textAlign: 'center',
    },
    container : {
      padding : 0,
      alignItems : 'center',
      alignContent : 'center'
    },
    Input :{
      width : '100%',
      height : '100%'
    }
    
  }));

export default useStyles;