<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\GlobalScopes;
use Illuminate\Support\Facades\Auth;

class BranchOffice extends Model
{
    use HasFactory, GlobalScopes;

    protected $fillable = [
        'company_id',
        'name',
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

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    protected static function boot(): void
    {
        parent::boot();

        // auto-sets values on creation
        static::creating(function ($model) {
            if (!$model->company_id) $model->company_id = Auth::user()->company_id;
        });
    }
}
