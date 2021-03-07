import { useState, useEffect, FormEvent } from "react";
import { connect } from "react-redux";
import {
  GlossaryName_MaxLength,
  GlossaryName_MinLength,
} from "../../../../libs/validation-constants/index.lib";
import { UpdateArGlossaryNameAction } from "../../../../redux/actions/dashboard/make-glossary.action";
import store from "../../../../redux/store";
function ArGlossaryName(props) {
  // Create state
  let [arGlossaryName] = useState({
    ar_name: {
      helper:
        props.locale === "en"
          ? `Sorry, it's not allowed to use number of characters less than [${GlossaryName_MinLength}] or greater than [${GlossaryName_MaxLength}]`
          : `عفواً ، لايمكنك استخدام عدد أحرف أقل من 3 أو أكبر من 128`,
    },
  });
  return (
    <>
      {/***************************************
       *******  Arabic Glossary Name   ********
       ***************************************/}
      <div className="mb-5">
        <input
          type="text"
          className={`block border py-2 px-3 rounded-md w-full focus:outline-none focus:ring-1 transition-shadow ${
            store.getState().MakeGlossaryReducer.ar_name.showHelper
              ? "border-red-500 focus:ring-red-500"
              : ""
          }`}
          id="ar-gloassary-name"
          placeholder="Enter the AR glossary Name.."
          onInput={(e: any) => {
            e.isTrusted ? props._updateArGlossaryName(e.target.value) : false;
          }}
        />

        {/* Helper */}
        <div
          className={`text-xs text-red-500 font-bold ${
            store.getState().MakeGlossaryReducer.ar_name.showHelper
              ? ""
              : "hidden"
          }`}
        >
          {arGlossaryName.ar_name.helper}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.MakeGlossaryReducer.ar_name.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _updateArGlossaryName: (input) =>
      dispatch(UpdateArGlossaryNameAction(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArGlossaryName);
