import axios from "axios";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
if(!process.env.REACT_APP_GITHUB_TOKEN){
    console.error("토큰을 읽을 수 없어요");
}
console.log(GITHUB_TOKEN);
const api = axios.create({
    baseURL : 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept : 'application/vnd.github+json'
    }
});

export default api;