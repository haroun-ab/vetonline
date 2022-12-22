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
        Schema::create('veterinaires', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('sexe');
            $table->string('adresse');
            $table->string('numero');
            $table->string('email')->unique();
            $table->string('mdp');
            $table->string('verif');
            $table->string('siret');
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
        Schema::dropIfExists('veterinaires');
    }
};
