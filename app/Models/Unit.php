<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Traits\GlobalScopes;
use App\Models\Base\Model;

class Unit extends Model
{
    use HasFactory, GlobalScopes;

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
        'id',
        'unit_id',
        'conversion_factor',
        'state',
    ];
}