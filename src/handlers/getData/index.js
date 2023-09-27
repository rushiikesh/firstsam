const getDataService = require('./service');

exports.getData = async (event) => {
    try {
        const id = event.pathParameters.id;

        const response = await getDataService.getData(id);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data fetched successfully!", data: response})
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred", error: error.message }),
        };
    }
}