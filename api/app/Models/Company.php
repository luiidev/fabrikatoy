<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Traits\GlobalScopes;
use App\Models\Base\Model;

class Company extends Model
{
    use HasFactory, GlobalScopes;

    protected $fillable = [
        'ruc',
        'name',
        'address',
        'website',
        'state',
    ];

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

    public function branchOffices()
    {
        return $this->hasMany(BranchOffice::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function units()
    {
        return $this->hasMany(Unit::class);
    }

    public function contacts()
    {
        return $this->morphToMany(Contact::class, 'contactable');
    }

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function providers()
    {
        return $this->hasMany(Provider::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function brands()
    {
        return $this->hasMany(Brand::class);
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
