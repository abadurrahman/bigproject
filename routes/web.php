<?php

Route::get('/', function () {return view('pages.index');});
//admin=======
Route::get('admin', 'AdminController@index');