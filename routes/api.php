<?php

use App\Http\Controllers\Api\BrandController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\ProviderController;

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


Route::group(['middleware' => 'api'], function ($router) {
    $router->post('login', [AuthController::class , 'login']);

    $router->group(['middleware' => 'auth:sanctum'], function ($router) {
        $router->post('logout', [AuthController::class , 'logout']);
        $router->get('me', [AuthController::class , 'me']);

        $router->resource('products', ProductController::class)->only(['index', 'store', 'update']);
        $router->resource('companies', CompanyController::class)->only(['index', 'store', 'update']);
        $router->resource('providers', ProviderController::class)->only(['index', 'store', 'update']);
        $router->resource('brands', BrandController::class)->only(['index', 'store', 'update']);
    });
});

Route::get('test', function () {
   return request()->input('providers')->count();
});
