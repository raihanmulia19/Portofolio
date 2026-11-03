<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/work', function () {
    return Inertia::render('Work');
})->name('work');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('projects');

Route::get('/what-i-can-do', function () {
    return Inertia::render('WhatICanDo');
})->name('what-i-can-do');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/awards', function () {
    return Inertia::render('Awards');
})->name('awards');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/build/{path}', function (string $path) {
    if (str_contains($path, '..')) {
        abort(404);
    }
    $filePath = public_path('build/' . $path);
    if (!file_exists($filePath) || is_dir($filePath)) {
        abort(404);
    }

    while (ob_get_level() > 0) {
        ob_end_clean();
    }

    $ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
    $mime = match ($ext) {
        'js', 'mjs' => 'application/javascript; charset=utf-8',
        'css' => 'text/css; charset=utf-8',
        'json' => 'application/json; charset=utf-8',
        'svg' => 'image/svg+xml',
        default => mime_content_type($filePath) ?: 'application/octet-stream',
    };

    header('Content-Type: ' . $mime);
    header('Content-Length: ' . filesize($filePath));
    header('Cache-Control: public, max-age=31536000, immutable');
    readfile($filePath);
    exit;
})->where('path', '.*');

require __DIR__.'/auth.php';
