<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Traits\GlobalScopes;
use App\Models\Base\Model;

class Sale extends Model
{
    use HasFactory, GlobalScopes;

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $appends = [
        'state_name'
    ];

    protected function stateName(): Attribute
    {
        return Attribute::get(fn($value, $attributes) => $attributes['state'] === 1 ? 'Activo' : 'Inactivo');
    }

    public function detail()
    {
        return $this->hasMany(SaleDetail::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function branch_office()
    {
        return $this->belongsTo(BranchOffice::class);
    }
}
