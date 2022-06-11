<?php

namespace App\Http\Controllers;

use App\Models\BranchOffice;
use App\Http\Requests\StoreBranchOfficeRequest;
use App\Http\Requests\UpdateBranchOfficeRequest;

class BranchOfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBranchOfficeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBranchOfficeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BranchOffice  $branchOffice
     * @return \Illuminate\Http\Response
     */
    public function show(BranchOffice $branchOffice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BranchOffice  $branchOffice
     * @return \Illuminate\Http\Response
     */
    public function edit(BranchOffice $branchOffice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBranchOfficeRequest  $request
     * @param  \App\Models\BranchOffice  $branchOffice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBranchOfficeRequest $request, BranchOffice $branchOffice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BranchOffice  $branchOffice
     * @return \Illuminate\Http\Response
     */
    public function destroy(BranchOffice $branchOffice)
    {
        //
    }
}
