import Express from 'express'
import Tag from '../../models/tag'
import {responseClient} from '../util'

const router = Express.Router();

router.post('/add', function (req, res) {
    console.log('apidadd tag...')
    const {
        name,
        shortName
    } = req.body;
    let tag = new Tag({
        name,
        shortName,
    });
    tag.save().then(data=>{
        responseClient(res,200,0,'保存成功',data)
    }).cancel(err=>{
        console.log(err);
        responseClient(res);
    });
});

router.post('/update',(req,res)=>{
    const {
        name,
        shortName,
        id
    } = req.body;
    Tag.update({_id:id},{name,shortName})
        .then(result=>{
            console.log(result);
            responseClient(res,200,0,'更新成功',result)
        }).cancel(err=>{
        console.log(err);
        responseClient(res);
    });
});
//获取tag列表
router.get('/list', function (req, res) {
    let responseData = {
        list: []
    };
    Tag.find(null, 'name shortName').then(data => {
        responseData.list=data
        responseClient(res, 200, 0, '请求成功', responseData);
    }).catch(err => {
        responseClient(res);
    })
});
module.exports = router;