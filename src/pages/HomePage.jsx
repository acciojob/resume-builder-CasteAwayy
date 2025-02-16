import { Outlet } from "react-router";
import PageNav from "../components/PageNav";

function HomePage({ pageNumber }) {
  return (
    <>
      <PageNav pageNumber={pageNumber} />
      <Outlet />
    </>
  );
}

export default HomePage;
