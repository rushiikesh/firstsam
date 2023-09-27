const {Actor} = require('mysql-layer/index');

exports.destroyData = async (id) => {
    try {
        const data = await Actor.destroy({
            where:{
                id
            }
        });

        return data
    } catch (error) {
        return error
    }
}