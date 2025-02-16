import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";
import { useDispatch } from "react-redux";
import { socialCreated } from "../resumeSlice";
import React, { useState } from "react";

function Social({ pageNumber, setPageNumber }) {
    const [social, setSocial] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(socialCreated(social));
        setPageNumber(pageNumber + 1);
        navigate("/output");
    }
    return (
        <>
            <p>Add social links like linkedin, github etc</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="Social"
                        placeholder="Social Links*"
                        required
                        value={social}
                        onChange={(e) => setSocial(e.target.value)}
                    />
                </div>
                <div>
                    <button id="add_social">Add social</button>
                </div>
                <Navigation
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    to="/output"
                />
            </form>
        </>
    );
}

export default Social;
