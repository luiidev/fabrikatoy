<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\SaleController;
use \App\Http\Controllers\Api\PurchaseController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\ProviderController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BranchOfficeController;
use App\Http\Controllers\Api\CustomerController;

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
        $router->resource('users', UserController::class)->only(['index', 'show', 'store', 'update']);
        $router->resource('branch-offices', BranchOfficeController::class)->only(['index']);
        $router->resource('customers', CustomerController::class)->only(['index', 'store', 'update']);
        $router->get('customer-for-sale', [CustomerController::class, 'getForSale']);
        $router->resource('sales', SaleController::class)->only(['index', 'store', 'show']);
        $router->resource('purchases', PurchaseController::class)->only(['index', 'store', 'show']);

        $router->get('products-for-sale', [ProductController::class, 'listForSale']);
    });
});
