
import { Legend, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { BoxTooltip } from "./styles";
import { Card } from "@mui/material";

const Recharts = ({ propList, formatTime }) => {

  const formatValue = (value) => {
    const formattedValue = value.toFixed(2);
    return formattedValue;
  };

  const CustomTooltip = ({ payload, label }) => {
    if (!payload || payload.length < 2) {
      return null;
    }

    const time = payload[0].payload.time;
    const value = payload[1].payload.value;

    return (
      <BoxTooltip>
        <Card>
          <h3>Valores:</h3>
          <div>
            <p>Tempo: {formatTime(time)}</p>
            <p>Valor: {value.toFixed(2)}</p>.
          </div>
        </Card>
      </BoxTooltip>
    );
  };

  return (
    <div>
      <LineChart width={600} height={300} data={propList}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          labelStyle={{ fontFamily: 'Roboto, sans-serif' }}
          cursor={false}
          contentStyle={{ background: '#f5f5f5', border: '1px solid #d5d5d5' }}
          content={<CustomTooltip />}
        />
        <Legend
          wrapperStyle={{ fontFamily: 'Roboto, sans-serif' }}
          verticalAlign="bottom"
          height={36}
        />
        <XAxis fontFamily={'Roboto, sans-serif'} dataKey="time" textAnchor="end" tickFormatter={formatTime} />
        <YAxis fontFamily={'Roboto, sans-serif'} dataKey="value" textAnchor="end" tickFormatter={formatValue} />
        <Line activeDot={{ r: 8 }} type="monotone" dataKey="time" stroke="#3fa1e2" dot={{ stroke: '#3fa1e2', strokeWidth: 1, r: 0, fill: '#3fa1e2' }} />
        <Line type="monotone" dataKey="value" stroke="#f53c3c" dot={{ stroke: '#f53c3c', strokeWidth: 1, r: 0, fill: '#f53c3c' }} />
      </LineChart>
      <style>
        {`
          .recharts-text.recharts-cartesian-axis-tick-value tspan {
            font-size: 10px; 
            fill: black; 
          }
        `}
      </style>
    </div>
  );
};

export default Recharts;
