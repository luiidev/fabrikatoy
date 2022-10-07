<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;
use App\Models\Traits\GlobalScopes;
use App\Models\Base\Model;

class Product extends Model
{
    use HasFactory, GlobalScopes;

    protected $fillable = [
        'company_id',
        'brand_id',
        'code',
        'name',
        'state',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'unit_id',
        'pivot',
    ];

    protected $appends = [
        'state_name'
    ];


    protected function stateName(): Attribute
    {
        return Attribute::get(fn($value, $attributes) => $attributes['state'] === 1 ? 'Activo' : 'Inactivo');
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function providers()
    {
        return $this->belongsToMany(Provider::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    protected static function boot(): void
    {
        parent::boot();

        // auto-sets values on creation
        static::creating(function ($model) {
            if (!$model->company_id) $model->company_id = Auth::user()->company_id;
            if (!$model->unit_id) $model->unit_id = Unit::where('company_id', Auth::user()->company_id)->first()->id;
        });
    }
}
