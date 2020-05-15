const ItemModel = require('./model');
module.exports.getAllItems = async () => {
    try {
        const items = await ItemModel.find();
        return items;
    } catch (error) {
        return error;
    }
}
module.exports.createItem = async ({
    name,
    quantity,
    isSanitized,
    category,
    location
}) => {
    try {
        const response = await ItemModel.findOneAndUpdate({ name: name },
            {
                $set: {
                    name,
                    quantity,
                    isSanitized,
                    category,
                    location
                }
            }, { useFindAndModify: false, runValidators: true });
        return response;
    } catch (error) {
        return error;
    }
}

module.exports.findItemAndUpdate = async ({ id }, {
    name,
    quantity,
    isSanitized,
    category,
    location
}) => {
    try {
        const item = await ItemModel.findByIdAndUpdate(
            { _id: id },
            {
                name,
                quantity,
                isSanitized,
                category,
                location
            }, { useFindAndModify: false });
        return item;
    } catch (error) {
        return error;
    }
}

module.exports.findItemAndDelete = async ({ id }) => {
    try {
        const item = await ItemModel.findByIdAndDelete({ _id: id });
        return item;
    } catch (error) {
        return error;
    }
}