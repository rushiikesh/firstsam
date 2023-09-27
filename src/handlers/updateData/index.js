const updateDataService = require('./service');

exports.updateData = async (event) => {
    try {
        const reqId = event.pathParameters.id;
        const reqBody = JSON.parse(event.body);

        console.log(reqId);

        if(!reqId || !reqBody) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "An error occurred", error: error.message }),
            };
        }

        const response = await updateDataService.updateData(reqId,reqBody);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data updated successfully!", data: response})
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred", error: error.message }),
        };
    }
}