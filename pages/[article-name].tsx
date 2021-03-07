import { GetStaticProps, GetStaticPropsContext } from "next";
import { useEffect } from "react";
import Loader from "../components/partials/loader.partial";

export default function DeviceName(props: any) {
  return (
    <>
      <Loader showOrHide={false} />
    </>
  );
}

export const getStaticPaths = async (ctx: any) => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  return new Promise((resolve, reject) => {
    // Essential Content

    resolve({
      props: {
        name: "Mahmoud Gamal",
      },
      revalidate: 1,
    });
  });
};
// سعر و مواصفات Samsung Galaxy S21 Ultra 5G - مميزات و عيوب سامسونج S21 الترا - موبيزل

// سعر و مواصفات Samsung Galaxy M51 - مميزات وعيوب سامسونج M51 - موبيزل
