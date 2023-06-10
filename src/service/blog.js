import axios from "axios";
class BlogDataService {
    getAll() {
        return axios.get('http://localhost:8080/api/v1/blogs')
    }
    get(id) {
        return axios.get(`http://localhost:8080/api/v1/blog/id/${id}`)
    }
}
export default new BlogDataService();