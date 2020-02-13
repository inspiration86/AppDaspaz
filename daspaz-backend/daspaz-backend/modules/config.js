const path = require('path');
const bcrypt = require('bcrypt');
module.exports = {
    port : 3000,
    host:'http://192.168.1.3:',
    secret :'sadas@!$@#%!^#!GSDGETWT@#OI%J@#%!*#)^U#)^U!@)U',
    //secret : bcrypt.hashSync('sadas@!$@#%!^#!GSDGETWT@#OI%J@#%!*#)^U#)^U!@)U', 10),
    path : {
        controllers : {
            api : path.resolve('./modules/controllers/api'),
            web : path.resolve('./modules/controllers/web')
        },
        model : path.resolve('./modules/models'),
        transform : path.resolve('./modules/transforms'),
        controller : path.resolve('./modules/controllers'),
    }
}