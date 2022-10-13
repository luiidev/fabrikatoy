<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $price = $this->faker->randomFloat(2, 9, 80);

        return [
            'code' => $this->faker->isbn10(),
            'name' => $this->faker->sentence(3),
            'image' => 'https://source.unsplash.com/random/250x250?sig='.rand(1, 99),
            'quantity' => $this->faker->randomNumber(2),
            'unit_id' => 1,
            'price' => $price,
            'higher_price' => $price * 0.8,
            'average_price' => $price * 0.5,
        ];
    }
}
