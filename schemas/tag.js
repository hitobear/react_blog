/**
 * tag 表结构
 **/

import mongoose from 'mongoose'

module.exports = new mongoose.Schema({
    name:String,//标签名字
    shortName:String,//标签缩写
});