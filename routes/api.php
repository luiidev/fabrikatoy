<?php

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\api\SaleController;
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
        $router->resource('categories', CategoryController::class)->only(['index', 'store', 'update']);
        $router->resource('companies', CompanyController::class)->only(['index', 'store', 'update']);
        $router->resource('providers', ProviderController::class)->only(['index', 'store', 'update']);
        $router->resource('brands', BrandController::class)->only(['index', 'store', 'update']);
        $router->resource('sale', SaleController::class)->only(['store']);

        $router->get('products-for-sale', [ProductController::class, 'listForSale']);
        $router->get('sale/customer', [SaleController::class, 'getCustomer']);
    });
});

Route::get('test', function () {
   return \App\Models\Company::find(1)->branchOffices->random();
});
