import React from "react";
import { useForm } from "../hooks/useForm";

export const SearchInput = () => {
  const [values, handleInputChange] = useForm({
    search: "",
  });

  const { search } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("query", JSON.stringify(search));
  };

  return (
    <form action="/search" onSubmit={handleSubmit}>
      <h2>Encuentra tu juego favorito</h2>
      <div>
        <input
          className="input__icon"
          type="text"
          name="search"
          placeholder="Escribe el juego que quieras buscar..."
          autoComplete="off"
          value={search}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};
