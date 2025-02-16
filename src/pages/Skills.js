import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { skillsCreated } from "../resumeSlice";
import { useDispatch } from "react-redux";

function Skills({ pageNumber, setPageNumber }) {
    const [skills, setSkills] = useState("");
    // const [skillsData, setSkillsData] = useState([{}]);
    // const skillDataLen = skillsData.length;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(skillsData);
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(skillsCreated(skills));
        setPageNumber(pageNumber + 1);
        navigate("/homepage/miniproject");
    }
    return (
        <>
            <p>Add your Skills</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="skill"
                        placeholder="Skill*"
                        required
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                    />
                    <div>
                        <button id="delete_skill">Delete</button>

                        <button id="add_skill">Add skill</button>
                    </div>
                </div>
                <Navigation
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    to="/homepage/miniproject"
                />
            </form>
        </>
    );
}

export default Skills;
