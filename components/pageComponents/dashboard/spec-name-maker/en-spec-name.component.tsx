import { useState } from "react";
import { connect } from "react-redux";
import {
  SpecName_MaxLength,
  SpecName_MinLength,
} from "../../../../libs/validation-constants/index.lib";
import { UpdateEnSpecNameAction } from "../../../../redux/actions/dashboard/spec-name-maker.action";
import store from "../../../../redux/store";
function EnSpecName(props) {
  const [enSpecNameHelperMessage] = useState(
    props.locale === "ar"
      ? `عفواً ، لايمكنك استخدام عدد أحرف أقل من ${SpecName_MinLength} أو أكبر من ${SpecName_MaxLength}`
      : `Sorry, it's not allowed to use number of characters less than [${SpecName_MinLength}] or greater than [${SpecName_MaxLength}]`
  );
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          name="ar-spec-name"
          placeholder="Enter The Spec name in English"
          className="border py-2 px-3 block rounded-sm w-full focus:outline-none"
          onInput={(e: any) => props._updateEnSpecName(e.target.value)}
        />

        <div
          className={`text-xs text-red-500 font-bold ${
            store.getState().SpecNameReducer.en_spec_name.showHelper
              ? ""
              : "hidden"
          }`}
          dir={props.locale == "ar" ? "rtl" : "ltr"}
        >
          {enSpecNameHelperMessage}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.SpecNameReducer.en_spec_name.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _updateEnSpecName: (input) => dispatch(UpdateEnSpecNameAction(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnSpecName);
