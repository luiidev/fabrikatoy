<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string[]  ...$guards
     * @return mixed
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function handle($request, \Closure $next, ...$guards)
    {
        $this->authenticate($request, $guards);

        $response = $next($request);

        $response->header('Role-User', Auth::user()->role_name ?? 'none');
        $response->header('Role-Modules', $this->getModules());

        return $response;
    }

    private function getModules(): string
    {
        if (Auth::user()->isSuper()) {
            return 'profile, companies, users, providers, products, brands, customers, shop, purchase';
        } else if (Auth::user()->isAdmin()) {
            return 'profile, users, providers, products, brands, customers, shop, purchase';
        }

        $modules = ['profile'];
        $abilities = Auth::user()->abilities ?? [];

        if (in_array('user:list', $abilities)) {
            $modules = array_merge($modules, ['users']);
        }

        if (in_array('product:list', $abilities)) {
            $modules = array_merge($modules, ['products', 'brands']);
        }

        if (in_array('purchase:list', $abilities)) {
            $modules = array_merge($modules, ['purchase', 'providers']);
        }

        if (in_array('sale:list', $abilities)) {
            $modules = array_merge($modules, ['shop']);
        }

        return implode(', ', $modules);
    }
}
