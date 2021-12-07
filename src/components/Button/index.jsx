import tw, { styled } from "twin.macro";

const StyledButton = styled.button(({ kindOf }) => [
  tw`rounded mx-1 mt-3 px-4 py-2 text-white font-bold`,
  kindOf === "primary" && tw`bg-blue-500 hover:bg-blue-700`,
  kindOf === "danger" && tw`bg-red-500 hover:bg-red-700`,
  kindOf === "success" && tw`bg-green-500 hover:bg-green-700`,
  kindOf === "warning" && tw`bg-yellow-500 hover:bg-yellow-700`,
  kindOf === "info" && tw`bg-blue-500 hover:bg-blue-700`,
]);

const Button = ({ children, kindOf }) => {
  return (
    <div>
      <StyledButton kindOf={kindOf}>{children}</StyledButton>
    </div>
  );
};

export default Button;
