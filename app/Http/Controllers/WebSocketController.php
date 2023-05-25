<?php

namespace App\Http\Controllers;

use BeyondCode\LaravelWebSockets\Facades\WebSocketsRouter;
use Illuminate\Http\Request;

class WebSocketController extends Controller
{
    public function auth(Request $request)
    {
        $channelName = $request->input('channel_name');
        $socketId = $request->input('socket_id');
        $userId = $request->input('user_id');

        return WebSocketsRouter::authenticate($request);
    }
}
