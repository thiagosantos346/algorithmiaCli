import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import languages  from '../data/languages';


const LanguageSelectorSource = ({ handleChange }) => (
    <Autocomplete
        id="input-id"
        options={languages}
        getOptionLabel={ option => option.name }
        renderInput={params => <TextField {...params} label="Choise your language input..." variant="outlined" />}
        onInputChange={ handleChange }
    />
)

LanguageSelectorSource.prototype = {
    onInputChange : PropTypes.func.isRequired
}

export default LanguageSelectorSource;