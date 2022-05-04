<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models\Base{
/**
 * App\Models\Base\Model
 *
 * @method static \App\Models\Base\Builder|Model forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Model newModelQuery()
 * @method static \App\Models\Base\Builder|Model newQuery()
 * @method static \App\Models\Base\Builder|Model query()
 */
	class Model extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Brand
 *
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Company $company
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read int|null $products_count
 * @method static \App\Models\Base\Builder|Brand apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\BrandFactory factory(...$parameters)
 * @method static \App\Models\Base\Builder|Brand forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Brand newModelQuery()
 * @method static \App\Models\Base\Builder|Brand newQuery()
 * @method static \App\Models\Base\Builder|Brand orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Brand own()
 * @method static \App\Models\Base\Builder|Brand query()
 * @method static \App\Models\Base\Builder|Brand whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Brand whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Brand whereId($value)
 * @method static \App\Models\Base\Builder|Brand whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Brand whereName($value)
 * @method static \App\Models\Base\Builder|Brand whereState($value)
 * @method static \App\Models\Base\Builder|Brand whereUpdatedAt($value)
 */
	class Brand extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Company
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $ruc
 * @property string|null $address
 * @property string|null $website
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Brand[] $brands
 * @property-read int|null $brands_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Contact[] $contacts
 * @property-read int|null $contacts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read int|null $products_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Provider[] $provider
 * @property-read int|null $provider_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Unit[] $units
 * @property-read int|null $units_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \App\Models\Base\Builder|Company apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\CompanyFactory factory(...$parameters)
 * @method static \App\Models\Base\Builder|Company forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Company newModelQuery()
 * @method static \App\Models\Base\Builder|Company newQuery()
 * @method static \App\Models\Base\Builder|Company orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Company own()
 * @method static \App\Models\Base\Builder|Company query()
 * @method static \App\Models\Base\Builder|Company whereAddress($value)
 * @method static \App\Models\Base\Builder|Company whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Company whereId($value)
 * @method static \App\Models\Base\Builder|Company whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Company whereName($value)
 * @method static \App\Models\Base\Builder|Company whereRuc($value)
 * @method static \App\Models\Base\Builder|Company whereUpdatedAt($value)
 * @method static \App\Models\Base\Builder|Company whereWebsite($value)
 */
	class Company extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Contact
 *
 * @property int $id
 * @property string $name
 * @property string|null $email
 * @property string|null $phone
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \App\Models\Base\Builder|Contact apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\ContactFactory factory(...$parameters)
 * @method static \App\Models\Base\Builder|Contact forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Contact newModelQuery()
 * @method static \App\Models\Base\Builder|Contact newQuery()
 * @method static \App\Models\Base\Builder|Contact orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Contact own()
 * @method static \App\Models\Base\Builder|Contact query()
 * @method static \App\Models\Base\Builder|Contact whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Contact whereEmail($value)
 * @method static \App\Models\Base\Builder|Contact whereId($value)
 * @method static \App\Models\Base\Builder|Contact whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Contact whereName($value)
 * @method static \App\Models\Base\Builder|Contact wherePhone($value)
 * @method static \App\Models\Base\Builder|Contact whereState($value)
 * @method static \App\Models\Base\Builder|Contact whereUpdatedAt($value)
 */
	class Contact extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Customer
 *
 * @property int $id
 * @property int $company_id
 * @property string|null $ruc
 * @property string $name
 * @property string|null $address
 * @property string|null $email
 * @property string|null $phone
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \App\Models\Base\Builder|Customer apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \App\Models\Base\Builder|Customer forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Customer newModelQuery()
 * @method static \App\Models\Base\Builder|Customer newQuery()
 * @method static \App\Models\Base\Builder|Customer orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Customer own()
 * @method static \App\Models\Base\Builder|Customer query()
 * @method static \App\Models\Base\Builder|Customer whereAddress($value)
 * @method static \App\Models\Base\Builder|Customer whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Customer whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Customer whereEmail($value)
 * @method static \App\Models\Base\Builder|Customer whereId($value)
 * @method static \App\Models\Base\Builder|Customer whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Customer whereName($value)
 * @method static \App\Models\Base\Builder|Customer wherePhone($value)
 * @method static \App\Models\Base\Builder|Customer whereRuc($value)
 * @method static \App\Models\Base\Builder|Customer whereState($value)
 * @method static \App\Models\Base\Builder|Customer whereUpdatedAt($value)
 */
	class Customer extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Product
 *
 * @property int $id
 * @property int $company_id
 * @property int $brand_id
 * @property int $unit_id
 * @property string|null $code
 * @property string $name
 * @property int $quantity
 * @property string $price
 * @property string $higher_price
 * @property string $average_price
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Brand $brand
 * @property-read \App\Models\Company $company
 * @property-read string $state_name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Provider[] $providers
 * @property-read int|null $providers_count
 * @property-read \App\Models\Unit $unit
 * @method static \App\Models\Base\Builder|Product apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\ProductFactory factory(...$parameters)
 * @method static \App\Models\Base\Builder|Product forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Product newModelQuery()
 * @method static \App\Models\Base\Builder|Product newQuery()
 * @method static \App\Models\Base\Builder|Product orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Product own()
 * @method static \App\Models\Base\Builder|Product query()
 * @method static \App\Models\Base\Builder|Product whereAveragePrice($value)
 * @method static \App\Models\Base\Builder|Product whereBrandId($value)
 * @method static \App\Models\Base\Builder|Product whereCode($value)
 * @method static \App\Models\Base\Builder|Product whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Product whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Product whereHigherPrice($value)
 * @method static \App\Models\Base\Builder|Product whereId($value)
 * @method static \App\Models\Base\Builder|Product whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Product whereName($value)
 * @method static \App\Models\Base\Builder|Product wherePrice($value)
 * @method static \App\Models\Base\Builder|Product whereQuantity($value)
 * @method static \App\Models\Base\Builder|Product whereState($value)
 * @method static \App\Models\Base\Builder|Product whereUnitId($value)
 * @method static \App\Models\Base\Builder|Product whereUpdatedAt($value)
 */
	class Product extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Provider
 *
 * @property int $id
 * @property int $company_id
 * @property string $ruc
 * @property string $name
 * @property string|null $address
 * @property string|null $website
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Company $company
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Contact[] $contacts
 * @property-read int|null $contacts_count
 * @property-read string $state_name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read int|null $products_count
 * @method static \App\Models\Base\Builder|Provider apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\ProviderFactory factory(...$parameters)
 * @method static \App\Models\Base\Builder|Provider forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Provider newModelQuery()
 * @method static \App\Models\Base\Builder|Provider newQuery()
 * @method static \App\Models\Base\Builder|Provider orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Provider own()
 * @method static \App\Models\Base\Builder|Provider query()
 * @method static \App\Models\Base\Builder|Provider whereAddress($value)
 * @method static \App\Models\Base\Builder|Provider whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Provider whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Provider whereId($value)
 * @method static \App\Models\Base\Builder|Provider whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Provider whereName($value)
 * @method static \App\Models\Base\Builder|Provider whereRuc($value)
 * @method static \App\Models\Base\Builder|Provider whereState($value)
 * @method static \App\Models\Base\Builder|Provider whereUpdatedAt($value)
 * @method static \App\Models\Base\Builder|Provider whereWebsite($value)
 */
	class Provider extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Purchase
 *
 * @property int $id
 * @property int $company_id
 * @property int $user_id
 * @property int $provider_id
 * @property string $type
 * @property string $number
 * @property string|null $document
 * @property string $date
 * @property string $subtotal
 * @property string $igv
 * @property string $total
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\PurchaseDetail[] $detail
 * @property-read int|null $detail_count
 * @method static \App\Models\Base\Builder|Purchase apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \App\Models\Base\Builder|Purchase forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Purchase newModelQuery()
 * @method static \App\Models\Base\Builder|Purchase newQuery()
 * @method static \App\Models\Base\Builder|Purchase orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Purchase own()
 * @method static \App\Models\Base\Builder|Purchase query()
 * @method static \App\Models\Base\Builder|Purchase whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Purchase whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Purchase whereDate($value)
 * @method static \App\Models\Base\Builder|Purchase whereDocument($value)
 * @method static \App\Models\Base\Builder|Purchase whereId($value)
 * @method static \App\Models\Base\Builder|Purchase whereIgv($value)
 * @method static \App\Models\Base\Builder|Purchase whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Purchase whereNumber($value)
 * @method static \App\Models\Base\Builder|Purchase whereProviderId($value)
 * @method static \App\Models\Base\Builder|Purchase whereState($value)
 * @method static \App\Models\Base\Builder|Purchase whereSubtotal($value)
 * @method static \App\Models\Base\Builder|Purchase whereTotal($value)
 * @method static \App\Models\Base\Builder|Purchase whereType($value)
 * @method static \App\Models\Base\Builder|Purchase whereUpdatedAt($value)
 * @method static \App\Models\Base\Builder|Purchase whereUserId($value)
 */
	class Purchase extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PurchaseDetail
 *
 * @method static \App\Models\Base\Builder|PurchaseDetail apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \App\Models\Base\Builder|PurchaseDetail forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|PurchaseDetail newModelQuery()
 * @method static \App\Models\Base\Builder|PurchaseDetail newQuery()
 * @method static \App\Models\Base\Builder|PurchaseDetail orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|PurchaseDetail own()
 * @method static \App\Models\Base\Builder|PurchaseDetail query()
 * @method static \App\Models\Base\Builder|PurchaseDetail whereLike($column, $value)
 */
	class PurchaseDetail extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Sale
 *
 * @property int $id
 * @property int $company_id
 * @property int $user_id
 * @property int $customer_id
 * @property string $type
 * @property string $number
 * @property string|null $document
 * @property string $date
 * @property string $subtotal
 * @property string $igv
 * @property string $total
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \App\Models\Base\Builder|Sale apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \App\Models\Base\Builder|Sale forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Sale newModelQuery()
 * @method static \App\Models\Base\Builder|Sale newQuery()
 * @method static \App\Models\Base\Builder|Sale orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Sale own()
 * @method static \App\Models\Base\Builder|Sale query()
 * @method static \App\Models\Base\Builder|Sale whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Sale whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Sale whereCustomerId($value)
 * @method static \App\Models\Base\Builder|Sale whereDate($value)
 * @method static \App\Models\Base\Builder|Sale whereDocument($value)
 * @method static \App\Models\Base\Builder|Sale whereId($value)
 * @method static \App\Models\Base\Builder|Sale whereIgv($value)
 * @method static \App\Models\Base\Builder|Sale whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Sale whereNumber($value)
 * @method static \App\Models\Base\Builder|Sale whereState($value)
 * @method static \App\Models\Base\Builder|Sale whereSubtotal($value)
 * @method static \App\Models\Base\Builder|Sale whereTotal($value)
 * @method static \App\Models\Base\Builder|Sale whereType($value)
 * @method static \App\Models\Base\Builder|Sale whereUpdatedAt($value)
 * @method static \App\Models\Base\Builder|Sale whereUserId($value)
 */
	class Sale extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\SaleDetail
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|SaleDetail[] $detail
 * @property-read int|null $detail_count
 * @method static \App\Models\Base\Builder|SaleDetail apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \App\Models\Base\Builder|SaleDetail forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|SaleDetail newModelQuery()
 * @method static \App\Models\Base\Builder|SaleDetail newQuery()
 * @method static \App\Models\Base\Builder|SaleDetail orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|SaleDetail own()
 * @method static \App\Models\Base\Builder|SaleDetail query()
 * @method static \App\Models\Base\Builder|SaleDetail whereLike($column, $value)
 */
	class SaleDetail extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Unit
 *
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property int $conversion_factor
 * @property int|null $unit_id
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \App\Models\Base\Builder|Unit apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\UnitFactory factory(...$parameters)
 * @method static \App\Models\Base\Builder|Unit forPage($page, $perPage = 15)
 * @method static \App\Models\Base\Builder|Unit newModelQuery()
 * @method static \App\Models\Base\Builder|Unit newQuery()
 * @method static \App\Models\Base\Builder|Unit orWhereLike($column, $value)
 * @method static \App\Models\Base\Builder|Unit own()
 * @method static \App\Models\Base\Builder|Unit query()
 * @method static \App\Models\Base\Builder|Unit whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Unit whereConversionFactor($value)
 * @method static \App\Models\Base\Builder|Unit whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Unit whereId($value)
 * @method static \App\Models\Base\Builder|Unit whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Unit whereName($value)
 * @method static \App\Models\Base\Builder|Unit whereState($value)
 * @method static \App\Models\Base\Builder|Unit whereUnitId($value)
 * @method static \App\Models\Base\Builder|Unit whereUpdatedAt($value)
 */
	class Unit extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property int|null $company_id
 * @property string|null $nick
 * @property string $password
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string|null $dni
 * @property string|null $address
 * @property string|null $phone
 * @property int $state
 * @property int $rol
 * @property string|null $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Company|null $company
 * @property-read string $full_name
 * @property-read string|null $rol_name
 * @property-read string $state_name
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDni($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereNick($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRol($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

