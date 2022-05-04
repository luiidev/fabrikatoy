<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'company_id',
        'nick',
        'password',
        'first_name',
        'last_name',
        'dni',
        'phone',
        'state',
        'rol',
        'email',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'state',
        'rol',
        'password',
        'remember_token',
        'email_verified_at',
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that should add.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'full_name',
        'rol_name',
    ];

    public function isSuper(): bool
    {
        return $this->attributes['rol'] === 1;
    }

    public function isAdmin(): bool
    {
        return $this->attributes['rol'] === 2;
    }

    public function getFullNameAttribute(): string
    {
        return strtoupper($this->attributes['first_name'].' '.$this->attributes['last_name']);
    }

    public function getStateNameAttribute(): string
    {
        return ($this->attributes['state'] === 1)? 'Activo' : 'Inactivo';
    }

    public function getRolNameAttribute():? string
    {
        if ($this->attributes['rol'] === 1) {
            return 'Super';
        } else if ($this->attributes['rol'] === 2) {
            return 'Admin';
        } else if ($this->attributes['rol'] === 3) {
            return 'User';
        }

        return null;
    }

    public function setFirstNameAttribute($value)
    {
        $this->attributes['first_name'] = strtoupper($value);
    }

    public function setLastNameAttribute($value)
    {
        $this->attributes['last_name'] = strtoupper($value);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
