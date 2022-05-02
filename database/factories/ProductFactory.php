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
            'company_id' => 1,
            'code' => $this->faker->isbn10(),
            'name' => $this->faker->sentence(3),
            'quantity' => $this->faker->randomNumber(4),
            'unit_id' => 1,
            'unit_price' => $price,
            'higher_price' => $price * 0.8,
            'average_purchase_price' => $price * 0.5,
        ];
    }
}
