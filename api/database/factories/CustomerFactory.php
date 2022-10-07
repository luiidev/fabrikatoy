<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $document_type = $this->faker->randomElement([null, 'DNI', 'RUC']);

        $document_number = null;
        $name = $this->faker->name();
        $email = $this->faker->safeEmail();

        if ($document_type === 'DNI') {
            $document_number = $this->faker->numerify('########');
        } else if ($document_type === 'RUC') {
            $document_number = $this->faker->numerify('20#########');
            $name = $this->faker->company();
            $email = $this->faker->companyEmail();
        }

        return [
            'document_type' => $document_type,
            'document_number' => $document_number,
            'name' => $name,
            'address' => $this->faker->address(),
            'email' => $email,
            'phone' => $this->faker->numerify('+519########'),
        ];
    }
}
