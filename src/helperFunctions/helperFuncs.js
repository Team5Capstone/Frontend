import fourOFourError from "../pages/Four0Four";

export default helperFuncs = () => {
  const fourOFourError = () => {
    return (
      <div>
        <fourOFourError />
      </div>
    );
  };

  const loginError = (email, password) => {
    if (email && password) {
      //Make font red make second sentence bold
      return "The email and/or password provided is not connected to an account. Please make an account or try again";
    }
  };
};
