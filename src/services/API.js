import axios from 'axios'

export const signup = (user) => {
    return axios.post('/api/v1/user', user);
};

export const login = (user) => {
    return axios.post('/api/v1/login', {}, {auth: user});
};

//======================================================================================================================

export const getNextCard = () => {
    return axios.get("/api/v1/game/deck");
}