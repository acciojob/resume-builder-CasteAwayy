import React, { useState } from "react";

function SkillsForm({ id, skillDataLen, setSkillsData }) {
    

    function handleDeleteSkill() {
        setSkillsData((data) => data.filter((item) => item.id !== id));
    }
    function handleAddSkill() {
        const newSkill = {
            id,
            skills,
        };
        setSkillsData((data) => [...data, newSkill]);
    }
    return (
        <div>
           
        </div>
    );
}

export default SkillsForm;
