<?php

namespace App\Models\Base;


use App\Models\Base\Builder as newBuilder;
use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    /**
     * Create a new Eloquent query builder for the model.
     *
     * @param  \Illuminate\Database\Query\Builder  $query
     * @return \App\Models\Base\Builder|static
     */
    public function newEloquentBuilder($query)
    {
        return new newBuilder($query);
    }
}
