import fourOFourError from "../pages/Four0Four";

export default helperFuncs = () => {
  const fourOFourError = () => {
    //if app.js file is waiting for the route provided to be anything other than our routes we have in our app how is this function serving it up rather than a page serving up the component
    return (
      <div>
        <fourOFourError />
      </div>
    );
  };

  const loginError = (email, password) => {
    if (email && password) {
      return (
        <div>
          <p style={{ color: "red", fontSize: 12 }}>
            The email and/or password provided is not connected to an account
            <strong>Please make an account or try again.</strong>
          </p>
        </div>
      );
    }
  };
};
