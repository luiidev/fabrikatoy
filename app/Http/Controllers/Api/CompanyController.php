<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Company::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $products = Company::query()
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $products]);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Company $company)
    {
        //
    }

    public function update(Request $request, Company $company)
    {
        //
    }

    public function destroy(Company $company)
    {
        //
    }
}
