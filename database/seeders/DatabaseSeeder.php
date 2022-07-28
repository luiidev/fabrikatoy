<?php

namespace Database\Seeders;

use App\Models\BranchOffice;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Customer;
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
            ->has(
                Category::factory()->count(4)
            )
            ->has(
                Customer::factory()->count(50)
            )
            ->has(
                BranchOffice::factory()
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
                        ->for($company->brands->random())
                        ->for($company)
                        ->for($company->units->first())
                )
                ->create();

            foreach ($company->products as $product) {
                $product->categories()->save($company->categories->random());
            }

            foreach ($company->users as $user) {
                $user->update([
                    'branch_office_id' => $company->branchOffices->random()->id
                ]);
            }
        }

        Company::find(1)
            ->update([
                'name' => 'Fabrika Toy',
                'ruc' => '20607395552',
                'logo' => null,
                'short_logo' => null,
            ]);

        User::find(1)
            ->update([
                'nick' => 'admin',
                'password' => bcrypt('password'),
                'first_name' => 'Fabrika Toy',
                'last_name' => 'Administrador',
                'role' => 1,
                'image' => null,
            ]);
    }
}
