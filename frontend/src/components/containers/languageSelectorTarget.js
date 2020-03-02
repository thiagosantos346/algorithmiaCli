import { connect } from 'react-redux';
import { setLanguageOutput } from '../actions'
import languageSelector from '../visualComponents/languageSelectorTarget';


const handleChange = (option) => {
    const startPosition = ('output-id').length;
    const id  = parseInt(option.target.id.substring(startPosition));
    const state = {};

    if( ! isNaN(id) ){
        state = {
            language : languages[ id ].language,
            name : languages[ id ].name,
        };
    }else{
        state = {
            language : 'en',
            name : 'English',
        };
    }

    console.log(state);
    return state;
};

const mapStateToProps = state => ({
    language : handleChange(state)
});

const mapDispatchToProps = dispatch => ({
    onInputChange : object => dispatch(setLanguageOutput(object))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(languageSelector);