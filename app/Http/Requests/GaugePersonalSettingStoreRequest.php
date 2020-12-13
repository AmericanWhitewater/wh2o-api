<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GaugePersonalSettingStoreRequest extends FormRequest
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
            'uid' => ['required', 'numeric'],
            'starttime' => ['nullable', 'date_format:H:i:s'],
            'endtime' => ['nullable', 'date_format:H:i:s'],
            'tz' => ['nullable', 'max:60', 'string'],
            'email' => ['nullable', 'email'],
            'format' => ['nullable', 'max:255'],
        ];
    }
}
