import axios from "axios";
import { json } from "react-router-dom";

//Default Configurations: AXios
export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeout: 6000,

    }
)