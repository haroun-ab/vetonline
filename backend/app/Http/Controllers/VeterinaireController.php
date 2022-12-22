<?php

namespace App\Http\Controllers;


use Error;

use App\Models\Veterinaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class VeterinaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function signup( Request $request)
    {     
        try{
            $veterinaryData = $request -> validate([
                "nom" => ["required", "string", "min:2, max:255"],
                "email" => ["required", "email", "unique:veterinaires,email"],
                "mdp" => ["required", "string", "min:8, max:30"],
                "sexe" => ["required", "string", "min:2, max:3"],
                "numero" => ["required", "string", "min:10, max:10"],
                "verif" => ["required", "string", "min:2, max:3"],
                "siret" => ["required", "string", "min:14, max:14"],
                "adresse" => ["required", "string", "min:2, max:255"]
            ]);
    
            $veterinaire = Veterinaire::create([
            "nom" => $veterinaryData["nom"],
            "email" =>$veterinaryData["email"],
            "mdp" => bcrypt($veterinaryData["mdp"]),
            "sexe" => $veterinaryData["sexe"],
            "numero" =>$veterinaryData["numero"],
            "verif" => $veterinaryData["verif"],
            "siret" => $veterinaryData["siret"],
            "adresse"=>$veterinaryData["adresse"],
        ]);
            return response($veterinaire, 201);
    
        } catch (Error $e) {
            echo '</br> <b> Exception Message: ' . $e->getMessage() . '</b>';
        }
    }

    public function login( Request $request)
    {     
        try{
            $veterinaryData = $request -> validate([
            "email" => ["required", "email"],
            "mdp" => ["required", "string", "min:8, max:30"]
        ]);
        $veterinaire = Veterinaire::where('email', $veterinaryData["email"])-> first();
        if(!$veterinaire) return response(["message" => "Aucun utilisateur trouvé"], 401);
        if(!Hash::check($veterinaryData["mdp"], $veterinaire->mdp)) return response(["message" => "Aucun utilisateur trouvé"], 401);
        $token = $veterinaire -> createToken("CLE SECRETE") -> plainTextToken;
        
        return response ([
            "utilisateur" => $veterinaire,
            "token" => $token
        ], 200);
        return redirect()->route('/customers-list', ['id' => $veterinaire['id']]);
        } catch (Error $e) {
            echo '</br> <b> Exception Message: ' . $e->getMessage() . '</b>';
        }
    }
}


