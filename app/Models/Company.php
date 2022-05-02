<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\GlobalScopes;

class Company extends Model
{
    use HasFactory, GlobalScopes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'ruc',
        'website',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'update_at',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function contacts()
    {
        return $this->morphToMany(Contact::class, 'contactable');
    }
}
