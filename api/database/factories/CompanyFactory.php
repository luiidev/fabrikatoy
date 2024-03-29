<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name'  => $this->faker->company(),
            'ruc'   => $this->faker->numerify('20#########'),
            'address' => $this->faker->address()
        ];
    }
}
