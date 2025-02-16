import Header from "./Header";
import React from 'react'
function PageNav({ pageNumber }) {
  return (
    <>
      <Header />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",

              padding: "10px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: `${pageNumber === 0 ? "skyblue" : "grey"}`,
            }}
          >
            1
          </span>
          <span>Profile Section</span>
        </div>
        <span
          style={{ height: "2px", background: "grey", width: "100%" }}
        ></span>
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",

              padding: "10px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: `${pageNumber === 1 ? "skyblue" : "grey"}`,
            }}
          >
            2
          </span>
          <span>Education Section</span>
        </div>
        <span
          style={{
            height: "2px",
            background: "grey",
            width: "80%",
            marginRight: "10px",
          }}
        ></span>
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",

              padding: "10px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: `${pageNumber === 2 ? "skyblue" : "grey"}`,
            }}
          >
            3
          </span>
          <span>Skills Section</span>
        </div>
        <span
          style={{ height: "2px", background: "grey", width: "100%" }}
        ></span>
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",

              padding: "10px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: `${pageNumber === 3 ? "skyblue" : "grey"}`,
            }}
          >
            4
          </span>
          <span>Mini Project</span>
        </div>
        <span
          style={{ height: "2px", background: "grey", width: "100%" }}
        ></span>
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",

              padding: "10px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: `${pageNumber === 4 ? "skyblue" : "grey"}`,
            }}
          >
            5
          </span>
          <span>Social</span>
        </div>
      </div>
    </>
  );
}

export default PageNav;
