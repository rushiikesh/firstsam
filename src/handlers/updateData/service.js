const {Actor} = require('mysql-layer/index');

exports.updateData = async (reqId,reqBody) => {
    try {
        const data = await Actor.update(reqBody, {
            where:{
                id: reqId
            }
        });

        return data

    } catch (error) {
        return error
    }
}