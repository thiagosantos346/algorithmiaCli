import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './styles';
import Languages from "../../services/languages";

export default function SelectorLanguage() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState('');

  const handleChange = event => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
    <Select
        labelId="select-language-select-label"
        id="select-language-select"
        value={language}
        onChange={handleChange}
        autoWidth={true}
    >
        {Languages.map( (lang, index) => (
          <MenuItem 
            key={index}
            value={lang.language}>
              {lang.name}
          </MenuItem>
        ))}
    </Select>
    </FormControl>
  );
}
