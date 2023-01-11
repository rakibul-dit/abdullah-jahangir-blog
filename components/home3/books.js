import SectionHeader from "../section-header2";
import BookCard from "../card/book3";

export default function HomeBookList({ books }) {
  return (
    <section className="h-sec h3-books">
      <div className="page-width">
        <div className="box">
          <SectionHeader //
            title="বই সমূহ"
            link="/book/"
          />

          <div className="row row-r">
            {books &&
              books.length &&
              books.map((book) => (
                <div className="col col-r s12 l6 xl4" key={book.id}>
                  <BookCard book={book} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
