import { Legend, Tooltip } from "chart.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Recharts = ({ propList }) => {

    console.log(propList)

    return (
        <div className="recharts-style">
            <LineChart width={500} height={335} data={propList} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <XAxis dataKey="time" textAnchor="end"  />
                <YAxis  dataKey="value" textAnchor="end" />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                <Line activeDot={{ r: 8 }} type="monotone" dataKey="time" stroke="#f72373" dot={{ stroke: '#f72373', strokeWidth: 1, r: 0, fill: '8884d8'}} />
                <Line type="monotone" dataKey="value" stroke="#f72373" dot={{ stroke: '#f72373', strokeWidth: 1, r: 0, fill: '#f72373'}} />
                
            </LineChart> 
        </div>
    );
};

export default Recharts;
