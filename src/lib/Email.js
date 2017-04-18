
class Email {

    static fetchGetSimple(_urlString) {
        fetch( _urlString )
        .then( (_fetchedResponse) => {
            _fetchedResponse.json();
        })
        .then( (_nowJsonData) => {
            return _nowJsonData;//set data;
        });
    }

    static send(_mailData ){
        fetch('send', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( _mailData )
        })
        .then( (_fetchedRespons) => {
            _fetchedRespons.json();
        })
        .then( (_nowJsonData) => {
            // _mailData.push(_nowJsonData); //add to data;
        });
    }
}

export default Email;