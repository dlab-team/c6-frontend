import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        try {
            const resp = await axios.get(url);
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
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
