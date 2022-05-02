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
 * @property string $name
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read int|null $products_count
 * @method static \Illuminate\Database\Eloquent\Builder|Brand newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Brand newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Brand query()
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereUpdatedAt($value)
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
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Contact[] $contacts
 * @property-read int|null $contacts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Company apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\CompanyFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Company newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company orWhereLike($column, $value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company own()
 * @method static \Illuminate\Database\Eloquent\Builder|Company query()
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereLike($column, $value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereRuc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereWebsite($value)
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
 * @method static \Database\Factories\ContactFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact query()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereUpdatedAt($value)
 */
	class Contact extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Customer
 *
 * @property int $id
 * @property string|null $ruc
 * @property string $name
 * @property string|null $address
 * @property string|null $email
 * @property string|null $phone
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Customer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer query()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereRuc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereUpdatedAt($value)
 */
	class Customer extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Product
 *
 * @property int $id
 * @property int $company_id
 * @property string|null $code
 * @property string $name
 * @property int $quantity
 * @property int $unit_id
 * @property string $unit_price
 * @property string $higher_price
 * @property string $average_purchase_price
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Brand[] $brand
 * @property-read int|null $brand_count
 * @property-read mixed $state_name
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
 * @method static \App\Models\Base\Builder|Product whereAveragePurchasePrice($value)
 * @method static \App\Models\Base\Builder|Product whereCode($value)
 * @method static \App\Models\Base\Builder|Product whereCompanyId($value)
 * @method static \App\Models\Base\Builder|Product whereCreatedAt($value)
 * @method static \App\Models\Base\Builder|Product whereHigherPrice($value)
 * @method static \App\Models\Base\Builder|Product whereId($value)
 * @method static \App\Models\Base\Builder|Product whereLike($column, $value)
 * @method static \App\Models\Base\Builder|Product whereName($value)
 * @method static \App\Models\Base\Builder|Product whereQuantity($value)
 * @method static \App\Models\Base\Builder|Product whereState($value)
 * @method static \App\Models\Base\Builder|Product whereUnitId($value)
 * @method static \App\Models\Base\Builder|Product whereUnitPrice($value)
 * @method static \App\Models\Base\Builder|Product whereUpdatedAt($value)
 */
	class Product extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Provider
 *
 * @property int $id
 * @property string $ruc
 * @property string $name
 * @property string|null $address
 * @property string|null $website
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Contact[] $contacts
 * @property-read int|null $contacts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read int|null $products_count
 * @method static \Illuminate\Database\Eloquent\Builder|Provider apiPaginate($perPage = 10, $columns = [], $pageName = 'page', $page = null)
 * @method static \Database\Factories\ProviderFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provider newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provider orWhereLike($column, $value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider own()
 * @method static \Illuminate\Database\Eloquent\Builder|Provider query()
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereLike($column, $value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereRuc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereWebsite($value)
 */
	class Provider extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Purchase
 *
 * @property int $id
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
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase query()
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereDocument($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereIgv($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereProviderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereSubtotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereUserId($value)
 */
	class Purchase extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PurchaseDetail
 *
 * @method static \Illuminate\Database\Eloquent\Builder|PurchaseDetail newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PurchaseDetail newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PurchaseDetail query()
 */
	class PurchaseDetail extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Sale
 *
 * @property int $id
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
 * @method static \Illuminate\Database\Eloquent\Builder|Sale newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale query()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereCustomerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereDocument($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereIgv($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereSubtotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereUserId($value)
 */
	class Sale extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\SaleDetail
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|SaleDetail[] $detail
 * @property-read int|null $detail_count
 * @method static \Illuminate\Database\Eloquent\Builder|SaleDetail newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SaleDetail newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SaleDetail query()
 */
	class SaleDetail extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Unit
 *
 * @property int $id
 * @property string $name
 * @property int $conversion_factor
 * @property int|null $unit_id
 * @property int $state
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Unit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Unit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Unit query()
 * @method static \Illuminate\Database\Eloquent\Builder|Unit whereConversionFactor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Unit whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Unit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Unit whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Unit whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Unit whereUnitId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Unit whereUpdatedAt($value)
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

