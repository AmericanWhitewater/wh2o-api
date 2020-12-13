<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LinkStoreRequest extends FormRequest
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
            'sourcecomp' => ['required', 'max:25', 'string'],
            'sourceid' => ['required', 'max:25', 'string'],
            'targetcomp' => ['required', 'max:25', 'string'],
            'targetid' => ['required', 'max:25', 'string'],
        ];
    }
}
