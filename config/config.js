module.exports = {
    host:process.env.HOST || '127.0.0.1',
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:5000),
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '5030',
    dbHost:"localhost",
    dbPort:"27017",
    app:{
        title:"lt blog",
        description:'Nealyang\'s personal blog demo',
        head:{
            titleTemplate:'blog',
            meta:[
                {
                    name:"description",
                    content:"react express demo"
                },
                {charset:"utf-8"}
            ]
        }
    }
};