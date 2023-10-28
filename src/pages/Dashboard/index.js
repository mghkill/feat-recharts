import React, { useState } from 'react';
import { useUser } from "../../providers/users";
import { Contained, Container, StyledForm } from "./styles";
import DataCard from '../../components/Card'; // Importe o componente DataCard 

const Dashboard = () => {
  const { signOut, seriesList } = useUser();
  const[list, setList] = useState(seriesList.serie)

  useState(() => {
    setList(seriesList.serie)
  }, [seriesList])

  return (
    <Container>
      <Contained>
        <StyledForm>
          
          <button onClick={signOut}>deslogar</button>
          {list && list.map((e, i) => <p key={i}>{e.time}</p>)

          }
         {/*  <DataCard
            name={seriesList.name}
            max={seriesList.max}
            min={seriesList.min}
            serie={seriesList.serie}
          /> */}
        </StyledForm>
      </Contained>
    </Container>
  );
};

export default Dashboard;
