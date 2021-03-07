// import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  GlossaryName_MaxLength,
  GlossaryName_MinLength,
} from "../../../../libs/validation-constants/index.lib";
import { UpdateEnGlossaryNameAction } from "../../../../redux/actions/dashboard/make-glossary.action";
import store from "../../../../redux/store";
function EnGlossaryName(props) {
  return (
    <>
      {/********************************************
       *******  English Glossary Name   *******
       *********************************************/}
      <div className="mb-5">
        <input
          type="text"
          className={`block border py-2 px-3 rounded-md w-full focus:outline-none focus:ring-1 transition-shadow ${
            store.getState().MakeGlossaryReducer.en_name.showHelper
              ? "border-red-500 focus:ring-red-500"
              : ""
          }`}
          id="en-gloassary-name"
          placeholder="Enter the EN glossary Name.."
          onInput={(e: any) => {
            e.isTrusted ? props._updateEnGlossaryName(e.target.value) : false;
          }}
        />

        {/* Helper */}
        <div
          className={`text-xs text-red-500 font-bold ${
            store.getState().MakeGlossaryReducer.en_name.showHelper
              ? ""
              : "hidden"
          }`}
        >
          {props.locale == "en"
            ? `Sorry, it's not allowed to use number of characters less than [${GlossaryName_MinLength}] or greater than [${GlossaryName_MaxLength}]`
            : `عفواً ، لايمكنك استخدام عدد أحرف أقل من 3 أو أكبر من 128`}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.MakeGlossaryReducer.en_name.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _updateEnGlossaryName: (input) =>
      dispatch(UpdateEnGlossaryNameAction(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EnGlossaryName);
