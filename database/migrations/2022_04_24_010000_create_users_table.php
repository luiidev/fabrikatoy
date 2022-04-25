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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->nullable()->constrained();
            $table->string('nick', 50)->unique()->nullable();
            $table->string('password');
            $table->string('first_name', 25)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->string('dni', 11)->nullable();
            $table->string('address')->nullable();
            $table->string('phone', 15)->nullable();
            $table->tinyInteger('state')->default(1);
            $table->tinyInteger('rol')->default(3);
            $table->string('email')->nullable()->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
