import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '../input';
import SwapButton from '../swapButton';
import SelectorLanguage from '../selectorLanguage';
import GroupButtons from '../groupButtons'

import GroupButtonsContext from '../groupButtons/groupButtonsContext';

import useStyles from './styles';

export default function CenteredGrid() {
  const classes = useStyles();
  const groupButtonsContext = useContext(GroupButtonsContext);
  const [soucerText, setSourceText] = useState();
  const [ swaped, setSwaped ] = useState(false);
  const [targetText, setTargetText] = useState();

  const [targetLanguage, setTargetLanguage] = useState({
    lastOlder:'Português',
    firstOlder:'Inglês',
    actual:'Francês',
  });

  const [sourceLanguage, setSourceLanguage] = useState({
    lastOlder:'Português',
    firstOlder:'Inglês',
    actual:'Francês',
  });
  

  const handleChangeSoucer = event => {
    setSourceText(event.target.value);
  }

  const handleChangeTarget = event => {
    setTargetText(event.target.value);
  }

  const handleSwapedClick = () => {
    let temp = targetLanguage;
    
    setTargetLanguage(sourceLanguage);
    setSourceLanguage(temp);
    setSwaped(!swaped);
    
  }

  return (
    <Paper className={classes.root}>
      <Grid
        className={classes.container}
        container spacing={0}>
        <Grid container className={classes.paper} >
          <Grid item sm={12}>
            <Grid container spacing={0}>
                <Grid item sm={3}>
                    <GroupButtons
                      pLastOlder={targetLanguage.lastOlder}
                      pFirstOlder={targetLanguage.firstOlder}
                      pActual={targetLanguage.actual}
                    />
                </Grid>
                <Grid item sm={2} className={classes.selectorLeft}>
                    <SelectorLanguage/>
                </Grid>
                <Grid
                  item sm={2}
                  onClick={handleSwapedClick}
                  className={classes.swapButton}>
                  <SwapButton
                      swaped={swaped}
                  />
                </Grid>
                <Grid item sm={3} >
                    <GroupButtons
                      pLastOlder={sourceLanguage.lastOlder}
                      pFirstOlder={sourceLanguage.firstOlder}
                      pActual={sourceLanguage.actual}
                    />
                </Grid>
                <Grid
                  className={classes.selectorRigth}
                  item sm={2}>
                    <SelectorLanguage/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} >
            <Grid container>
              <Grid item sm={6}>
                <Input
                    className={classes.Input}
                    id='source'
                    placeholder=''
                    value={soucerText}
                    onChange={handleChangeSoucer}
                /> 
              </Grid>
              <Grid item sm={6}>
                <Input
                    className={classes.Input}
                    id='target'
                    placeholder=''
                    value={targetText}
                    onChange={handleChangeTarget}
                />  
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}