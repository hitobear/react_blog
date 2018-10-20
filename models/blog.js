import mongoose from 'mongoose'
import blog from '../schemas/blog'

module.exports = mongoose.model('Blog',blog);