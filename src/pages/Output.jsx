import { useSelector } from "react-redux";

function Output() {
    const data = useSelector((state) => state.user);
    console.log(data);
    const { profile, education, skills, socials, miniproject } = data;
    return (
        <>
            <div>
                <p>All steps completed - your resume is ready!!</p>
                <button>RESET</button>
                <button>EDIT</button>
                <button>DOWNLOAD/PREVIEW</button>
            </div>
            <div>
                <h1>
                    {profile.firstName} {profile.lastName}
                </h1>
                <p>Address: {profile.address}</p>
                <p>Phone Number: {profile.phoneNumber}</p>
            </div>
            <div>
                <h1>Skills</h1>
                <ul>
                    <li>{skills}</li>
                </ul>
            </div>
            <div>
                <h1>Education</h1>
                {education.map((data) => {
                    return (
                        <div>
                            <h4>College: {data.college}</h4>
                            <p>Graduation Year: {data.completionYear}</p>
                            <p>Course: {data.courseName}</p>
                            <p>Percentage: {data.percentage}</p>
                        </div>
                    );
                })}
            </div>

            <div>
                <h1>mini project</h1>
                {miniproject.map((data) => {
                    return (
                        <div>
                            <h4>Name: {data.projectName}</h4>
                            <p>Description: {data.description}</p>
                            <p>tech stack: {data.techstack}</p>
                        </div>
                    );
                })}
            </div>
            <div>
                <h1>Social Links</h1>
                <ul>
                    <li>
                        <a href="#">{socials}</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Output;
