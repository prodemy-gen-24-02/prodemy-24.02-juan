// const axios = require('axios');

const getData = async () => {
    try{
        const response = await axios.get('https://dummyjson.com/recipes');
        console.log(response.data.recipes);
    } catch (error) {
        console.log(error);
    }

}
 getData();

const getPost = async () => {
    try{
        const resp = await axios.get('https://dummyjson.com/posts');
        console.log(resp.data);
    } catch (error) {
        console.log(error);
    }
}

 const addData = {
    title: "Dave",
    userId: 10,
    body: "Dive Dave Div"
 };
 const postData = async () => {
    try{
        const respun = await axios.post('https://dummyjson.com/posts/add', addData, {
            headers: {
                'Content-type': 'application/json'
            }
        });
        console.log(respun)
    } catch (error) {
        console.log(error)
    }
 }

 const update = {
    title: "update",
    body: "also update"
 };

 const updateData = async (id, data) => {
    try {
        const response = await axios.put(`https://dummyjson.com/posts/${id}`, data, {
            headers: {
                'Content-type': 'application/json'
            }
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 }

 const deleteData = async (id) => {
    try {
        const response = await axios.delete(`https://dummyjson.com/posts/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 }
