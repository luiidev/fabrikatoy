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
//            ->has(
//                Provider::factory()->count(10)
//                    ->has(
//                        Contact::factory()
//                    )
//            )
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
//                    dd($company->brands->get(array_rand($company->brands->toArray())))
                    Product::factory()
                        ->count(10)
                        ->for($company->brands->get(array_rand($company->brands->toArray())))
                        ->for($company)
                        ->for($company->units->first())
                )
                ->create();
//            foreach ($company->brands as $brand) {
//
//            }
        }

        Company::find(1)
            ->update([
                'name' => 'Fabrika Toy',
                'ruc' => '20607395552',
            ]);

        User::find(1)
            ->update([
                'nick' => 'admin',
                'password' => bcrypt('password'),
                'first_name' => 'Fabrika Toy',
                'last_name' => 'Administrador',
                'role' => 1
            ]);
    }
}
