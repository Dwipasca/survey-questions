import React from "react";

import RespondentOption from "../../components/RespondentOption";

function ListRespondentOption({
  listRespondent,
  handleChange,
  createNewRespondentOption,
  deleteRespondentOption,
}) {
  return (
    <>
      {listRespondent.length > 0 &&
        listRespondent?.map((respondentOption, index) => (
          <RespondentOption
            key={respondentOption.id}
            index={index}
            respondentOption={respondentOption}
            handleChange={handleChange}
            createNewRespondentOption={createNewRespondentOption}
            deleteRespondentOption={deleteRespondentOption}
          />
        ))}
    </>
  );
}
export default ListRespondentOption;
