import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import { UpdateEnGlossaryDefinitionAction } from "../../../../redux/actions/dashboard/make-glossary.action";
function EnGlossayDefinition(props) {
  const handleEditorChange = (content, editor) => {
    props._updateEnGlossaryDefinition(content);
  };

  return (
    <>
      {/********************************************
       ******  English Glossary Definition  ********
       *********************************************/}
      <div className="mb-5">
        <Editor
          apiKey="bsjpl0pvo6zhl3hgoou4chqr30gr8fz5cridce8kic6t1mue"
          initialValue="<p>Enter the EN glossary definition</p>"
          init={{
            height: 400,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | a11ychecker | formatselect | bold italic backcolor | \
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
    value: state.MakeGlossaryReducer.en_definition.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _updateEnGlossaryDefinition: (input) =>
      dispatch(UpdateEnGlossaryDefinitionAction(input)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnGlossayDefinition);
