import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import { UpdateArGlossaryDefinitionAction } from "../../../../redux/actions/dashboard/make-glossary.action";
function ArGlossaryDefinition(props) {
  const handleEditorChange = (content, editor) => {
    props._updateArGlossaryDefinition(content);
  };

  return (
    <>
      {/********************************************
       *******  Arabic Glossary Definition   *******
       *********************************************/}
      <div className="mb-5">
        <Editor
          apiKey="bsjpl0pvo6zhl3hgoou4chqr30gr8fz5cridce8kic6t1mue"
          initialValue="<p>أدخل تعريف المصطلح باللغة العربية</p>"
          init={{
            height: 500,
            menubar: true,
            directionality: "rtl",
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    value: state.MakeGlossaryReducer.ar_definition.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _updateArGlossaryDefinition: (input) =>
      dispatch(UpdateArGlossaryDefinitionAction(input)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArGlossaryDefinition);
