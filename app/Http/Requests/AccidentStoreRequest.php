<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AccidentStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'country_abbr' => ['nullable', 'max:2'],
            'state' => ['nullable', 'max:2', 'string'],
            'accident_date' => ['nullable', 'date', 'date'],
            'victim_name' => ['nullable', 'max:255', 'string'],
            'reach_id' => ['nullable', 'max:255'],
            'river' => ['nullable', 'max:255', 'string'],
            'section' => ['nullable', 'max:255', 'string'],
            'location' => ['nullable', 'max:255', 'string'],
            'water_level' => ['nullable', 'max:40', 'string'],
            'rel_level' => ['nullable', 'max:255', 'string'],
            'difficulty' => ['nullable', 'max:255', 'string'],
            'age' => ['nullable', 'max:255'],
        ];
    }
}
