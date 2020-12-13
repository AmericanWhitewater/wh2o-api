<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ListingStoreRequest extends FormRequest
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
            'listing' => ['required', 'max:25', 'string'],
            'name' => ['required', 'max:255', 'string'],
            'arealookup' => ['required', 'max:25', 'string'],
            'public' => ['required', 'max:255'],
        ];
    }
}
