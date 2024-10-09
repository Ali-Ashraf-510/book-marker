var bookmarksList = [];

function addBookmark() {
    var bookmarkName = document.getElementById('name').value;
    var bookmarkUrl = document.getElementById('url').value;

    if (bookmarkName && bookmarkUrl) {
        if (isValidUrl(bookmarkUrl)) {
            var bookmark = {
                name: bookmarkName,
                url: bookmarkUrl,
            };

            bookmarksList.push(bookmark);
            console.log('Bookmark added:', bookmark);
            console.log('All bookmarks:', bookmarksList);
            clear();
            Display();
        } else {
            alert("Please enter a valid URL.");
        }
    } else {
        alert("Please fill out both fields.");
    }
}

function isValidUrl(url) {
    var regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return regex.test(url);
}

function Display() {
    var store = '';
    for (var i = 0; i < bookmarksList.length; i++) {
        store += 
            `<tr>
                <td>${i + 1}</td>
                <td>${bookmarksList[i].name}</td>
                <td><a href="${bookmarksList[i].url}" target="_blank" class="btn btn-sm bg-info">Visit</a></td>
                <td><button class="btn btn-sm bg-danger" onclick="Delete(${i})">Delete</button></td>
            </tr>`;
    }
    document.getElementById('tableBody').innerHTML = store;
}

function clear() {
    document.getElementById('name').value = '';
    document.getElementById('url').value = '';
}

function Delete(i) {
    bookmarksList.splice(i, 1);
    Display();
}
