import axiosConfig from "../Utils/config/axios.config";

export default function getData() {
    return axiosConfig.get('/', {
        validateStatus: function (status) {
            return status < 500;
        }
    })
}