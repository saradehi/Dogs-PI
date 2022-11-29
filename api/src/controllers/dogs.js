require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Dog, Temperament} = require('../db');


const getDogsApi = async() => {

    const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

    const res = await url.data.map(ele => {
        return {
            id: ele.id,
            name: ele.name,
            height: ele.height.metric,
            weight: ele.weight.metric.split(' - ').map(ele=> parseInt(ele)).reduce((a, b) => a + b)/2,
            life_span: ele.life_span,
            temperament: ele.temperament,
            image: ele.image.url
        }
    });

    return res;
    

}

const getDogsDb = async() => {

    const findDogs = await Dog.findAll({
        include: {
            model: Temperament
        }
    });

    const findedDogs = await findDogs.map(dogs => {
        return {
            id: dogs.dataValues.id,
            name: dogs.dataValues.name,
            height: dogs.dataValues.height,
            weight: dogs.dataValues.weight,
            life_span: dogs.dataValues.life_span,
            temperament: dogs.dataValues.temperament,
            image: dogs.dataValues.image
        }

    });

    return findedDogs;
    
};

const getAllDogs = async() => {

    const apiDogs = await getDogsApi();
    const dbDogs = await getDogsDb();

    const allDogs = [...apiDogs, ...dbDogs];

    return allDogs;

};

module.exports = {
    getDogsApi,
    getDogsDb,
    getAllDogs
}


