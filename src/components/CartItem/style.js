import styled from 'styled-components';

export const Item = styled.tr`
  td {
    img {
      max-width: 100px;
    }

    button,
    input {
      border: none;
      background-color: transparent;
    }

    input {
      width: 50px;
      text-align: center;
      margin: 0 10px;
      padding: 0;
    }
  }

  td:first-child {
    width: 15%;
  }

  td:nth-child(2) {
    width: 50%;
  }
`;
