import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import makeStyles from './styles';

import GroupButtonsContext from './groupButtonsContext';


export default function GroupButtons({ pActual, pFirstOlder, pLastOlder}) {
  const classes = makeStyles();
  const [actual, setActual] = useState(pActual);
  const [firstOlder, setFirstOlder] = useState(pFirstOlder);
  const [lastOlder, setLastOlder] = useState(pLastOlder);

  const handleUpdateAllValues = (values)=>{
    setActual(values.actual);
    setFirstOlder(values.firstOlder);
    setLastOlder(values.lastOlder);
  }

  const firstOlderHanleClick = () =>{
    let value = firstOlder;
    setFirstOlder(actual);
    setActual(value);
  }
  const lastOlderHanleClick = () =>{
    let value = lastOlder;
    setLastOlder(actual);
    setActual(value);
  }


  return (
    <GroupButtonsContext.Provider value={{ handleUpdateAllValues, actual, firstOlder, lastOlder }}>
      <ButtonGroup
        className={classes.root}
        variant="text"
        aria-label="text primary button group">
        <Button color='primary' value={actual} >{actual}</Button>
        <Button onClick={firstOlderHanleClick} >{firstOlder}</Button>
        <Button onClick={lastOlderHanleClick} >{lastOlder}</Button>
      </ButtonGroup>
    </GroupButtonsContext.Provider>
  );
}