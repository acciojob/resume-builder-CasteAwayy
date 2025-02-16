import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Miniproject from "./pages/Miniproject";
import Social from "./pages/Social";
import React, { useState } from "react";
import Output from "./pages/Output";

function App() {
    const [pageNumber, setPageNumber] = useState(0);
    console.log(pageNumber);
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate replace to="/homepage" />} />
                <Route
                    path="/homepage"
                    element={<HomePage pageNumber={pageNumber} />}
                >
                    <Route index element={<Navigate replace to="profile" />} />
                    <Route
                        path="profile"
                        element={
                            <Profile
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                            />
                        }
                    />
                    <Route
                        path="education"
                        element={
                            <Education
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                            />
                        }
                    />
                    <Route
                        path="skills"
                        element={
                            <Skills
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                            />
                        }
                    />
                    <Route
                        path="miniproject"
                        element={
                            <Miniproject
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                            />
                        }
                    />
                    <Route
                        path="social"
                        element={
                            <Social
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                            />
                        }
                    />
                </Route>
                <Route
                    path="/output"
                    element={
                        <Output
                            pageNumber={pageNumber}
                            setPageNumber={setPageNumber}
                        />
                    }
                />
                <Route path="*" element={<p>404 NOT FOUND</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
