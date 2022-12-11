const appConstants = {
    ACCESS_TOKEN_KEY : "accessToken",
    REFRESH_TOKEN_KEY : "refreshToken",

    imgPreview:"data:image/gif;base64,R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs=",
    heartIconPathId : "heartItemPath"
}
const ROUTES = {
    home: "/",
    societyDetails : "/societyDetails/:societyName",
    toSocietyDetails : (societyName : string) =>  "/societyDetails/"+societyName,
    

    register: "/register",
    login: "/login",
    changePassword : "/changePassword",
    forgetPassword : "/forgetPassword",
    resetPassword : "/resetPassword"
}

const kPalette = {
    red:"#991B1B",
}


interface SettingType {
    apiUrl:string
}
interface AllSettings{
    dev : SettingType
    prod : SettingType
    staging : SettingType
}

const settings : AllSettings = {
    dev : {
      apiUrl : "http://127.0.0.1:8000"
    },
    staging : {
        apiUrl : "https://recrutrackerback.herokuapp.com/"
      },
    prod : {
      apiUrl : "https://recrutrackerback.herokuapp.com/"
    }
  }

export {ROUTES,kPalette}

export default appConstants