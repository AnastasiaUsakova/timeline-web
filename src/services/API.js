import axios from 'axios'

export const signup = (user) => {
    return axios.post('/api/v1/user', user);
};

export const login = (user) => {
    return axios.post('/api/v1/login', {}, {auth: user});
};

//======================================================================================================================

export const getNextCard = (playerId) => {
    return axios.get(`/api/v1/game/deck/${playerId}`);
}

export const start = (username) => {
    return axios.get(`/api/v1/game/start/${username}`);
}

export const getHand = (playerId) => {
    return axios.get(`/api/v1/game/hand/${playerId}`);
}