/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w[500px] h[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gape-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="m-2"> {book.title}</h2>
        </div>

        <div className="flex justify-start items-center gape-x-2">
          <BiUserCircle className="text-red-300 text-2xl " />
          <h2 className="m-2"> {book.author}</h2>
        </div>

        <p className="w-[400px] text-center m-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit magnam
          repellendus iure dolorem voluptates eveniet rerum deleniti, fugiat
          nostrum, debitis natus autem porro recusandae minus aliquid libero!
          Quis, sit. Voluptatem?
        </p>
      </div>
    </div>
  );
};

export default BookModal;
