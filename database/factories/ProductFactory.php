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
        return [
            'name' => fake()->name(),
            'image' => fake()->imageUrl(),
            'author' => fake()->name(),
            'owner' => fake()->name(),
            'expectedPrice' => fake()->randomFloat(2, 0, 100), 
            'description' => fake()->text(),
        ];
    }
}
