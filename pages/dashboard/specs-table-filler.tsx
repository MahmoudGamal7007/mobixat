import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import ImageUploader from "../../components/pageComponents/dashboard/specs-table-filler/image-uploader";
import Loader from "../../components/partials/loader.partial";
import Specifications from "../../models/specification.model";

export default function SpecsTableFiller(props) {
  const [state, updateState] = useState({
    selectedWord: "",
    enableContextMenu: false,
    targetedElement: null,
    popup: {
      top: 0,
      left: 0,
      newUrl: "",
      anchorText: "",
      newTitle: "",
    },
    specs: {
      valid: false,
      errorMessage: "",
      helperText: "",
    },
  });

  useEffect(() => {
    // console.log(props);
    document.getElementById("Loader").style.height = "0px";
  });
  const submitNewPhoneSpecs = () => {
    // Collect Data
    const Form: HTMLFormElement = document.forms[0];
    const FD = new FormData(Form);

    // Insert all the specs
    document.querySelectorAll("li._table-row").forEach((el) => {
      let elArr = el.querySelectorAll(".editor");
      FD.append(elArr[0].getAttribute("data-name"), elArr[0].innerHTML);
      FD.append(elArr[1].getAttribute("data-name"), elArr[1].innerHTML);
    });

    // Ignore validation for now.

    // send the data to the server
    axios
      .post(`http://localhost:5050/api/create-new-specs-table.api/`, FD, {
        onUploadProgress: (e: ProgressEvent) => {
          // console.log((e.loaded / e.total) * 100);
        },
      })
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Head>
        <title>Mobixat | Specs Table Filler</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div id="SpecsTableFiller" className="container mx-auto">
        {/* The main form of uploading the main images of the mobile phone */}
        <form
          id="_form_data"
          className="border p-3 w-1/2 md:w-full lg:w-1/2 mx-auto"
          encType="multipart/form-data"
        >
          {/* Image Uploader */}
          <ImageUploader />

          {/* Mobile Name */}
          <div className="mb-3">
            <input
              type="text"
              name="mobile-name"
              placeholder="Please, Enter the mobile name in English"
              className="border px-3 py-1 block w-full"
              required
            />
          </div>

          {/* Specs Table */}
          <ul className="w-full mx-auto mt-5">
            {props.data.map((item) => {
              return (
                <li key={item.id} className="mb-4 _table-row  bg-gray-100 ">
                  <ul>
                    {/* English spec */}
                    <li
                      dir="ltr"
                      className="flex border rounded-t-sm px-3 py-2"
                    >
                      {item.en_spec_name}
                      :&nbsp;
                      <div className="w-3/4">
                        <div
                          className="editor bg-white"
                          contentEditable="true"
                          data-name={`en_${item.absolute_spec_name}`}
                          onContextMenu={(e) => {
                            if (document.getSelection().toString()) {
                              e.preventDefault();
                              updateState({
                                ...state,
                                enableContextMenu: true,
                                targetedElement: e.target,
                                selectedWord: document
                                  .getSelection()
                                  .toString(),
                                popup: {
                                  ...state.popup,
                                  top: e.clientY,
                                  left: e.clientX,
                                  anchorText: document
                                    .getSelection()
                                    .toString(),
                                },
                              });
                            }
                          }}
                        ></div>
                      </div>
                    </li>
                    {/* Arabic Spec */}
                    <li
                      dir="rtl"
                      className="flex border border-t-0 rounded-b-sm px-3 py-2"
                    >
                      {item.ar_spec_name}
                      :&nbsp;
                      <div className="w-3/4">
                        <div
                          className="editor bg-white text-right"
                          contentEditable="true"
                          data-name={`ar_${item.absolute_spec_name}`}
                          onContextMenu={(e) => {
                            if (document.getSelection().toString()) {
                              e.preventDefault();
                              updateState({
                                ...state,
                                enableContextMenu: true,
                                targetedElement: e.target,
                                selectedWord: document
                                  .getSelection()
                                  .toString(),
                                popup: {
                                  ...state.popup,
                                  top: e.clientY,
                                  left: e.clientX,
                                  anchorText: document
                                    .getSelection()
                                    .toString(),
                                },
                              });
                            }
                          }}
                          dir="rtl"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>

          {/* Submission Button */}
          <div className="mb-3 mt-7 border border-l-0 border-r-0 border-b-0 pt-3">
            <button
              className="border py-1 px-3 bg-yellow-500 text-white focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                submitNewPhoneSpecs();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Loader Component */}
      <Loader showOrHide={false} />

      {/* Context menu */}
      <div
        id="Popup"
        className={`bg-white border overflow-y-auto p-3 ${
          state.enableContextMenu ? "" : "hidden"
        } transition-all`}
      >
        <span
          onClick={() => {
            updateState({
              ...state,
              enableContextMenu: false,
            });
          }}
        >
          <MdClose style={{ cursor: "pointer" }} size="20" />
        </span>
        <div>URL</div>
        {/* New Url input */}
        <div className="mb-3">
          <input
            type="text"
            name="new-url"
            className="border rounded-sm w-full max-w-full focus:outline-none"
            value={state.popup.newUrl}
            onInput={(e: any) => {
              updateState({
                ...state,
                popup: {
                  ...state.popup,
                  newUrl: e.target.value,
                },
              });
            }}
          />
        </div>
        {/* Text to display */}
        <div>Text to display</div>
        <div className="mb-3">
          <input
            type="text"
            name="new-text"
            className="border rounded-sm w-full max-w-full focus:outline-none"
            value={state.popup.anchorText}
            onInput={(e: any) => {
              updateState({
                ...state,
                popup: {
                  ...state.popup,
                  anchorText: e.target.value,
                },
              });
            }}
          />
        </div>
        <div>Title</div>
        <div className="mb-3">
          <input
            type="text"
            name="new-title"
            className="border rounded-sm w-full max-w-full focus:outline-none"
            value={state.popup.newTitle}
            onInput={(e: any) => {
              updateState({
                ...state,
                popup: {
                  ...state.popup,
                  newTitle: e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="mb-3">
          <button
            className="border px-3 focus:outline-none "
            onClick={() => {
              state.targetedElement.innerHTML = state.targetedElement.innerHTML.replace(
                state.selectedWord,
                `<a href="${state.popup.newUrl}" title="${state.popup.newTitle}" style="color: #136ad8;">${state.popup.anchorText}</a>`
              );

              // reset the popup fields
              updateState({
                ...state,
                selectedWord: "",
                enableContextMenu: false,
                targetedElement: null,
                popup: {
                  top: 0,
                  left: 0,
                  newUrl: "",
                  anchorText: "",
                  newTitle: "",
                },
              });
            }}
          >
            Enter
          </button>
        </div>
      </div>
      <style jsx>
        {`
          #Popup {
            position: absolute;
            top: ${state.popup.top + 10}px;
            left: ${state.popup.left + 10}px;
            width: 300px;
            height: auto;
          }
        `}
      </style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  return new Promise(async (resolve, reject) => {
    Specifications.sync();
    Specifications.findAll({
      attributes: ["ar_spec_name", "en_spec_name", "id", "absolute_spec_name"],
    })
      .then((data) => {
        const _data = data.map((item, index) => {
          return {
            ar_spec_name: item.getDataValue("ar_spec_name"),
            en_spec_name: item.getDataValue("en_spec_name"),
            absolute_spec_name: item.getDataValue("absolute_spec_name"),
            id: item.getDataValue("id"),
          };
        });
        resolve({
          props: {
            data: _data,
            locale: ctx.locale,
          },
        });
      })
      .catch((err) => {
        resolve({ notFound: true });
      });
  });
};
