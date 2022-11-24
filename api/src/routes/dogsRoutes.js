const {Router} = require('express');
const { getAllDogs } = require('../controllers/dogs');
const router = Router();
const {Dog, Temperament} = require('../db');


// Promises

router.get('/', (req, res) => {
    
    const {name} = req.query;

    
    getAllDogs().then(response => {  
        if(name) {
            let dogName = response.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()));
            if(dogName.length > 0) {
                return res.status(200).send(dogName);
            } else return res.status(404).send(`"${name[0].toUpperCase()+name.toLowerCase().slice(1)}" dog not found`);
        } 
        res.status(200).send(response)
    });

    
});

// Async Await

router.get('/:id', async(req, res) => {

    const {id} = req.params;
    const allDogs = await getAllDogs();

    if(id) {
        const dogsId = allDogs.find(ele => ele.id.toString() === id.toString());

        if(!dogsId) {
            res.status(404).send(`¡UPS! Dog not found`);
        } else res.status(200).send(dogsId)
    }


});

router.post('/', async(req, res) => {

    const {name, height, weight,life_span, image, temperaments } = req.body;

    try {
        if(!name || !height || !weight || !image) {
            res.status(404).send('Missing info')
        }; 


        const newDog = await Dog.create({
            name,
            height,
            weight,
            life_span,
            image,
            
        });

        if(temperaments) {
            let arrTemp = temperaments.split(',').map(ele => ele.trim()[0].toUpperCase() + ele.trim().slice(1))
        
            
            arrTemp.forEach(async (ele) => {
                
                let index = await Temperament.findOrCreate({
                    where: {name: ele}
                })
                
                await newDog.addTemperament(index[0]);
                
            });
            
        }
        res.status(201).json('Dog created successfully');
    } catch (error) {
        res.status(404).send(error.message);
    }

});

router.delete('/:id', async(req, res) => {

    const {id} = req.params;

    try {
        if(id) {
            const deleted = await Dog.destroy({
                where: {
                    id
                }
            })

            res.json('Dog deleted successfully')
        } else {
            res.status(404).send('Some requirements are needed')
        }
    } catch (error) {
        res.status(404).send(error.message)
    }

});


module.exports = router;