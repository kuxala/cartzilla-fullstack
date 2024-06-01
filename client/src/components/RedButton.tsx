import styled from "styled-components";

export default function RedButton({ text, type }: any) {
  return <StyledButton type={type}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--Primary-Main, #f55266);
  color: var(--White-100, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  outline: none;
  border: none;
  margin: 16px 0;
  cursor: pointer;
`;
