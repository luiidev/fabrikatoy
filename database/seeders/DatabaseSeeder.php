<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Product;
use App\Models\Provider;
use App\Models\Unit;
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
        Company::factory()
            ->hasContacts(1)
            ->hasUsers(1, [
                'nick' => 'admin',
                'password' => bcrypt('password'),
                'first_name' => 'Fabrika Toy',
                'last_name' => 'Administrador',
                'rol' => 1
            ])
            ->create([
                'name' => 'Fabrika Toy',
                'ruc' => '20607395552',
            ]);

        Unit::query()->insert([
            'company_id' => 1,
            'name' => 'UND',
            'conversion_factor' => 1,
        ]);

        Provider::factory()
            ->hasProducts(10)
            ->hasContacts(1)
            ->count(10)
            ->create();
    }
}
