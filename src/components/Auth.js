const token = 'jwttoken';

export const login = () => {
    localStorage.setItem(token, 'Token');
}

export const isLogin = () => {
    if (localStorage.getItem(token)) {
        return true;
    }

    return false;
}