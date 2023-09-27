const insertDataService = require('./service');


exports.insertIntoDb = async (event, context) => {
    try {
        let req = JSON.parse(event.body);

        // if(!id || !name || !age){
        //     return res.status(400).json({
        //         status:"FAILED",
        //         error:'Name, Age, Sport are manadatory fields.'
        //     })
        // }

        const response = await insertDataService.insertData(req);

        console.log(response);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data inserted successfully!"}),
        };


    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred", error: error.message }),
        };
    }
}