const getDataService = require('./service');

exports.getAllData = async (event) => {
    try {
        const response = await getDataService.getData();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: response})
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred", error: error.message }),
        };
    }
}