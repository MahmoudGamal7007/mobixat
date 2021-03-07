import { GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";

import EnGlossaryName from "../../components/pageComponents/dashboard/glossary-maker/en-glossary-name.component";
import EnGlossayDefinition from "../../components/pageComponents/dashboard/glossary-maker/en-glossary-definition.component";
import ArGlossaryName from "../../components/pageComponents/dashboard/glossary-maker/ar-glossary-name.component";
import ArGlossaryDefinition from "../../components/pageComponents/dashboard/glossary-maker/ar-glossary-definition.component";
import store from "../../redux/store";
import { useEffect } from "react";
import Loader from "../../components/partials/loader.partial";
export default function Glossarymaker(props) {
  useEffect(() => {
    // console.log(props);
  });
  const submit = () => {
    // console.log(store.getState());
    const {
      en_name,
      en_definition,
      ar_name,
      ar_definition,
    } = store.getState().MakeGlossaryReducer;
    if (en_name.isValid && ar_name.isValid) {
      axios
        .post("/api/create-new-glossary.api", {
          en_name: en_name.value,
          en_definition: en_definition.value,
          ar_name: ar_name.value,
          ar_definition: ar_definition.value,
        })
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <>
      <div id="Glossarymaker" className="container mx-auto">
        <form
          className="w-full md:w-3/4 lg:w-1/2 mx-auto px-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <EnGlossaryName locale={props.locale} />

          <EnGlossayDefinition />

          <ArGlossaryName locale={props.locale} />

          <ArGlossaryDefinition />

          {/********************************************
           ************  Submission Button   ***********
           *********************************************/}
          <div className="mb-5" onClick={submit}>
            <button className="bg-yellow-600 px-3 py-2 text-white rounded-sm focus:outline-none">
              Confirm
            </button>
          </div>
        </form>
      </div>
      <Loader showOrHide={false} />
    </>
  );
}

// export const getStaticProps = async (ctx: GetStaticPropsContext) => {
//   return new Promise((resolve, reject) => {
//     /**
//      * RouteModel: read this =>
//      * ```https://sequelize.org/master/manual/model-basics.html#model-synchronization```
//      */
//     resolve({
//       props: {
//         locale: ctx.locale,
//       },
//     });
//   });
// };
export function getStaticProps(ctx) {
  return new Promise((resolve, reject) => {
    resolve({
      props: {
        locale: ctx.locale,
      },
    });
  });
}
