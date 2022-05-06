<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Traits\GlobalScopes;
use App\Models\Base\Model;
use Illuminate\Support\Facades\Auth;

class Brand extends Model
{
    use HasFactory, GlobalScopes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'company_id',
        'name',
        'state',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should add.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'state_name'
    ];

    public function getStateNameAttribute(): string
    {
        return $this->attributes['state'] ? 'Activo' : 'Inactivo';
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        // auto-sets values on creation
        static::creating(function ($model) {
            if (!$model->company_id) $model->company_id = Auth::user()->company_id;
        });
    }
}
