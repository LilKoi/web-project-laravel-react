<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\GetRooms;
use App\Models\Message;
use App\Models\Room;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{

    public function __construct(private Room $room, private Message $message, private User $user)
    {
    }

    public function getRooms()
    {
        return response()->json([
            "rooms" => $this->room->get()
        ]);
    }

    public function getMessanges(Request $request)
    {
        return response()->json([
            'messanges' => $this->message->where("room_id", $request->room_id)->get()
        ]);
    }

    public function createRoom(Request $request)
    {
        $room = new Room($request->toArray());
        $room->save();
        return response()->json([
            "rooms" => $this->room->get()
        ]);
    }

    public function sendMessage(Request $request)
    {
        $message = new Message([
            "room_id" => $request->room_id,
            "user_id" => Auth::user()->id,
            "text" => $request->text
        ]);
        $message->save();
        return response()->json(
            [
                'messanges' => $this->message->where("room_id", $request->room_id)->get()
            ]
        );
    }
}
