import { LEVELS } from "./levels_num";

export class Contact {
    name = '';
    lastName = '';
    email = '';
    connected = false;
    level = LEVELS.NORMAL; 

    constructor(name, lastName, email, connected, level){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.connected = connected;
        this.level = level
    }

}