import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "../css/AddColleagueModel.css"
const  AddColleagueTextField = ()=> {
  const [selected, setSelected] = useState(["papaya"]);

  return (
    <div className="p-5">
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="email"
        placeHolder="Enter email "
      />
    </div>
  );
}


export default AddColleagueTextField