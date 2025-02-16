import { Link, useNavigate } from "react-router-dom";
import React from 'react'
function Navigation({ pageNumber, setPageNumber, to }) {
    const navigate = useNavigate();
    return (
        <div>
            <button
                id="back"
                onClick={(e) => {
                    e.preventDefault();
                    setPageNumber(pageNumber - 1);
                    navigate(-1);
                }}
                disabled={to === "/homepage/education"}
            >
                Back
            </button>
            <button
                id="next" 
                onClick={(e) => {
                    e.preventDefault();
                    setPageNumber(pageNumber + 1);
                    navigate(to);
                }}
            >
                Next
            </button>
            <button type="submit" id="save_continue">
                Save and Continue
            </button>
        </div>
    );
}

export default Navigation;
