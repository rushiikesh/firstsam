const {Actor} = require('mysql-layer/index');

exports.getData = async (id) => {
    try {
        const data = await Actor.findOne({
            where:{
                id
            }
        });

        return data
    } catch (error) {
        return error
    }
}