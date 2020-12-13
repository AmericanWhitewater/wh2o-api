<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GaugeCorrelationStoreRequest extends FormRequest
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
            'sourceid' => ['required', 'numeric'],
            'targetid' => ['required', 'numeric'],
            'time_adjustments' => ['nullable', 'numeric'],
            'comment' => ['nullable', 'max:160', 'string'],
            'metricid' => ['required', 'max:255'],
            'estimated' => ['required', 'boolean', 'boolean'],
            'deleted' => ['required', 'boolean', 'boolean'],
            'excluded' => ['required', 'boolean', 'boolean'],
            'uid' => ['required', 'numeric'],
        ];
    }
}
