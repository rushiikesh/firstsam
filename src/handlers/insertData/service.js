const {Actor} = require('mysql-layer/index');

exports.insertData = async (req) => {
    try {
        const id = req.id;
        const name = req.name;
        const age = req.age;

        console.log(id,name,age);
        if(!id || !name || !age) throw Error('Please insert id, name and age.');

        const data = await Actor.create(
            req
        );

        return data
    } catch (error) {
        return error
    }
}