import React from "react";

const PortalButton: React.FC<{ email: string }> = ({ email }) => {
    const handleClick = async () => {
        return;
    };

    return <button onClick={handleClick}>Pay Now</button>;
}

export default PortalButton;