import React from "react";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    preload();
  }, []);

  const [state, setState] = useState([]);
  const [todo, setTodo] = useState("");

  const preload = async () => {
    try {
      const res = await axios.get("/api/todo");
      setState(res.data);
    } catch (error) {
      alert("Couldn't find any Todos! ");
    }
  };

  const lists = () => (
    <div className="row">
      <div className="col-sm-12 col-md-4 offset-md-2 col-lg-4 offset-lg-2 border border-danger p-4">
        <h3 className="text-center mb-4">Draggable List</h3>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <ul
                className="list-group"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {state.map((item, index) => (
                  <Draggable
                    key={item._id}
                    draggableId={item._id + ""}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-start align-items-center"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="ms-2 me-auto">
                          <span className="font-weight-bold mr-5">
                            {item.title}
                          </span>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={index}
                            value={index}
                            checked={item.selected}
                            onChange={(e) => {
                              const target = e.target.value;
                              const val = state[target].selected;
                              // console.log(val);
                              let tmp = Array.from(state);
                              tmp[target].selected = !val;
                              // console.log(tmp[target]);
                              setState(tmp);
                              // console.log(state);
                            }}
                          />
                        </div>

                        <span>
                          {/* <i className="bi bi-trash text-danger" /> */}
                          <button
                            className="btn btn-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDelete(item._id);
                            }}
                          >
                            <i className="bi bi-trash text-danger" />
                          </button>
                        </span>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div
        className="col-sm-12 col-md-4 col-lg-4 border border-info p-4"
        style={{ marginLeft: "10px" }}
      >
        <h3 className="text-center mb-4">NON-Draggable List</h3>

        <ul className="list-group">
          {state.map(
            (item, index) =>
              item.selected && (
                <li className="list-group-item" key={index}>
                  {item.title}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );

  const handleDragEnd = (result) => {
    // console.log(result);
    if (!result.destination) return;
    const items = Array.from(state);
    const [recordedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItem);

    setState(items);
    // console.log(state);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todo/${id}`);
      preload();
    } catch (error) {
      if (`Error! ${error.response.data.err}`) {
        alert(error.response.data.err);
      } else {
        alert(`Error ${error.response.status}: ${error.response.statusText}`);
      }
    }
  };

  const addNewTodoForm = () => (
    <div className="row">
      <div className="col-md-8 offset-md-2 mb-4 form-group">
        <label htmlFor="newtodo">Add a New Todo Item</label>
        <input
          type="text"
          className="form-control"
          name="newtodo"
          id="newtodo"
          value={todo}
          placeholder="Add New Todo"
          required
          onChange={handleChange}
        />

        <button
          className="btn btn-block btn-outline-primary mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );

  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo === "" || todo === null) {
      alert("Write something in the add new form first!");
      return;
    }
    const temp = {
      title: todo,
    };
    try {
      await axios.post("/api/todo", temp);
      setTodo("");
      preload();
    } catch (error) {
      if (`Error! ${error.response.data.err}`) {
        alert(error.response.data.err);
      } else {
        alert(`Error ${error.response.status}: ${error.response.statusText}`);
      }
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center m-4 font-weight-bold text-uppercase">
          DRAG TO DO{" "}
          <span className="text-lowercase font-weight-normal">V1.0.1</span>
        </h1>
        {addNewTodoForm()}
        {lists()}
      </div>
    </>
  );
};

export default Home;