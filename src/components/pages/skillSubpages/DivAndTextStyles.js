import styled from 'styled-components'




export const Div1 = styled.div`
    padding: 4rem;
    display: flex;
    width:100%;
  background-color: ${props => props.theme.pageBackground};
 
`;


export const Div2 = styled.div`

    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;

  background-color: ${props => props.theme.pageBackground};
 
`;
export const Div3 = styled.div`
    position: relative;
    width: 100%;
    border-radius: 25px;


  background-color: ${props => props.theme.pageBackground};
 
`;
export const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
    align-items:center;
`;

export const Title = styled.p`
      justify-content: center;
  align-items: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
   
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;