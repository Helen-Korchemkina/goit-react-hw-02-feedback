import React from "react";
import './Notification.css';

const Notification = ({message }) => (
    <div>
        <h2 className="Notification__massage">{message}</h2>
    </div>
)

export default Notification;

