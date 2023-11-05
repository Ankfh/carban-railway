export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // color: state.isSelected ? 'red' : 'blue',
  }),
  control: (provided, state) => ({
    ...provided,

    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    // border: " ",
    border: "1px solid #9D9D9D",
    "&:focus": {
      border: "1px solid #57B353",
    },
    fontFamily: 'Source Sans Pro',

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2C2C2C",
    marginTop: "8px",
  }),
  // singleValue: (provided, state) => {

  // }
};
