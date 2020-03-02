import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import languages  from '../data/languages';


const LanguageSelectorTarget = ({ handleChange }) => (
    <Autocomplete
        id="output-id"
        options={languages}
        getOptionLabel={ option => option.name }
        renderInput={params => <TextField {...params} label="Choise your language output..." variant="outlined" />}
        onInputChange={ handleChange }
    />
)

LanguageSelectorTarget.prototype = {
    onInputChange : PropTypes.func.isRequired,
}

export default LanguageSelectorTarget;