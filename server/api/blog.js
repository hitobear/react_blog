import Express from 'express'

const router = Express.Router();
import Blog from '../../models/blog'
import {responseClient} from '../util'

router.post('/addBlog', function (req, res) {
    const {
        title,
        content,
        description,
        tags,
    } = req.body;
    const coverImg =  `/${Math.round(Math.random() * 9 + 1)}.jpg`;
    const viewCount = 0;
    const commentCount = 0;
    let tempBlog = new Blog({
        title,
        content,
        tags:tags.split(','),
        description,
        viewCount,
        commentCount
    });
    tempBlog.save().then(data=>{
        responseClient(res,200,0,'保存成功',data)
    }).cancel(err=>{
        responseClient(res);
    });
});

router.post('/updateBlog',(req,res)=>{
    const {
        title,
        content,
        description,
        tags,
        id
    } = req.body;
    Blog.update({_id:id},{title,content,description,tags:tags.split(',')})
        .then(result=>{
            responseClient(res,200,0,'更新成功',result)
        }).cancel(err=>{
        responseClient(res);
    });
});
//获取文章
router.get('/list', function (req, res) {
    let searchCondition = {
    };
    let responseData = {
        total: 0,
        list: []
    };
    Blog.count(searchCondition)
        .then(count => {
            responseData.total = count;
            Blog.find(searchCondition, '_id title isPublish viewCount commentCount description content', {
                limit: 5
            })
                .then(result => {
                    responseData.list = result;
                    responseClient(res, 200, 0, 'success', responseData);
                }).cancel(err => {
                throw err
            })
        }).cancel(err => {
        responseClient(res);
    });
});
module.exports = router;