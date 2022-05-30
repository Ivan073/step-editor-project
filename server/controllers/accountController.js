const db = require("../models/index.js");

const Account = db.accounts;

exports.getAccount = async (req, res) =>{
    const user = await Account.findOne({raw:true, where: {login:req.params.login}});
    if(user){
      res.send({isAuth:true})
    }else{
      res.send({isAuth:false});
    }
    //res.send(user);
}

exports.login = async (req, res) =>{
  console.log(req.body);
  if(!req.body.login || !req.body.password){res.send({isAuth:false});}
  const user = await Account.findOne({raw:true, where: {login:req.body.login}});
  if(user && user.password == req.body.password){
    res.send({isAuth:true});
  }else{
    res.send({isAuth:false});
  }
}

exports.addAccount = (req, res) => {
    const account = new Account(req.query);
    account.save();
    res.send();
}