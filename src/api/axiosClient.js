import axios from "axios";

function getToken() {
  const token = JSON.parse(window.localStorage.getItem("top-code"))?.token;
  return token;
}

 
const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {     
		'Content-Type': 'application/json',
		post: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	},
    withCredentials: false
});

axiosClient.interceptors.request.use(function (config) {
	config.headers.Authorization = "Bearer "+ getToken();
    return config;
});

axiosClient.interceptors.response.use(response=> {
	// Nếu token hết hạn thì chuyển về trang login
	if(response.data.ResponseCode == 401) {
    localStorage.removeItem("top-code");
    window.location.href = "/login";
	}
	return response;
}, (e)=> {
	return Promise.reject(e);
});

export { axiosClient };