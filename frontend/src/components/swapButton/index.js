import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from './styles';
import SwapIcon from './swapIcon';


function swapButton(props) {
    const classes = makeStyles();
    return (
        <IconButton  className={classes.root} >
            <SwapIcon 
                swaped={props.swaped}
            />
        </IconButton>
    )
}




export default swapButton;