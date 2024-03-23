<?php

use App\Http\Controllers\LoginController;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('login',[LoginController::class, 'create'] )->name('login');
Route::post('login', [LoginController::class, 'store']);

Route::middleware('auth')->group(function() {
    Route::get('/', function () {
        return Inertia::render('Home', [
            'name' => 'Mehdi'
        ]);
    });
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome/Show');
});

Route::post('/logout', function () {
    dd(request());
});
Route::get('/user', function () {
    return Inertia::render('User', [
        'time' => now()->toTimeString(),
        'name' => 'Mehdi Degryse'
    ]);
});
