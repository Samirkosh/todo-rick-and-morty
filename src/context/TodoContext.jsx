import { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "change":
      return {
        ...state,
        title: action.payload,
      };
    case "add":
      if (state.updating) {
        const updateTodos = state.todos.map((item) =>
          item.id === state.updateingId ? { ...item, title: state.title } : item
        );
        return {
          ...state,
          todos: updateTodos,
          updating: false,
          title: "",
          updateingId: null,
        };
      } else {
        const newTodo = {
          title: state.title,
          id: Date.now(),
        };
        return {
          ...state,
          todos: [...state.todos, newTodo],
          title: "",
        };
      }

    case "delete":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case "update":
      return {
        ...state,
        updateingId: action.payload.id,
        updating: true,
        title: action.payload.title,
      };

    case "fetch_success":
      return {
        ...state,
        data: action.payload,
      };

    case "fetch_error":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  title: "",
  todos: [],
  updating: false,
  updateingId: null,
  data: null,
  error: null,
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: "add" });
  };

  const deleteHandler = (todoId) => {
    dispatch({ type: "delete", payload: todoId });
  };

  const updateHandler = (item) => {
    dispatch({ type: "update", payload: item });
  };

  const changeHandler = (e) => {
    dispatch({ type: "change", payload: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        dispatch({ type: "fetch_success", payload: data });
      } catch (error) {
        dispatch({ type: "fetch_error", payload: error.message });
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    state,
    submitHandler,
    deleteHandler,
    updateHandler,
    changeHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
