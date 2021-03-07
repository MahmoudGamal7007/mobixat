import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect } from "react";
import "tailwindcss/dist/tailwind.css";
import Loader from "../components/partials/loader.partial";
export default function Home({ launches }) {
  useEffect(() => {
    // console.log("Launches", launches);
  });
  // const t = gql`kklgf`;
  return (
    <>
      <div id="Home">
        <div className="w-full flex justify-center py-5">
          <div className="container">
            {launches.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>
      </div>

      <Loader showOrHide />
    </>
  );
}

export const getServerSideProps = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      props: {
        launches: ["data"],
      },
    });
  });
};
