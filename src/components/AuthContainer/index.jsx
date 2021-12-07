import styled from "styled-components";

const AuthContainer = styled
const AuthContainer = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-container__content">{children}</div>
    </div>
  );
};

export default AuthContainer;
