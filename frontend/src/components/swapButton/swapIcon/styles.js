import { makeStyles } from '@material-ui/core/styles';

const rotate = 180;

const useStyles = makeStyles({
  SwapHorizIcon : {
    transform : props =>
      props.swaped 
        ? `rotate(${rotate}deg)` 
        : `rotate(${rotate * 2}deg)`,
    transition: 'transform 0.5s',
  }
});

export default useStyles;