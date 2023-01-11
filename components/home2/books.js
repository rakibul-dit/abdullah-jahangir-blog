import BookCard from "../card/book2";

export default function HomeBookList({ books }) {
  return (
    <section className="h-sec h-books opt_home_books">
      <div className="page-width">
        <div className="box">
          <div className="row row-r">
            {books &&
              books.length &&
              books.map((book) => (
                <div className="col col-r s12 m6 l4 xl2" key={book.id}>
                  <BookCard book={book} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
