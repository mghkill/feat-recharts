/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useUser } from "../../providers/users";
import { Contained, Container, StyledForm, StyledRecharts, Ul } from "./styles";
import DataCard from '../../components/Card'; // Importe o componente DataCard 
import { Button } from '@mui/material';
import Recharts from '../../components/RechartsLine';
import ContentMaps from '../../components/ContentMaps';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const Dashboard = () => {

  const listValue = JSON.parse(localStorage.getItem("@Challenge:list"))
  const { signOut, userList } = useUser();
  const [serializeList, setSerializeList] = useState([]);
  const [serialTime, setserialTime] = useState([]);
  const [personTime, setpersonTime] = useState([]);
  const theme = useTheme();

  const filterTimeList = (arraySelected) => {

    let menor = arraySelected[0];
    let maior = arraySelected[0];

    for (let i = 1; i < arraySelected.length; i++) {
      if (arraySelected[i] < menor) {
        menor = arraySelected[i];
      }
      if (arraySelected[i] > maior) {
        maior = arraySelected[i];
      }
    }

    const output = listValue.serie.filter((e) => e.time >= menor && e.time <= maior);
    setSerializeList(output);
  }

  // Material UI Select
  function getStyles(time, personTime, theme) {
    return {
      fontWeight:
        personTime.indexOf(time) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setpersonTime(
      // On autofill we get a stringified value.
      typeof value === 'number' ? value.split(',') : value,
    );
  };

  const upSerialTime = (element) => {
    const timeCount = [];
    // eslint-disable-next-line array-callback-return
    element.map((time) => {
      timeCount.push(time.time)
    })
    setserialTime(timeCount)
  }
  
  const formatTime = (time) => {
    const formattedTime = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(time));
    return formattedTime;
  };

  useEffect(() => {
    //Criar de paginação
    const output = listValue?.serie.filter((e) => e)
    setSerializeList(output)
    upSerialTime(output)
    if (personTime.length > 1) {
      filterTimeList(personTime)
    }
  }, [userList]);

  useEffect(() => {
    if (personTime.length > 1) {
      filterTimeList(personTime)
    }
  }, [personTime])


  return (
    <Container>
      <Button onClick={signOut}>Sair</Button>
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
          <Recharts propList={serializeList} formatTime={formatTime} />
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-time-label">Selecione o intervalo de tempo</InputLabel>
            <Select
              labelId="demo-multiple-time-label"
              id="demo-multiple-time"
              multiple
              value={personTime}
              onChange={handleChange}
              input={<OutlinedInput label="time" />}
              MenuProps={MenuProps}
            >
              {serialTime.length > 0 && serialTime.map((time, i) => (
                <MenuItem
                  key={i}
                  value={time}
                  style={getStyles(time, personTime, theme)}
                >
                 {formatTime(time)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </StyledRecharts>
        <ContentMaps />
      </Contained>
    </Container>
  );
};

export default Dashboard;
