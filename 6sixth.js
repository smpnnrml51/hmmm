const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);
console.log(`the system uptime is ${os.uptime} seconds`);

const currentOS = {
    name:os.type(),
    realease:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(currentOS);
