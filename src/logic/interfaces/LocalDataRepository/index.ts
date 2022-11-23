class LocalDataRepository{
    async save(key : string , data : string){
        try {
            localStorage.setItem(key, data)
          } catch (e) {
          }
    }

    async get(key : string){
        try {
            const value = localStorage.getItem(key)
            if(value !== null) return value
        } 
        catch(e) {
        }
    }
    async remove(key : string){
        try {
            localStorage.removeItem(key)
        } 
        catch(e) {
        }
    }

}


export {
    LocalDataRepository
}