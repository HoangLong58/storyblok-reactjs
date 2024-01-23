import { storyblokEditable } from "@storyblok/react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { getAllToDoAsync } from "../../services/todos.service";
import { ToDoResponse } from "../../interfaces/TodoInterface";

export const PsychologistList = ({ blok }) => {
  const [todos, setTodos] = useState<ToDoResponse[]>([]);

  useEffect(() => {
    getToDos();
  }, []);

  const getToDos = async () => {
    try {
      const { data } = await getAllToDoAsync();

      setTodos(data);
    } catch (err: any) {
      console.log("ERROR: Something went wrong when get all to do!");
    }
  };

  return todos.map((todo, index) => (
    <div
      {...storyblokEditable(blok)}
      className="column feature text-red-700"
      key={index}
      onClick={() => console.log("[Name nè]:>>", todo.name)}
    >
      {blok.name + todo.name}

      <Link
        to={`/todo${todo.id}`}
        className="w-1/3 p-5 bg-purple-600 ease-in duration-300 rounded-3xl cursor-pointer text-center text-white font-bold tracking-wider hover:bg-purple-400 hover:scale-110"
      >
        Go to {todo.name}
      </Link>
    </div>
  ));
};
