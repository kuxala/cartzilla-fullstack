import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  width: 100%;
  .col-image {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .left-col {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 3rem 2rem;
    @media (max-width: 768px) {
      width: 100%;
    }
    .header-logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      img {
        width: 3rem;
        height: 3rem;
      }
      p {
        font-size: 1.5rem;
        font-weight: 700;
        color: #333;
      }
    }
    .welcome-text {
      color: var(--Gray-900, #181d25);
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 42px;
      padding-bottom: 16px;
    }
    .create-new {
      color: var(--Gray-600, #4e5562);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 157.143% */
      padding-bottom: 24px;
      .link {
        color: var(--Gray-900, #181d25);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        text-decoration-line: underline;
        cursor: pointer;
      }
    }
    .inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    input {
      display: flex;
      width: 100%;
      padding: 12px 16px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 8px;
      border: 1px solid var(--Gray-300, #cad0d9);
      background: var(--White-100, #fff);
    }

    .checkbox-div {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      padding: 16px 0;
      p{
        cursor: pointer;
      }
      input {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
      div {
        display: flex;
        gap: 8px;
      }
    }

    button {
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
    }

    .login-options{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            margin: 24px 0;
        }
        div{
            display: flex;
            gap: 16px;
            div{
                display: flex;
                padding: 12px 24px;
                justify-content: center;
                align-items: center;
                gap: 8px;
                flex: 1 0 0;
                border-radius: 8px;
                border: 1px solid var(--Gray-200, #E0E5EB);
                cursor: pointer;
            }
        }
    }
  }
  .right-col {
    width: 50%;
    background: lightgray 50% / contain no-repeat;
    height: auto;
    @media (max-width: 768px) {
      width: 0%;
    }
  }
`;

export default Wrapper;
