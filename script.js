function searchBook() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let bookList = document.getElementById("bookListSearch");
    let books = bookList.getElementsByTagName("li");

    for (let i = 0; i < books.length; i++) {
        let book = books[i].textContent.toLowerCase();
        if (book.includes(input)) {
            books[i].style.display = "";
        } else {
            books[i].style.display = "none";
        }
    }
}
