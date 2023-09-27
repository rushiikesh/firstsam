const destroyDataService = require('./service');

exports.destroyData = async (event) => {
    try {
        const id = event.pathParameters.id;

        const response = await destroyDataService.destroyData(id);

        if(!response) return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred", error: error.message }),
        };

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data destroyed successfully!"}),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred", error: error.message }),
        };
    }
}