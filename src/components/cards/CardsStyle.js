import styled,{ css} from 'styled-components'


const CardsStyle = styled.div`
  justify-content: left;
  align-items: top;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.pageBackground};
`;




export default CardsStyle;