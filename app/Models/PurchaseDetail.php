<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Traits\GlobalScopes;
use App\Models\Base\Model;

class PurchaseDetail extends Model
{
    use HasFactory, GlobalScopes;

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
