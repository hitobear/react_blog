import Express from 'express'
import {responseClient} from '../util'
import Blog from '../../models/blog'
const router = Express.Router();

//获取全部标签
router.get('/getAllTags', function (req, res) {
    
        responseClient(res, 200, 0, '请求成功', {a:12});
   
});
//获取文章详情
router.get('/getBlog', (req, res) => {
        let _id = req.query.id;
        Blog.findOne({_id})
           .then(data=>{
               data.viewCount = data.viewCount+1;
               Blog.update({_id},{viewCount:data.viewCount})
                   .then(result=>{
                       responseClient(res,200,0,'success',data);
                   }).cancel(err=>{
                       throw err;
               })
    
           }).cancel(err => {
           responseClient(res);
       });
    });



module.exports = router;