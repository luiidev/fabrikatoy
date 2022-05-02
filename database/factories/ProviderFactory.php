<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Provider>
 */
class ProviderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'company_id'  => 1,
            'name'  => $this->faker->company(),
            'ruc'   => $this->faker->numerify('20#########'),
            'address' => $this->faker->address()
        ];
    }
}
