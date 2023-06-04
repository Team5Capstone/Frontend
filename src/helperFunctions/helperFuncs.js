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
