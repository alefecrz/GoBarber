import styled from 'styled-components';
import { shade } from 'polished';
import { COLORS } from '../../styles/themes/gobarber';

import signInBackgroud from '../../assets/sign-in-background.png';

export const Conteiner = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: ${COLORS.inputBackground};
      border-radius: 10px;
      border: 2px solid ${COLORS.inputBackground};
      padding: 16px;
      width: 100%;
      color: ${COLORS.textLighter};

      &::placeholder {
        color: ${COLORS.textDark};
      }
      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: ${COLORS.primary};
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: ${COLORS.buttonText};
      font-weight: 500;
      margin-top: 16px;
      width: 100%;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, COLORS.primary)};
      }
    }

    a {
      color: ${COLORS.textLighter};
      display: block;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, COLORS.textLighter)};
      }
    }
  }

  > a {
    color: ${COLORS.primary};
    display: block;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, COLORS.primary)};
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroud}) no-repeat center;
  background-size: cover;
`;
