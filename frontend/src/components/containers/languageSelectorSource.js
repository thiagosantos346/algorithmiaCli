import { connect } from 'react-redux';
import languageSelector from '../visualComponents/languageSelectorSource';


const handleChange = (option) => {
    const startPosition = ('input-id').length;
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

const mapStateToProps = (state, ownProps) => ({
    language : ownProps.language,
    name : ownProps.name 
});

const mapDispatchToProps = dispatch => ({
    onInputChange : object => dispatch(handleChange(object))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(languageSelector);