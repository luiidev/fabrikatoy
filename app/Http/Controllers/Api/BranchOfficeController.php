<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreBranchOfficeRequest;
use App\Http\Requests\UpdateBranchOfficeRequest;
use App\Models\BranchOffice;

class BranchOfficeController extends Controller
{
    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'sort' => 'in:name'
        ]);

        $branchOffices = BranchOffice::query()
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $branchOffices]);
    }

    public function store(StoreBranchOfficeRequest $request)
    {
        //
    }

    public function show(BranchOffice $branchOffice)
    {
        //
    }

    public function update(UpdateBranchOfficeRequest $request, BranchOffice $branchOffice)
    {
        //
    }

    public function destroy(BranchOffice $branchOffice)
    {
        //
    }
}
