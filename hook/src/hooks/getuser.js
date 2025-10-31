import axios from "axios";
import { useEffect, useState } from "react";


export const useGetuser = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
            setUsers(data.data.slice(0, 6));
        });

    }, [])
    return { users }
};