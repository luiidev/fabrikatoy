<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Contact;
use App\Models\Product;
use App\Models\Provider;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Company;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $companies = Company::factory()
            ->has(
                User::factory()
            )
            ->has(
                Unit::factory()
            )
            ->has(
                Brand::factory()->count(10)
            )
            ->count(2)
            ->create();

        foreach ($companies as $company) {
            Provider::factory()->count(10)
                ->for($company)
                ->has(
                    Contact::factory()
                )
                ->has(
                    Product::factory()
                        ->count(10)
                        ->for($company->brands->get(array_rand($company->brands->toArray())))
                        ->for($company)
                        ->for($company->units->first())
                )
                ->create();
        }

        Company::find(1)
            ->update([
                'name' => 'Fabrika Toy',
                'ruc' => '20607395552',
                'logo' => 'https://fabrikatoy.s3.amazonaws.com/images/logo/1/fabrikatoy.png',
                'short_logo' => 'https://fabrikatoy.s3.amazonaws.com/images/logo/1/short-fabrikatoy.png',
            ]);

        User::find(1)
            ->update([
                'nick' => 'admin',
                'password' => bcrypt('password'),
                'first_name' => 'Fabrika Toy',
                'last_name' => 'Administrador',
                'role' => 1,
                'image' => 'https://fabrikatoy.s3.amazonaws.com/images/user/1/oaZy5wtZipgcuRQpFkaXTHBVU3XB7GaPAS5e.png',
            ]);
    }
}
