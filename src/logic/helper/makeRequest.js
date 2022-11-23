import httpClient from "logic/interfaces/httpClient";

const makeRequest = async (config , handleErrorReponse = (error) => {}) => {
      try {
        const response = await httpClient(config)
        return response.data
      } catch (error) {

        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

          if(error.response._response === "Could not connect to the server."){
            alert("Impossible de se connecter au serveur")
          }


          if(error.response.status == 500){
            console.log("Probleme avec le serveur")
            throw Error("")
          }

          handleErrorReponse(error)

        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        // console.log(error.config);

        
        throw Error("")
      }

}

export default makeRequest