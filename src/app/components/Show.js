import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../redux/notesSlice";
import { useRouter } from "next/navigation";
const Show = () => {
    const data = useSelector((notes) => notes.data);
    console.log("data", data);
    const dispatch = useDispatch();
    const router = useRouter();
    const handleDelete = (id) => {
        dispatch(removeData(id));
    };
    return (
        <div className="show">
            {data?.map((note) => (
                <div key={note.id} className="note">
                    <p>{note.data}</p>
                    <button
                        onClick={() => router.push(`/${note.id}`)}
                        className="edit-btn"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(note.id)}
                        className="delete-btn"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};
export default Show;
