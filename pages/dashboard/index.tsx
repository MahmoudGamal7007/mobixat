import { GetStaticProps } from "next";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "../../components/partials/loader.partial";
export default function GlossaryIndex(props) {
  // Initial
  useEffect(() => {
    // console.log(props);
  });

  // Render
  return (
    <>
      <div className="container mx-auto">
        <Link href={`/dashboard/glossary-maker`}>
          <a>Enter New Glossary</a>
        </Link>
      </div>
      <div className="container mx-auto">
        <Link href={`/dashboard/specs-table-filler`}>
          <a>Enter New Mobile Specs Table</a>
        </Link>
      </div>
      <div className="container mx-auto">
        <Link href={`/dashboard/spec-name-maker`}>
          <a>Enter New Mobile Spec Name</a>
        </Link>
      </div>
      <Loader showOrHide={false} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  return new Promise((resolve, reject) => {
    resolve({
      props: { name: "value", locale: ctx.locale },
    });
  });
};
