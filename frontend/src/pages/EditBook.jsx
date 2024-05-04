// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(`something went wrong!!: ${error.message}`, {
          variant: "error",
        });
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(`something went wrong!!: ${error.message}`, {
          variant: "error",
        });
        console.log(error.message);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">EditBook</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            className="border-2 text-gray-500 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            className="border-2 text-gray-500 w-full"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label className="text-xl mr-4 text-gray-500">PublishYear</label>
          <input
            type="text"
            className="border-2 text-gray-500 w-full"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditBook;
