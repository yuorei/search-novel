import{dbSerectUser} from 'db.js'
function login(mail,password){
    var id=dbSerectUser(mail,password)
    if(id!=null){
        return id;
    }
    //間違っている場合は0とする
    return 0;
}
export {login};