document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const cross = document.querySelector('.cross');
    const modal = document.querySelector('.modal');
    const bookShelf = document.querySelector('.books');

    const add = document.createElement('div');
    add.innerHTML = `
        <div class="add">
            <p class="plus">+</p>
            <p class="add-text">Add book</p>
        </div>
    `


    interface BookInterface {
        author: string
        title: string,
        read: boolean
    }

    let books: BookInterface[] = [];

    function openModal() {
        modal?.classList.add('opened');
    };

    function closeModal() {
        modal?.classList.remove('opened');
    }

    function addBook(props: BookInterface) {
        books.push({
            author: props.author,
            title: props.title,
            read: props.read
        });
    }

    function renderBookshelf() {
        bookShelf.innerHTML = ``;

        books.forEach((book) => {
            const el = document.createElement('div');
            el.innerHTML = `
            <div class="book">
                <div>
                    <p class="b-author">${book.author}</p>
                    <p class="b-title">${book.title}</p>
                </div>
                <div class="b-read">
                    <p>Read</p>
                    <input type="checkbox" name="" checked=${book.read} id="">
                </div>
            </div>`

            bookShelf?.appendChild(el);
        })
        add?.addEventListener('click', () => {
            openModal();
        });
        bookShelf?.appendChild(add)
    }

    form?.addEventListener('submit', (e) => {
        e.preventDefault()
        addBook({
            author: e.target[0].value,
            title: e.target[1].value,
            read: e.target[2].value
        });
        renderBookshelf();
        closeModal();
        localStorage.setItem('books', JSON.stringify(books))
    });

    cross?.addEventListener('click', () => {
        closeModal();
    });

    function __init__() {
        if (localStorage.getItem('books')) {
            books = JSON.parse(localStorage.getItem('books'))
        }
        renderBookshelf();
    }

    __init__()
});