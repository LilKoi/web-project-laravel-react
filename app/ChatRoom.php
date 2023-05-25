<?php

namespace App;

class ChatRoom
{
    protected static $rooms = [];

    public static function create($roomId)
    {
        static::$rooms[$roomId] = [];
    }

    public static function get($roomId)
    {
        return static::$rooms[$roomId] ?? null;
    }

    public static function addMessage($roomId, $message)
    {
        static::$rooms[$roomId][] = $message;
    }

    public static function getAll(): array
    {
        return static::$rooms;
    }
}
