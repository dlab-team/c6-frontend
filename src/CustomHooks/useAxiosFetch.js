import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

export const useFetch = (url) => {

    const { token } = useContext(AuthContext);
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
 

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const { token } = useContext(AuthContext);

    const config = {
        headers: {
            Authorization: "Bearer " + token
        } 
    }

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        try {
            const resp = await axios.get(url, config);
            const data = resp.data;

            setState({
                data,
                isLoading: false,
                hasError: null,
            });
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                hasError: error
            });
        }
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
