const UPLOAD_FILE = "UPLOAD_FILE";

export const uploadFile = (payload) => {
  return {
    type: UPLOAD_FILE,
    payload,
  };
};

const initialState = {
  data: [
    {
      image: "",
      todo: "",
    },
  ],
};

const uploads = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default uploads;
