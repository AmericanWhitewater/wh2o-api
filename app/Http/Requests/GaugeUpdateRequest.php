<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GaugeUpdateRequest extends FormRequest
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
            'id' => ['required', 'exists:gauge_dependent_headers,id'],
            'source_id' => ['nullable', 'max:25', 'string'],
            'source' => ['nullable', 'max:8', 'string'],
            'name' => ['nullable', 'max:75', 'string'],
            'huc' => ['nullable', 'max:8', 'string'],
            'update_frequency' => ['nullable', 'numeric'],
            'county' => ['nullable', 'max:5', 'string'],
            'glat' => ['nullable', 'numeric'],
            'glon' => ['nullable', 'numeric'],
            'update_start_time' => ['nullable', 'date_format:H:i:s'],
            'header_updated' => ['nullable', 'date', 'date'],
            'timezone' => ['nullable', 'max:50', 'string'],
            'loc' => ['nullable', 'max:255'],
            'data' => ['nullable', 'max:255', 'string'],
            'update_calculated_frequency' => ['nullable', 'numeric'],
            'clean_date' => ['nullable', 'date', 'date'],
            'enabled' => ['nullable', 'boolean', 'boolean'],
        ];
    }
}
