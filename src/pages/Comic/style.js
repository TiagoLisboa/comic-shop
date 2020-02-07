import styled from 'styled-components';

export const Image = styled.img`
  max-width: 100%;
`;

export const DottedSeparator = styled.span`
  flex: 1;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
  margin: 0 4px;
`;

export const DottedList = styled.ul`
  li {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    span:last-child {
      width: 50%;
      text-align: justify;
    }
  }
`;

export const Price = styled.span`
  b {
    margin: 0 10px 0 5px;
    font-size: 18pt;
  }
`;
