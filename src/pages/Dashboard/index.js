import React, { useEffect, useState } from 'react';
import { useUser } from "../../providers/users";
import { Contained, Container, StyledForm, StyledMaps, StyledRecharts, Ul } from "./styles";
import DataCard from '../../components/Card'; // Importe o componente DataCard 
import { Button } from '@mui/material';
import Recharts from '../../components/RechartsLine';

const Dashboard = () => {

  const listValue = JSON.parse(localStorage.getItem("@Challenge:list"))
  const { signOut, userList } = useUser();
  const [serializeList, setSerializeList] = useState();

  useEffect(() => {

    //Criar de paginação
    const output = listValue?.serie.filter((e) => e)
    setSerializeList(output)
  }, [userList])

  return (
    <Container>
      <Contained>
        <StyledForm>
          <Ul>
            {serializeList?.length > 0 && serializeList.map((e, i) => (
              <DataCard listValue={listValue} key={i} element={e}>teste</DataCard>
            )
            )}
          </Ul>
        </StyledForm>
        <StyledRecharts>
          <Recharts propList={serializeList} />
        </StyledRecharts>
        <StyledMaps>
          Map
        </StyledMaps>
        <Button onClick={signOut}>deslogar</Button>
      </Contained>
    </Container>
  );
};

export default Dashboard;
