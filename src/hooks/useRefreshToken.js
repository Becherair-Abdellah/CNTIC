import { useCookies } from 'react-cookie';
const  useRefreshToken = async () => {
    const [cookies, setCookie] = useCookies(['refresh']);

    const refresh = async () => {
        const response = await fetch('https://backend.cntic-club.com/api/token/refresh/', {
            method: 'POST',
            body: cookies.refresh,
        });
        console.log(response);
}
    return refresh;
}
export default useRefreshToken;