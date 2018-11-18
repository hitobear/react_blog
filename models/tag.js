import mongoose from 'mongoose'
import tag from '../schemas/tag'

module.exports = mongoose.model('Tag',tag);