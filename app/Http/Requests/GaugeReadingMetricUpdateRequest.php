<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GaugeReadingMetricUpdateRequest extends FormRequest
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
            'shortkey' => ['required', 'max:5', 'string'],
            'unit' => ['required', 'max:15', 'string'],
            'name' => ['required', 'max:50', 'string'],
            'format' => ['required', 'max:50', 'string'],
            'sortorder' => ['required', 'max:255'],
        ];
    }
}
