import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {/* eslint-disable-next-line react/prop-types */}
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="text-center border border-slate-700 rounded-md">
              {index + 1}
            </td>
            <td className="text-center border border-slate-700 rounded-md">
              {book.title}
            </td>

            <td className="text-center border border-slate-700 rounded-md max-md:hidden">
              {book.author}
            </td>

            <td className="text-center border border-slate-700 rounded-md max-md:hidden">
              {book.publishYear}
            </td>

            <td className="text-center border border-slate-700 rounded-md ">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>

                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-800" />
                </Link>

                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-800" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
