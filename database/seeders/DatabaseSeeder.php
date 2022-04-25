<?php

namespace Database\Seeders;

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
            ->hasUsers(1, [
                'nick' => 'Admin',
                'password' => bcrypt('password'),
                'first_name' => 'Fabrika Toy',
                'last_name' => 'Administrador',
                'rol' => 1,
                'email' => NULL,
                'dni' => NULL,
                'address' => NULL,
                'phone' => NULL,
            ])
            ->create([
                'name' => 'Fabrika Toy',
                'ruc' => '20607395552',
            ]);
    }
}
