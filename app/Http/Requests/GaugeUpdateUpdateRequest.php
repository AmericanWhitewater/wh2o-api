<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GaugeUpdateUpdateRequest extends FormRequest
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
            'gauge_id' => ['required', 'numeric'],
            'metric' => ['required', 'max:255'],
            'lobs_time' => ['nullable', 'date', 'date'],
            'lobs_id' => ['nullable', 'max:255'],
            'lobs_reading' => ['nullable', 'numeric'],
            'obs_time' => ['nullable', 'date', 'date'],
            'obs_id' => ['nullable', 'max:255'],
            'obs_reading' => ['nullable', 'numeric'],
            'obs_data' => ['nullable', 'max:255', 'string'],
            'write_sequence' => ['nullable', 'numeric'],
            'obs_ref' => ['nullable', 'max:255'],
            'last_journal_date' => ['required', 'date', 'date'],
            'gd_ref' => ['nullable', 'numeric'],
        ];
    }
}
