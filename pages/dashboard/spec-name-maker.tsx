import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";
import EnSpecName from "../../components/pageComponents/dashboard/spec-name-maker/en-spec-name.component";
import ArSpecName from "../../components/pageComponents/dashboard/spec-name-maker/ar-spec-name.component";
import store from "../../redux/store";
import Specification from "../../models/specification.model";
import { Error } from "sequelize/types";
import EditSpecName from "../../components/pageComponents/dashboard/spec-name-maker/edit-spec-name.component";
import AbsoluteSpecName from "../../components/pageComponents/dashboard/spec-name-maker/absolute-spec-name.component";
import createAbsoluteName from "../../libs/functions/create-absolute-spec-name";
import Loader from "../../components/partials/loader.partial";

export default function SpecNameMaker(props) {
  const [selectedRows, updateSelectedRows] = useState({
    selectedRowsCount: 0,
    slectedRowsElements: [],
  });

  useEffect(() => {
    // console.log(selectedRows);
  });

  // Submission Function
  const submit = () => {
    // console.log(props);

    // Validation
    const { en_spec_name, ar_spec_name } = store.getState().SpecNameReducer;

    if (en_spec_name.isValid && ar_spec_name.isValid) {
      // then, Send these information
      axios
        .post("http://localhost:5050/api/create-new-spec-name.api", {
          en_spec_name: en_spec_name.value,
          ar_spec_name: ar_spec_name.value,
          absolute_spec_name: createAbsoluteName(en_spec_name.value),
        })
        .then((data) => {
          // Reload, to show the new spec
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Sorry, you have to enter the info in the right way");
    }
  };

  // Select a row for deleting or editing
  const select = (e) => {
    // Higlight this row
    e.currentTarget.classList.toggle("bg-gray-300");

    // if there was a .bg-gray-300 then there is a single selected element
    const t = document.querySelectorAll(".row.bg-gray-300");
    const selectedElements = [];

    // append these new elements to the previous array
    t.forEach((element) => {
      selectedElements.push({
        en_spec_name: element.children[1].textContent,
        ar_spec_name: element.children[2].textContent,
      });
    });

    // Update The state
    updateSelectedRows({
      ...selectedRows,
      slectedRowsElements: selectedElements,
      selectedRowsCount: t.length,
    });
  };

  // fade in the edit and delete panel
  const fadeInEditAndDeletePanel = () => {
    try {
      document.getElementById("EditSpecName").classList.remove("hidden");
    } catch (err) {
      const t = confirm("This page is going to be reloaded");
      if (t) {
        window.location.reload();
      }
    }
  };
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  // RENERING
  return (
    <>
      <div className="container mx-auto flex justify-center flex-wrap items-center">
        <form
          className="px-3 w-10/12 md:w-2/3 xl:w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <EnSpecName />

          <ArSpecName />

          <AbsoluteSpecName
            currentValue={store.getState().SpecNameReducer.en_spec_name.value}
          />

          {/* Submission Button */}
          <div className="mb-4">
            <button
              className="border bg-yellow-500 text-white rounded-sm px-3 py-2 focus:outline-none focus:border-yellow-600"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Specs Table */}
      <div className="container mx-auto flex justify-center flex-wrap items-center">
        <div className="specs w-full flex justify-center">
          <div className="w-10/12 md:w-2/3 xl:w-1/2 flex flex-wrap px-3">
            <div className="border border-b-0">
              <div className="row w-full">
                <div className="text-center w-1/3 border border-t-0 border-l-0 border-r-0 inline-block py-3 font-bold">
                  Absolute Name
                </div>
                <div className="text-center w-1/3 border border-t-0 inline-block py-3 font-bold">
                  Name in En
                </div>
                <div className="text-center w-1/3 border border-t-0 border-l-0 border-r-0 inline-block py-3 font-bold">
                  Name in Ar
                </div>
              </div>
              {props.data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="row w-full cursor-pointer break-all flex border border-t-0 border-l-0 border-r-0"
                    onClick={(e) => {
                      select(e);
                    }}
                  >
                    {/* Absolute Specification Name */}
                    <div
                      className="text-center w-1/3  inline-flex justify-center items-center py-3 px-5"
                      dir="rtl"
                    >
                      {item.absolute_spec_name}
                    </div>

                    {/* English Specification Name */}
                    <div className="text-center w-1/3 inline-flex justify-center items-center py-3 px-5 border border-b-0 border-t-0">
                      {item.en_spec_name}
                    </div>

                    {/* Arabic Specification Name */}
                    <div
                      className="text-center w-1/3 inline-flex justify-center items-center py-3 px-5"
                      dir="rtl"
                    >
                      {item.ar_spec_name}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 edit-delete-buttons pb-4">
              <button
                className={`text-white px-3 py-1 rounded-sm focus:outline-none mr-3 ${
                  selectedRows.selectedRowsCount > 0
                    ? "bg-red-600"
                    : "bg-red-300 cursor-not-allowed"
                }`}
                disabled={selectedRows.selectedRowsCount > 0 ? false : true}
              >
                Delete
              </button>

              <button
                className={`text-white px-3 py-1 rounded-sm focus:outline-none ${
                  selectedRows.selectedRowsCount > 0
                    ? "bg-blue-600"
                    : "bg-blue-300 cursor-not-allowed"
                }`}
                disabled={selectedRows.selectedRowsCount > 0 ? false : true}
                onClick={() => {
                  fadeInEditAndDeletePanel();
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        <EditSpecName selectedElements={selectedRows.slectedRowsElements} />
        <Loader showOrHide={false} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  return new Promise(async (resolve, reject) => {
    Specification.sync();
    Specification.findAll({
      attributes: ["ar_spec_name", "en_spec_name", "absolute_spec_name"],
    })
      .then((data) => {
        const _data = data.map((item, index) => {
          return {
            ar_spec_name: item.getDataValue("ar_spec_name"),
            en_spec_name: item.getDataValue("en_spec_name"),
            absolute_spec_name: item.getDataValue("absolute_spec_name"),
          };
        });
        console.log(_data);
        resolve({
          props: {
            data: _data,
            locale: ctx.locale,
          },
        });
      })
      .catch((err: Error) => {
        resolve({ notFound: true });
      });
  });
};
