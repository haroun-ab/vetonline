<?php

namespace App\Http\Controllers;

use Error;
use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Redis;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createUser(Request $request)
    {
   
            try{
                $clientData = $request -> validate([
                    "nom" => ["required", "string", "min:2, max:255"],
                    "email" => ["required", "email", "unique:clients,email"],
                    "mdp" => ["required", "string", "min:8, max:30"],
                    "sexe" => ["required", "string", "min:2, max:3"],
                    "numero" => ["required", "string", "min:10, max:10"],
                    "id_veto" => ["required", "string"],
                    "adresse" => ["required", "string", "min:2, max:255"]
                ]);
        
                $client = Client::create([
                "nom" => $clientData["nom"],
                "email" =>$clientData["email"],
                "mdp" => bcrypt($clientData["mdp"]),
                "sexe" => $clientData["sexe"],
                "numero" =>$clientData["numero"],
                "id_veto" => $clientData["id_veto"],
                "adresse"=>$clientData["adresse"],
            ]);
                return response($client, 201);
                
            } catch (Error $e) {
                echo '</br> <b> Exception Message: ' . $e->getMessage() . '</b>';
        }
    }
}

     