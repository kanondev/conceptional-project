import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/Authprovider';

const MyAppoinments = () => {
    const { user } = useContext(authContext)
    const [localSavedData, setLocalSavedData] = useState([])
    useEffect(() => {
        const localData = localStorage.getItem("appoinments");
        let savedData = []
        if (localData) {
            savedData = JSON.parse(localData)
        }
        const userData = savedData.filter(data => data.email === user?.email)
        setLocalSavedData(userData)
    })
    return (
        <div>
            <h2 className="text-4xl">I ma form my appoinments</h2>
        </div>
    );
};

export default MyAppoinments;