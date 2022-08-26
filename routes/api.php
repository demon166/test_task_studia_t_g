<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthorController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'json.response'], function (){
  Route::apiResources([
    'articles' => ArticleController::class,
    'authors' => AuthorController::class,
  ]);
});
