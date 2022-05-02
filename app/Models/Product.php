<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Base\Model;
use App\Models\Traits\GlobalScopes;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;

class Product extends Model
{
    use HasFactory, GlobalScopes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'code',
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
        'unit_id',
        'pivot',
    ];

    /**
     * The attributes that should add.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'state_name'
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function providers()
    {
        return $this->belongsToMany(Provider::class);
    }

    public function brand()
    {
        return $this->belongsToMany(Brand::class);
    }

    public function getStateNameAttribute(): string
    {
        return $this->attributes['state'] ? 'Activo' : 'Inactivo';
    }
}
