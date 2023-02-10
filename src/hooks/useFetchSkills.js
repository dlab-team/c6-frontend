import { useState } from "react";
import axios from 'axios';

export const useFetchSkills = () => {

    const [languages, setLanguages] = useState(null);
    const [frameworks, setFrameworks] = useState(null);
    const [tools, setTools] = useState(null);
    const [softSkills, setSoftSkills] = useState(null);

    const getLanguages = async () => {
        await axios
            .get(process.env.REACT_APP_BACKEND_URL + '/skills/1')
            .then(res => {
                const data = res.data.map(e => ({ value: e.name, label: e.name }));
                setLanguages(data)
            })
            .catch(err => console.log('useFetchSkills ERROR' + err.response))
    }

    const getFrameworks = async () => {
        await axios
            .get(process.env.REACT_APP_BACKEND_URL + '/skills/2')
            .then(res => {
                const data = res.data.map(e => ({ value: e.name, label: e.name }));
                setFrameworks(data)
            })
            .catch(err => console.log('useFetchSkills ERROR' + err.response))
    }

    const getTools = async () => {
        await axios
            .get(process.env.REACT_APP_BACKEND_URL + '/skills/3')
            .then(res => {
                const data = res.data.map(e => ({ value: e.name, label: e.name }));
                setTools(data)
            })
            .catch(err => console.log('useFetchSkills ERROR' + err.response))
    }


    const getSoftSkills = async () => {
        await axios
            .get(process.env.REACT_APP_BACKEND_URL + '/skills/4')
            .then(res => {
                const data = res.data.map(e => ({ value: e.name, label: e.name }));
                setSoftSkills(data)
            })
            .catch(err => console.log('useFetchSkills ERROR' + err.response))
    }

    return {
        languages, frameworks, tools, softSkills, getLanguages, getFrameworks, getTools, getSoftSkills
    };
}
