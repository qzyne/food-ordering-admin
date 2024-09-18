import React from 'react';
import '../style/DashboardMain.css';
const Status = (props) => {
    const status = props.status;
    const color = props.color;

    const lowerColor = color.replace(" ", "").toLowerCase();
    return (
        <div className={`${lowerColor} p-1 text-center`}>{status}</div>
    );
};

export default Status;

