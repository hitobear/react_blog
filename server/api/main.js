import Express from 'express'
import {responseClient} from '../util'

const router = Express.Router();

//获取全部标签
router.get('/getAllTags', function (req, res) {
    
        responseClient(res, 200, 0, '请求成功', {a:12});
   
});



module.exports = router;