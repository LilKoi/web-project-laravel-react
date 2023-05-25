<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post("sendRooms", [ChatController::class, "sendRooms"]);
Route::get("getRooms", [ChatController::class, "getRooms"]);
Route::post("createRoom", [ChatController::class, "createRoom"]);
Route::post("getMessanges/{room_id}", [ChatController::class, "getMessanges"]);
Route::post("sendMessage", [ChatController::class, "sendMessage"]);

