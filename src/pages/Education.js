import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router";
import { educationCreated } from "../resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import EducationForm from "../components/EducationForm";

function Education({ pageNumber, setPageNumber }) {
    const [courseName, setCourseName] = useState("");
    const [completionYear, setCompletionYear] = useState("");
    const [college, setCollege] = useState("");
    const [percentage, setPercentage] = useState("");
    // const [educationData, setEducationData] = useState([
    //     {
    //         id: 1,
    //     },
    // ]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user);
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(
            educationCreated(courseName, completionYear, college, percentage)
        );
        setPageNumber(pageNumber + 1);
        navigate("/homepage/skills");
    }
    console.log(data);
    return (
        <>
            <p>Add your Education Details</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="courseName"
                        placeholder="Course Name*"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="completionYear"
                        placeholder="Completion Year*"
                        value={completionYear}
                        onChange={(e) => setCompletionYear(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="college"
                        placeholder="College/School*"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="percentage"
                        placeholder="Percentage*"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        required
                    />
                    <button id="delete">Delete</button>
                    <button
                        id="add_education"
                        onClick={() =>
                            setEducationData((form) => [
                                ...form,
                                {
                                    id: idx + 1,
                                },
                            ])
                        }
                    >
                        Add Education
                    </button>
                </div>
                <Navigation
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    to="/homepage/skills"
                />
            </form>
        </>
    );
}

export default Education;
