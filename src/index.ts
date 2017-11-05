import { Observable } from 'rxjs';
import { ViewHost, BotController, BotPreference } from './@modules';

import { SourceInputView, TemporaryInputView, TokenInputView, StartView, ConnectedView } from './views';

let host = new ViewHost();
let pref = new BotPreference( 'com.discord-bot.weakenedplayer' );
let controller = new BotController( pref );

host.add( 'start', new StartView( controller ) );
host.add( 'connected', new ConnectedView( controller ) );
host.add( 'source-input', new SourceInputView( pref ) );
host.add( 'temporary-input', new TemporaryInputView( pref ) );
host.add( 'token-input', new TokenInputView( pref ) );

host.start();
host.next( 'start' );
