<?php

namespace App\Models\Traits;

use Illuminate\Support\Facades\Auth;

trait GlobalScopes {
    public function scopeOwn($query)
    {
        $user = Auth::user();

        if ($query->from === 'companies') {
            return $user->isSuper() ? $query : $query->where('id', $user->company_id);
        }

        return $user->isSuper() ? $query : $query->where('company_id', $user->company_id);
    }

    public function scopeWhereLike($query, $column, $value)
    {
        return $query->when($value, function ($query, $value) use ($column) {
            $query->where($column, 'like', '%'.$value.'%');
        });
    }

    public function scopeOrWhereLike($query, $column, $value)
    {
        return $query->when($value, function ($query, $value) use ($column) {
            $query->orWhere($column, 'like', '%'.$value.'%');
        });
    }

    public function scopeApiPaginate($query, $perPage = 10, $columns = ['*'], $pageName = 'page', $page = null): array
    {
        $request = request();

        if ($request->has('sort') && $request->has('direction')) {
            $query->orderBy($request->input('sort'), $request->input('direction'));
        }

        $paginator = $query->paginate($perPage, $columns, $pageName, $page)->toArray();

        return [
            'items' => $paginator['data'],
            'page' => $paginator['current_page'],
            'pages' => $paginator['last_page'],
            'per_page' => $paginator['per_page'],
            'total' => $paginator['total']
        ];
    }
}
