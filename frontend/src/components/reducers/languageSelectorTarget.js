const languageSelectorTarget = (state = [], action) => {
    switch (action.type){
        case 'SET_LANGUAGE_OUTPUT':
            console.log('SET_LANGUAGE_OUTPUT');
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

export default languageSelectorTarget;