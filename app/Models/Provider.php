<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Traits\GlobalScopes;
use App\Models\Base\Model;
use Illuminate\Support\Facades\Auth;

class Provider extends Model
{
    use HasFactory, GlobalScopes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'company_id',
        'ruc',
        'name',
        'address',
        'website',
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
        'pivot'
    ];

    /**
     * The attributes that should add.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'state_name'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function contacts()
    {
        return $this->morphToMany(Contact::class, 'contactable');
    }

    public function getStateNameAttribute(): string
    {
        return $this->attributes['state'] ? 'Activo' : 'Inactivo';
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
