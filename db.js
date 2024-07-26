const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useUnifiedTopology: true
        });
        console.log('Connected to database.');
    } catch (error) {
        console.log('Could not connect to database.', error);
    }
};
