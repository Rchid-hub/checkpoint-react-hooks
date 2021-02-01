import React, { useState } from "react";

import Modal from "react-modal";

import "./AddMovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ AddAnewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: "",
    date: "",
    rating: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btnAdd" onClick={openModal}>
        Add a Movie.
      </button>
      <Modal
        className="movieAddInterface"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1>Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" name="name" onChange={handleChange} required />
          <label>Movie Rate</label>
          <input type="text" name="rating" onChange={handleChange} required />
          <label>Movie Release Date</label>
          <input type="text" name="date" onChange={handleChange} required />
          <label>Movie Image</label>
          <input type="url" name="image" onChange={handleChange} required />
          <label>Movie Description</label>
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            required
          />
        </form>
        <div className="controllers">
        <button
          className="btnsubmit"
          onClick={() => {
            console.log(newMovie)
            AddAnewMovie(newMovie);
            closeModal();
          }}
        >
          Submit
        </button>
        <button
        className="btnclose" 
        onClick={closeModal}>
          close
        </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddMovie;
