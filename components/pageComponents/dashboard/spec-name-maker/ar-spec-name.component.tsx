import { useState } from "react";
import { connect } from "react-redux";
import {
  SpecName_MaxLength,
  SpecName_MinLength,
} from "../../../../libs/validation-constants/index.lib";
import { UpdateArSpecNameAction } from "../../../../redux/actions/dashboard/spec-name-maker.action";
import store from "../../../../redux/store";
function ArSpecName(props) {
  const [arSpecNameHelperMessage] = useState({
    ar_name: {
      helper:
        props.locale === "ar"
          ? `عفواً ، لايمكنك استخدام عدد أحرف أقل من 3 أو أكبر من 128`
          : `Sorry, it's not allowed to use number of characters less than [${SpecName_MinLength}] or greater than [${SpecName_MaxLength}]`,
    },
  });
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          name="en-spec-name"
          placeholder="ادخل اسم الخاصية باللغة العربية"
          dir="rtl"
          className="border py-2 px-3 block rounded-sm w-full focus:outline-none"
          onInput={(e: any) => props._updateArSpecName(e.target.value)}
        />
        {/* Helper */}
        <div
          className={`text-xs text-red-500 font-bold ${
            store.getState().SpecNameReducer.ar_spec_name.showHelper
              ? ""
              : "hidden"
          }`}
          dir={props.locale == "ar" ? "rtl" : "ltr"}
        >
          {arSpecNameHelperMessage.ar_name.helper}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.SpecNameReducer.ar_spec_name.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _updateArSpecName: (input) => dispatch(UpdateArSpecNameAction(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArSpecName);
