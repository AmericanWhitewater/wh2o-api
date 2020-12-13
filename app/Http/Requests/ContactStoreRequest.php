<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactStoreRequest extends FormRequest
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
            'uid' => ['nullable', 'max:255'],
            'type' => ['nullable', 'max:10', 'string'],
            'name' => ['nullable', 'max:50', 'string'],
            'city' => ['nullable', 'max:50', 'string'],
            'address' => ['nullable', 'max:255', 'string'],
            'state' => ['nullable', 'max:2', 'string'],
            'zip' => ['nullable', 'max:10', 'string'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable', 'max:25', 'string'],
            'fax' => ['nullable', 'max:25', 'string'],
            'contactid' => ['required', 'max:255'],
            'bio' => ['required', 'max:255', 'string'],
            'lname' => ['nullable', 'max:255', 'string'],
            'fname' => ['nullable', 'max:25', 'string'],
            'photo' => ['nullable', 'file'],
            'company' => ['nullable', 'max:45', 'string'],
            'position' => ['nullable', 'max:45', 'string'],
            'territory' => ['nullable', 'max:45', 'string'],
            'country_code' => ['required', 'max:2'],
        ];
    }
}
