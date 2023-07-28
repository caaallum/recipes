import mongoose from 'mongoose'
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
    title: String,
    ingredients: [{
        title: String,
        amount: String
    }]
    }, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
        }
    }
})

export default mongoose.models.Recipe || model('Recipe', recipeSchema)
