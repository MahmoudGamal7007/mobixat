import { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "../../../../redux/store";

function AbsoluteSpecName(props) {
  useEffect(() => {
    // console.log(props);
  });
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          className="border py-2 px-3 block rounded-sm w-full focus:outline-none"
          placeholder={`mobile_${props.value
            .toLowerCase()
            .trim()
            .replace(/\s/g, "_")}`}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.SpecNameReducer.en_spec_name.value,
  };
};
export default connect(mapStateToProps, {})(AbsoluteSpecName);
