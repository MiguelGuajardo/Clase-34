const { profileThumbnailLoad, profileThumbnail } = require("../services/profileService")

const profile = async (req,res,next)=>{
    let datos = req.user
    const {email,firstName,lastName,alias,edad,direccion,creationDate,phone,_id} = datos

    
    const avatarImageId = await profileThumbnailLoad(_id)

    res.render("profile",{email,firstName,lastName,alias,edad,direccion,creationDate,phone,avatarImageId})
}
const profileThumbnailSend = async (req,res,next)=>{
    let datos = req.user
    const {_id} = datos
    await profileThumbnail(req.file,_id)
}
module.exports = {profile,profileThumbnailSend}