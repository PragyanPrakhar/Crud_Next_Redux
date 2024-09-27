"use client"; //Always On Top
import Create from "./components/Create";
import Show from "./components/Show";
import "./stylings/main.scss";

export default function Home() {
    return (
        <div className="mainContainer">
            <Create />
            <Show />
        </div>
    );
}
