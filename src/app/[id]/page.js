"use client";
import Link from "next/link";
import "./styling/style.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/notesSlice";
import { useRouter } from "next/navigation";
const Edit = ({ params }) => {
    const id = params.id;
    const dispatch = useDispatch();
    const router = useRouter();
    const data = useSelector((data) => data.data);
    const dataToBeEdited = data?.find((note) => note.id === id);
    const [dataToBeDisplayed, setDataToBeDisplayed] = useState(
        dataToBeEdited.data
    );
    return (
        <div className="edit">
            <h1>Edit Your Data</h1>
            <input
                type="text"
                className="input-field"
                value={dataToBeDisplayed}
                onChange={(e) => setDataToBeDisplayed(e.target.value)}
            />
            <button
                className="submit-btn"
                onClick={() => {
                    dispatch(editData({ id: id, data: dataToBeDisplayed }));
                    router.push("/");
                }}
            >
                Submit Your Text
            </button>
            <Link href="/">Go Back</Link>
        </div>
    );
};
export default Edit;
