/**
 * article 表结构
 **/

import mongoose from 'mongoose'

module.exports = new mongoose.Schema({
    title:String,//博客标题
    content:String,//博客内容
    viewCount:Number,//浏览次数
    commentCount:Number,//评论次数
    description:String,//博客描述
    isPublish:Boolean//是否发布
});