import {Cadaver} from '../models/Cadaver';

export class Cadaveres {
    public cadaveresDisponibles: Cadaver[] = [];
    public cadaveresActualizandose: Cadaver[] = [];
    //public cadaveresTerminados: Cadaver[] = [];

    public async get(): Promise<Cadaver> {
        const currentCadaver =
            this.cadaveresDisponibles.shift() || Cadaver.create();
        this.cadaveresActualizandose.push(currentCadaver);
        return currentCadaver;
    }

}
