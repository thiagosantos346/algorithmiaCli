import React from 'react';
import PropTypes from 'prop-types';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import makeStyles from './styles';

function swapIcon(props) {
    const { swaped } = props;
    const classes = makeStyles(props);
    return (
        <SwapHorizIcon
            className={classes.SwapHorizIcon}
        />
    )
};

swapIcon.propTypes = {
    swaped: PropTypes.bool.isRequired,
};

export default swapIcon;
