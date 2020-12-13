<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GaugeNotifyStoreRequest extends FormRequest
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
            'uid' => ['nullable', 'numeric'],
            'min' => ['nullable', 'numeric'],
            'metric' => ['nullable', 'max:255'],
            'show' => ['nullable', 'boolean', 'boolean'],
            'gauge_id' => ['nullable', 'numeric'],
            'asap' => ['nullable', 'boolean', 'boolean'],
            'down' => ['nullable', 'boolean', 'boolean'],
        ];
    }
}
