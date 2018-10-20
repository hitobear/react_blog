import Express from 'express'
const router = Express.Router();
import {responseClient} from '../util'

//admin请求后台验证



router.use('/blog',require('./blog'));


module.exports = router;