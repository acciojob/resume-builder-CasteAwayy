const initialState = {
    profile: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        profileImage: "",
    },
    education: [],
    skills: [],
    miniproject: [],
    socials: [],
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case "user/profileCreated":
            return {
                ...state,
                profile: action.payload,
            };
        case "user/educationCreated":
            return {
                ...state,
                education: [...state.education, action.payload],
            };
        case "user/skillsCreated":
            return {
                ...state,
                skills: [...state.skills, action.payload],
            };
        case "user/miniprojectCreated":
            return {
                ...state,
                miniproject: [...state.miniproject, action.payload],
            };
        case "user/socialCreated":
            return {
                ...state,
                socials: [...state.socials, action.payload],
            };
        default:
            return { ...state };
    }
}

export function profileCreated(
    firstName,
    lastName,
    phoneNumber,
    address,
    profileImage
) {
    return {
        type: "user/profileCreated",
        payload: {
            firstName,
            lastName,
            phoneNumber,
            address,
            profileImage,
        },
    };
}

export function educationCreated(
    courseName,
    completionYear,
    college,
    percentage
) {
    return {
        type: "user/educationCreated",
        payload: {
            courseName,
            completionYear,
            college,
            percentage,
        },
    };
}

export function skillsCreated(skills) {
    return {
        type: "user/skillsCreated",
        payload: skills,
    };
}
export function miniprojectCreated(projectName, techstack, description) {
    return {
        type: "user/miniprojectCreated",
        payload: {
            projectName,
            techstack,
            description,
        },
    };
}
export function socialCreated(social) {
    return {
        type: "user/socialCreated",
        payload: social,
    };
}

export default userReducer;
