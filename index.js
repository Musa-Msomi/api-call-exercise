import axios from "axios";


axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
        userId: 10
    }
})
    .then((response) => {

        console.log(response);
    })
    .catch(function (error) {

        console.log(error);
    })