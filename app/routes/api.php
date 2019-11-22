<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/quizzes', 'QuizController@all')->name('quiz.all');
Route::get('/quizzes/{quiz}', 'QuizController@show')->name('quiz.show');
Route::post('/quizzes', 'QuizController@store')->name('quiz.store');