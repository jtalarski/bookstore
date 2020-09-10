$(document).ready(onReady);

function onReady() {
    console.log("JQ in the house@");
    $(document).on('click', '#addBtn', addBook);
    getBooks();
}

function addBook() {
    console.log('in addBook');

    let objectToSend = {
            title: $('#titleIn').val(),
            author: $('#authorIn').val(),
            published: $('#publishedIn').val()
        } // end obejctToSend

    $.ajax({
            method: "POST",
            url: '/books',
            data: objectToSend
        }).then(function(response) {
            console.log('back from POST with:', response);
            // clear inputs
            $('#titleIn').val('');
            $('#authorIn').val('');
            $('#publishedIn').val('');
            getBooks();
        }).catch(function(err) {
            console.log(err);
            alert('error');
        }) // end AJAX post
} // end addBook




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