import axios from "axios";
import { useEffect, useState } from "react";


export const useGetuser = () => {
    const [users, setUsers] = useState();

    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
            setUsers(data.data);

            setLoading(false)
        });
    }, [])

    return { users, Loading }
};