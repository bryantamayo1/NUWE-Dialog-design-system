import { useContext }   from 'react';
import styled, { keyframes }       from 'styled-components';
import { MyButton }     from '../components/MyButton';
import { MyCard }       from '../components/MyCard';
import { AppContext }   from '../context/AppContext';


export const Main = () => {
  const {stateApp, open} = useContext(AppContext);

  return (
    <ContainerMain>
      <ContainerCard active={stateApp.find(item => item.active)?.active || false}>
        {stateApp.map( (item, index) => {
          if(item.state === "warning" && item.active) return <MyCard key={index} state="warning" title="¡Cuidado!" subtitle="No podrás volver atrás"/>
          if(item.state === "success" && item.active) return <MyCard key={index} state="success" title="¡Vamos!" subtitle="Todo ha salido bien :)"/>
          if(item.state === "error" && item.active) return <MyCard key={index} state="error" title="Upss" subtitle="Algo ha pasado"/>
        })}  
      </ContainerCard>

      <MyButton dark onClick={() => open("warning")}>
        ¡Cuidado!
      </MyButton>
      <MyButton dark onClick={() => open("success")}>
        ¡Vamos!
      </MyButton>
      <MyButton dark onClick={() => open("error")}>
        Upss
      </MyButton>
    </ContainerMain>
  )
}

/**
 * Page main
 */
const ContainerMain = styled.div`
  align-items: center;
  background-color: #E5E5E5;
  display: flex;
  justify-content: space-evenly;
  min-height: 100vh;
  position: relative;
`;
const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`
const ContainerCard = styled.div<{active: boolean}>`
  align-items: center;
  animation: ${fadeIn} 0.4s;
  background-color: #505050c7;
  box-sizing: border-box;
  display: none;
  display: ${props => props.active? "flex":"none"};
  justify-content: center;
  left: 0;
  min-height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`
