import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './styles';
import Languages from "../../services/languages";
import Select from '@material-ui/core/Select';

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
