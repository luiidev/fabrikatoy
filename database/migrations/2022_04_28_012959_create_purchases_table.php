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
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('provider_id')->constrained();
            $table->enum('type', ['BOLETA', 'FACTURA', 'OTRO']);
            $table->string('number', 25);
            $table->string('document')->nullable();
            $table->timestamp('date');
            $table->decimal('subtotal');
            $table->decimal('igv');
            $table->decimal('total');
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
        Schema::dropIfExists('purchases');
    }
};
