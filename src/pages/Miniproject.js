import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { miniprojectCreated } from "../resumeSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function Miniproject({ pageNumber, setPageNumber }) {
    const [projectName, setProjectName] = useState("");
    const [techStack, setTechStack] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(miniprojectCreated(projectName, techStack, description));
        setPageNumber(pageNumber + 1);
        navigate("/homepage/social");
    }
    return (
        <>
            <p>Add your Mini Projects</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="projectName"
                        placeholder="projectName"
                        required
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="techStack"
                        placeholder="techStack*"
                        required
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="description*"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <button id="delete">Delete</button>

                    <button id="add_project">Add project</button>
                </div>
                <Navigation
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    to="/homepage/social"
                />
            </form>
        </>
    );
}

export default Miniproject;
