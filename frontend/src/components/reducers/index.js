import { combineReducers }    from 'redux';
import formTranslationTarget  from './formTranslationTarget';
import formTranslationSource  from './formTranslationSource';
import languageSelectorSource from './languageSelectorSource';
import languageSelectorTarget from './languageSelectorTarget';

export default combineReducers({
    formTranslationTarget,
    formTranslationSource,
    languageSelectorSource,
    languageSelectorTarget,
});