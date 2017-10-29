import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';


/* 仕様
 * 画面を開くとタイトル表示とともに設定を表示
 * 最初はクライアント設定とフォルダ設定の2つ
 * 
 * フォルダ設定は2つ表示する
 * 
 * */
// Title

interface ClientPreference {
    token: string;
    guildId: string;
    channelId: string;
}


//Init preference file with an unique identifier and an optional default data

import { ViewHost, BotPreference, BotController } from './@modules';
import { OnlineMainView, OfflineMainView, TokenSettingView } from './views';

let pref = new BotPreference( 'com.discord-bot.weakenedplayer' );
let controller = new BotController( pref );
let host = new ViewHost();

host.add( 'online-main', new OnlineMainView( controller ) );
host.add( 'offline-main', new OfflineMainView( controller ) );
host.add( 'token-setting', new TokenSettingView( pref ) );
host.show$.subscribe();
host.next( 'offline-main' );

/*
import { View, ViewHost, MainView } from './host';

let host = new ViewHost();
host.register( new MainView() );
host.start();

host.goto( 'main');
import { View, ViewHost, ViewReference } from './view';
import { 
    TitleView, 
    MainView, 
    DirectorySettingView, 
    ScreenshotDirectorySettingView,
    TemporaryDirectorySettingView,
    TokenSettingView,
    LoginView,
} from './views';

let host = new ViewHost();
host.register( new TitleView() );
host.register( new MainView() );
host.register( new DirectorySettingView() );
host.register( new TokenSettingView( prefs ) );
host.register( new LoginView( bot, prefs ) );
host.register( new TemporaryDirectorySettingView( prefs ) );
host.register( new ScreenshotDirectorySettingView( prefs ) );
host.open( {id: 'title'} );

function confirmReuse(): Promise<boolean> {
    return prompt( {
        type: 'confirm',
        name: 'reuse',
        message: 'Do you want to use previous token:' + prefs.client.token,
    } ).then( ( answer ) => {
        return answer.reuse as boolean;
    } );
}

function inputToken(): Promise<string> {
    return prompt( {
        type: 'input',
        name: 'token',
        message: 'Token plz.'
    } ).then( ( answer ) => { 
        if( answer.token ) {
            console.log( answer.token );
            return Promise.resolve( answer.token );
        } else {
            clear();
            return inputToken();
        }
    } );
}

function checkToken( token: string ): Promise<void> {
    return this.bot.login( token ).then( () => {
        console.log( 'login succeeded' );
    } );
}

let token = '';
confirmReuse()
.then( ( answer ) => {
    if( !answer ) {
        return inputToken().then( token => {
            prefs.client.token = token;
            return Promise.resolve( token );
        } );
    } else {
        return Promise.resolve( prefs.client.token );
    }
} )
.then( token => {
    bot.login( token ).then( () => {
        bot.logout();
    } );
} );
*/