

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

const getCurrentSettings = () => {
    return settings.dev
}


export default getCurrentSettings()