<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Models\Company;

class CompanyController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Company::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'sort' => 'in:name'
        ]);

        $products = Company::query()
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $products]);
    }

    public function store(StoreCompanyRequest $request): \Illuminate\Http\JsonResponse
    {
        $company = Company::create($request->only(['ruc', 'name', 'address', 'website', 'state']));

        return response()->json(['message' => 'Se registro la empresa.', 'data' => $company]);
    }

    public function show(Company $company)
    {
        //
    }

    public function update(UpdateCompanyRequest $request, Company $company): \Illuminate\Http\JsonResponse
    {
        $company->update($request->only(['ruc', 'name', 'address', 'website', 'state']));

        return response()->json(['message' => 'Se actualizo la empresa.', 'data' => $company]);
    }

    public function destroy(Company $company)
    {
        //
    }
}
