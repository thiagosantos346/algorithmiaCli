const languageSelectorSource = (state = [], action) => {
    switch (action.type){
        case 'SET_LANGUAGE_INPUT':
            console.log('SET_LANGUAGE_INPUT');
            return [
                state = {
                    id : action.id,
                    language : action.language,
                    name : action.name,
                }
            ]
        
        default:
            return state;
    }
}

export default languageSelectorSource;