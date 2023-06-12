import React from "react";

const PortalButton: React.FC<{ email: string }> = ({ email }) => {
    const handleClick = async () => {
        const response = await fetch("/api/create-portal-session", { method: "POST",}).then(v => v.json());

        if (response.error) {
            window.location.href = "/join";
            return;
        }
        window.open(response.portalSession, '_blank');
        return;
    };

    return <button onClick={handleClick}>Manage Subscription</button>;
};

export default PortalButton;