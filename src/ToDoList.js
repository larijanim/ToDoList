import { useState } from "react";
export default function ToDoList() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleAddClick = () => {
    setList([...list, { title, checked: false }]);
    setTitle("");
  };
  const handleDelete = (t) => {
    setList((preList) => {
      return preList.filter((item) => item.title !== t);
    });
  };
  const HandleCheckBox = (t, index) => {
    setList((preList) =>
      preList.map((item, idx) =>
        index === idx ? { title: t, checked: !item.checked } : item
      )
    );
  };
  return (
    <div className="parent">
      <input
        type="text"
        value={title}
        onChange={(e) => handleInputChange(e)}
        placeholder="addNew Task"
      ></input>
      <button onClick={() => handleAddClick()}>Add</button>
      <div className="wrapper">
        {list?.map((t, index) => {
          return (
            <div
              key={index}
              className="item"
              style={{ backgroundColor: t.checked ? "lightgreen" : "" }}
            >
              <input
                className="check"
                type="checkbox"
                checked={t.checked}
                onChange={() => HandleCheckBox(t.title, index)}
              ></input>{" "}
              <span
                style={{ textDecoration: t.checked ? "underline red" : "" }}
              >
                {t.title}
              </span>
              <button className="button" onClick={() => handleDelete(t.title)}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
