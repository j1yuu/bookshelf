document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.form');
    var cross = document.querySelector('.cross');
    var modal = document.querySelector('.modal');
    var bookShelf = document.querySelector('.books');
    var add = document.createElement('div');
    add.innerHTML = "\n        <div class=\"add\">\n            <p class=\"plus\">+</p>\n            <p class=\"add-text\">Add book</p>\n        </div>\n    ";
    var books = [];
    function openModal() {
        modal === null || modal === void 0 ? void 0 : modal.classList.add('opened');
    }
    ;
    function closeModal() {
        modal === null || modal === void 0 ? void 0 : modal.classList.remove('opened');
    }
    function addBook(props) {
        books.push({
            author: props.author,
            title: props.title,
            read: props.read
        });
    }
    function renderBookshelf() {
        bookShelf.innerHTML = "";
        books.forEach(function (book) {
            var el = document.createElement('div');
            el.innerHTML = "\n            <div class=\"book\">\n                <div>\n                    <p class=\"b-author\">".concat(book.author, "</p>\n                    <p class=\"b-title\">").concat(book.title, "</p>\n                </div>\n                <div class=\"b-read\">\n                    <p>Read</p>\n                    <input type=\"checkbox\" name=\"\" checked=").concat(book.read, " id=\"\">\n                </div>\n            </div>");
            bookShelf === null || bookShelf === void 0 ? void 0 : bookShelf.appendChild(el);
        });
        add === null || add === void 0 ? void 0 : add.addEventListener('click', function () {
            openModal();
        });
        bookShelf === null || bookShelf === void 0 ? void 0 : bookShelf.appendChild(add);
    }
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
        e.preventDefault();
        addBook({
            author: e.target[0].value,
            title: e.target[1].value,
            read: e.target[2].value
        });
        renderBookshelf();
        closeModal();
        localStorage.setItem('books', JSON.stringify(books));
    });
    cross === null || cross === void 0 ? void 0 : cross.addEventListener('click', function () {
        closeModal();
    });
    function __init__() {
        if (localStorage.getItem('books')) {
            books = JSON.parse(localStorage.getItem('books'));
        }
        renderBookshelf();
    }
    __init__();
});
