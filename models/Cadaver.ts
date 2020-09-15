import {v4 as uuidv4} from 'uuid';

export class Cadaver {
    public id: string;

    public static create(id?: string): Cadaver {
        return new Cadaver(id || uuidv4());
    }
    constructor(id: string) {
        this.id = id;
    }
}
