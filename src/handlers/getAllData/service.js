const {Actor} = require('mysql-layer/index');

exports.getData = async () => {
    try {
        const data = await Actor.findAll();

        if(!data) throw Error('No Data Found!');
        
        return data
    } catch (error) {
        return error
    }
}