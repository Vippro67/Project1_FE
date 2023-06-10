import axios from "axios";
class TourDataService {
    getAll() {
        return axios.get('http://localhost:8080/api/v1/tours')
    }
    get(id) {
        return axios.get(`http://localhost:8080/api/v1/tours/id/${id}`)
    }
}
export default new TourDataService();