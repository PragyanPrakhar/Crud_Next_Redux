"use client";
// import "./styling/style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/notesSlice";
const Create = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const handleAddItem = () => {
        dispatch(addData(text));
        setText("");
    };
    return (
        <div className="create">
            <input
                type="text"
                placeholder="Write your text"
                className="input-field"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddItem} className="submit-btn">
                Submit Your Text
            </button>
        </div>
    );
};
export default Create;
