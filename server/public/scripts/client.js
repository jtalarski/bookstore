$(document).ready(onReady);

function onReady() {
    console.log("JQ in the house@");
    getBooks();
}

function addBook() {
    console.log('in addBook');
}




function getBooks() {
    $.ajax({
            method: 'GET',
            url: '/books'
        }).then(function(response) {
            console.log('back from GET with:', response);
            let el = $('#booksOut');
            el.empty();
            for (let i = 0; i < response.length; i++) {
                el.append(`<li>
            ${response[i].title}
            ${response[i].author}
            ${response[i].published.split( 'T') [0]}
            </li>`)
            }

        }).catch(function(err) {
            alert('error!');
            console.log(err);
        }) // end ajax
}; // end get books