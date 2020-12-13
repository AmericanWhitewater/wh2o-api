<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectUpdateRequest extends FormRequest
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
            'name' => ['required', 'max:51', 'string'],
            'description' => ['required', 'max:200', 'string'],
            'uid' => ['required', 'max:255'],
            'shortname' => ['required', 'max:25', 'string'],
        ];
    }
}
