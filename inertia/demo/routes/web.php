<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Mehdi'
    ]);
});


Route::get('/welcome', function () {
    return Inertia::render('Welcome/Show');
});
