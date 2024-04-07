import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 630px;
`;

const Input = styled.input`
  width: 100%;
  height: 37px;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 10px;
  background-color: transparent;
  padding-left: 20px;
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${(props) => props.theme.colors.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

interface IInputs {
  searchText: string;
}

export const SearchInput = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    navigate(`?search=${data.searchText}`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Search" {...register("searchText")} />
    </Form>
  );
};
