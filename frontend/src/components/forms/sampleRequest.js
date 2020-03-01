
export default function requestion(text, target_language ){
    let content = {}
    let url = 'http://localhost:3001/run/';
    let data = {
        "parameters" : {
        "key" : "",
        "algorithmo" : "translation/GoogleTranslate/0.1.1?timeout=300"
        },
        "input" : {
        "action": "translate",
        "text": text,
        "target_language" : target_language
        }
    }

    content = {
        headers: {
            "Content-Type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
        },
        method:"POST",
        mode: 'cors',
        body : JSON.stringify(data)
    };
    return new Request(url, content);

}