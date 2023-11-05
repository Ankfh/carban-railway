export const inputFocus = (event) => {
  event.target.parentNode
    .getElementsByTagName("fieldset")[0]
    .classList.remove("inputDataAdded");
};

export const changeInput = (event) => {
  if (event.target.value !== "") {
    event.target.parentNode
      .getElementsByTagName("fieldset")[0]
      .classList.add("inputDataAdded");
  }
};

export const passwordFocus = (event, p) => {
   event.target.parentNode
    .getElementsByTagName("fieldset")[0]
    .classList.remove("inputDataAdded");

  event.target.parentNode
    .getElementsByTagName("button")[0]
    .classList.remove("noShowIcon");
};

export const passwordBlur = (event) => {
  event.preventDefault()
  if (event.target.value !== "") {
    event.target.parentNode
      .getElementsByTagName("fieldset")[0]
      .classList.add("inputDataAdded");
  }

  event.target.parentNode
    .getElementsByTagName("button")[0]
    .classList.add("noShowIcon");
};
