import { Subject, Subscription, Observable } from 'rxjs';
var Preferences = require("preferences");

const initValue = {
    client: {
        token: 'MzM4MzU4Nzk4MDY0NDE4ODE4.DL0uXQ.pmu6W_FdguNS7GulaK_hpbPrPxE',
    },
    directory: {
        src: 'screen-shot directory',
        tmp: 'temporary directory'
    }
};

export class BotPreference {
    private pref: any;
    constructor( id: string ){
        this.pref = new Preferences( id, initValue );
    } 
    set token( token: string ){ this.pref.client.token = token; }
    get token(): string { return this.pref.client.token; }

    set source( source: string ){ this.pref.directory.source = source; }
    get source(): string { return this.pref.directory.source; }

    set temporary( temporary: string ){ this.pref.directory.temporary = temporary; }
    get temporary(): string { return this.pref.directory.temporary; }
}
