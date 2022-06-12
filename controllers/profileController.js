const db = require("../database/models")
const Users = db.Users;

const updateProfile = (req, res) => {
    Users.findByPk(req.params.id).then((pr) => {
        if(pr){
            pr.update(req.body)
            msg = pr
        }else{
            msg = `${req.params.id} not found in db`
        }
        res.json({ message: msg })
    }).catch((err) => {
        res.json({ msg: err.message });
    });
}
const destroyProfile = (req, res) => {
    let msg
    Users.findByPk(req.params.id).then((row) => {
        if(row){
            row.destroy()
            msg = "success deleted Users"
        }else{
            msg = `${req.params.id} not found in db`
        }
        res.json({ message: msg })
    }).catch((err) => {
        res.json({ message: err.message })
    })
}

module.exports = {
    updateProfile, destroyProfile
}