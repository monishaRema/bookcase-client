import { useLoaderData } from "react-router";

const Banner = () => {

  const book = useLoaderData();
  console.log(book)
  
  return (
    <section className="pb-25 pt-45">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl md:text-4xl mb-5">Recently Added Books</h1>
        <p className="text-xl mb-10">See what the community has been adding to their shelves</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex items-center">
            <div className="book-img w-full">
                <img className="w-full h-[400px] md:h-[550px] object-cover rounded" src={book?.cover_photo} alt={book?.book_title} />
            </div>
            <div className="content">
                {book?.book_title} 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
