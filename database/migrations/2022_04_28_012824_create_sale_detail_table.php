<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_detail', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sale_id');
            $table->foreignId('product_id');
            $table->integer('quantity');
            $table->foreignId('unit_id');
            $table->decimal('price');
            $table->decimal('total');
            $table->string('observation');
            $table->boolean('state')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sale_detail');
    }
};
