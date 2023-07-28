import express from 'express'
import mongoose from 'mongoose'
import Recipe from './model/recipe'

const app = express()

app.use(express.json());

mongoose.connect("mongodb://recipe:password@localhost:27017/recipe")

app.get('/recipe', async (req, res) => {
  const recipies = await Recipe.find({})
  res.json(JSON.stringify(recipies))
})

app.post('/recipe', async (req, res) => {
  const recipe = await Recipe.create(req.body)
  console.log(recipe)
}) 

export const handler = app
