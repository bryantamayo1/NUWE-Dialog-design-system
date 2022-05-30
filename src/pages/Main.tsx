import styled       from 'styled-components';
import { MyCard }   from '../components/MyCard';

export const Main = () => {
  return (
    <ContainerMain>
      <MyCard state="warning" title="¡Cuidado!" subtitle="No podrás volver atrás"/>
      <MyCard state="success" title="¡Vamos!" subtitle="Todo ha salido bien :)"/>
      <MyCard state="error" title="Upss" subtitle="Algo ha pasado"/>
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
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
`;