import "./TodoList.css";
import TodoItem from "./TodoItem";
import {useContext, useMemo, useState} from "react";
import {TodoContext, TodoStateContext} from "../App";
const TodoList = () => {
    const {todo} = useContext(TodoStateContext);
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    };


    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <input
                className="searchbar"
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id} {...it}/>
                ))}
            </div>
        </div>
    );
}
TodoList.defaultProps = {
  todo: [],
};
export default TodoList;