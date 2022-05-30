import styled             from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import { MyIcon }         from './MyIcon';
import { MyButtons }      from './MyButtons';
import { MyCardProps }    from '../interfaces/MyCardInterface';

export const MyCard = ({ state, title, subtitle }: MyCardProps) => {
  return (
    <ContainerCard>
       <ContianerClose>
          <Close>
            <AiOutlineClose size="18" color="white"/>
          </Close>
       </ContianerClose>

      <ContainerCardBody>
        <MyIcon state={state}/>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <MyButtons state={state}/>
      </ContainerCardBody>
    </ContainerCard>
  )
}

const ContainerCard = styled.div`
  padding: 25px 20px 15px 20px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
  background-color: white;
  position: relative;
  width: 325px;

  @media(max-width: 330px){
    width: 200px;
  }
`;
const ContianerClose = styled.span`
  right: 15px;
  position: absolute;
  top: 20px;
`;
const Close = styled.button`
  align-items: center;
  background-color: #6E41E2;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
`;
const ContainerCardBody= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin: 10px 0px;
`;
const SubTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin: 0px 0px 10px 0px;
`;