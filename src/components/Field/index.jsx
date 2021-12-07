import { useField } from 'formik';
import styled from 'styled-components';
import tw from 'twin.macro';

const FormContainer = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;

const Input = styled.input`
  ${tw`
    border 
    py-2
    px-3
    text-gray-700
  `}
`;

const Label = styled.label`
  ${tw`
    my-2
    font-bold
    text-gray-900
  `}
`

const Field = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <FormContainer>
      <Label>{label}</Label>
      <Input type="input" {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormContainer>
  );
};

export default Field;
