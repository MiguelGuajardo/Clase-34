const sharp = require("sharp")
const fs = require("fs")

const profileThumbnailLoad = async (_id)=>{
    const avatarImageId = `uploads/${_id}.png`
    return avatarImageId
}
const profileThumbnail = async (file,_id)=>{
    const avatar = await file

    const proccesedAvatar = sharp(avatar.buffer)
    const resizeAvatar = proccesedAvatar
    const resizeAvatarBuffer = await resizeAvatar.toBuffer()
    fs.writeFileSync(`public/uploads/${_id}.png`,resizeAvatarBuffer)
    const avatarImageId = `uploads/${_id}.png`
    return avatarImageId
}
module.exports = {profileThumbnailLoad,profileThumbnail}