import styled from 'styled-components';
import tw from 'twin.macro';

const StyledAuthContainer = styled.div`
  ${tw`
    h-screen 
    flex
    items-center
    justify-center
    flex-col
    bg-gray-100
  `}
`;

const StyledAuthForm = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    h-screen
    w-screen
    bg-gray-100
    overflow-hidden
`}
`

const AuthContainer = ({ children }) => {
  return (
    <StyledAuthContainer>
      <StyledAuthForm>{children}</StyledAuthForm>
    </StyledAuthContainer>
  );
};

export default AuthContainer;
