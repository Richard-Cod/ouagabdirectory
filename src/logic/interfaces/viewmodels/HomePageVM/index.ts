// import { toast } from 'react-toastify';
import { User } from 'logic/models/User';
import { LoginPayload } from 'logic/interfaces/authenticator/IAuthenticator';

import { DependencyContainer } from 'logic/interfaces/deps';
import { LocalDataRepository } from 'logic/interfaces/LocalDataRepository';


class HomePageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    getLoggedInUser = async () : Promise<User|null> => {
        const result = await this.dependencyContainer.authenticator.me()
        return result
    }


    getCategories = async () => {
        const result  = await  this.dependencyContainer.categoryRepo.getCategories()
        return result
    }

    

}

export default HomePageVM