<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AffiliateStoreRequest extends FormRequest
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
            'last' => ['nullable', 'max:50', 'string'],
            'url' => ['nullable', 'url'],
            'con_email' => ['nullable', 'max:120', 'string'],
            'members' => ['nullable', 'max:255'],
            'contact' => ['nullable', 'max:255', 'string'],
            'abstract' => ['nullable', 'max:255', 'string'],
            'description' => ['nullable', 'max:255', 'string'],
            'reaches' => ['nullable', 'max:255', 'string'],
            'volunteer' => ['nullable', 'max:255'],
            'city' => ['required', 'max:25', 'string'],
            'state' => ['required', 'max:2'],
            'expiration' => ['required', 'max:10'],
            'member_id' => ['required', 'max:255'],
            'deleted' => ['nullable', 'max:255'],
        ];
    }
}
