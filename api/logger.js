export default function (req, res, next) {
    console.log('serverMiddleware: ', new Date())
    console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
    console.log('process.env.LOGINMYCV_MAX_FILE_UPLOAD_SIZE_IN_BYTES: ', process.env.LOGINMYCV_MAX_FILE_UPLOAD_SIZE_IN_BYTES)
    console.log('process.env.LOGINMYC_USER_DEFAULT_ALLOCATED_SPACE_IN_BYTES: ', process.env.LOGINMYCV_USER_DEFAULT_ALLOCATED_SPACE_IN_BYTES)
    next()
}