<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\GlobalScopes;

class Provider extends Model
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
}
