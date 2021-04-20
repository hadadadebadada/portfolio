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

export const Title = styled.h1`
      justify-content: center;
  align-items: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
   
`;

