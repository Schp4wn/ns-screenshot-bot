import { prompt, inquirer } from './cli';
import { View } from './view';

export abstract class ListView extends View {
    private choices: string[] = [];
    private actions: { [ name: string ]: () => void } = {};
    
    constructor() {
        super();
    }
    
    protected add( choice: string, action: () => void ): void {
        if( choice && !this.actions[ choice ] ) {
            this.choices.push( choice );
        }
        this.actions[ choice ] = action;
    }
    
    protected addSeparator(): void {
        this.choices.push( new inquirer.Separator() );
    }
    
    protected clear(): void {
        this.choices = [];
        this.actions = {};
    }

    protected abstract message(): string;
    
    protected showAndExecute( param?: any ): Promise<void> {
        return this.showPrompt( param )
        .then( ( command ) => {
            // console.log( command )
            this.execute( command );
        } );
    }
    
    protected showPrompt( param?: any ): Promise<string> {
        if( param && param.message ) {
            console.log( param.message );
        }
        return inquirer.prompt( {
            type: 'list',
            name: 'chosen',
            choices: this.choices,
            message: this.message(),
        } ).then( answer => {
            return answer.chosen;
        } );
    }
    
    protected execute( command: string ): void {
        let action = this.actions[ command ];
        if( action ) {
            action();
        }
    }
    
}
