import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"


function getData(){
    return axios
            .get(baseUrl)
            .then(response => response.data)
}


function newNumber(person){
    return axios
            .post(baseUrl, person)
            .then(response => response.data)
}


function deleteNumber(id){
    return axios
            .delete(baseUrl + `/${id}`)
            .then(response => response.data) 

}

export default {getData, newNumber, deleteNumber}