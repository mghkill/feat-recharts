import { Legend, Tooltip } from "chart.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Recharts = ({ propList }) => {

    return (
        <div>
            <LineChart width={600} height={300} data={propList}>
                <XAxis dataKey="time" textAnchor="end"  />
                <YAxis  dataKey="value" textAnchor="end" />
                <Line activeDot={{ r: 8 }} type="monotone" dataKey="time" stroke="#f72373" dot={{ stroke: '#f72373', strokeWidth: 1, r: 0, fill: '8884d8'}} />
                <Line type="monotone" dataKey="value" stroke="#f72373" dot={{ stroke: '#f72373', strokeWidth: 1, r: 0, fill: '#f72373'}} />
                
            </LineChart> 
        </div>
    );
};

export default Recharts;
