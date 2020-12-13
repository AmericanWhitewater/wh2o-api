<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GageSourceUpdateRequest extends FormRequest
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
            'source' => ['required', 'max:8', 'string'],
            'title' => ['nullable', 'max:75', 'string'],
            'url' => ['nullable', 'url'],
            'update_type' => ['required', 'max:1'],
            'update_frequency' => ['nullable', 'numeric'],
            'update_start_time' => ['required', 'date_format:H:i:s'],
            'data' => ['nullable', 'max:512'],
            'populated' => ['nullable', 'date', 'date'],
            'disclaimer' => ['nullable', 'max:255', 'string'],
        ];
    }
}
