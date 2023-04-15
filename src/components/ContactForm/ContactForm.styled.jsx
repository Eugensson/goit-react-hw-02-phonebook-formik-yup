import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 15px;
  width: 250px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const FormBtn = styled.button`
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #ccc;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const ErrMsg = styled.div`
  color: red;
  font-size: 10px;
  font-weight: 500;
`;
