<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RapidUpdateRequest extends FormRequest
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
            'reach_id' => ['required', 'exists:reaches,id'],
            'approximate' => ['required', 'boolean', 'boolean'],
            'rlat' => ['nullable', 'numeric'],
            'rloc' => ['nullable', 'numeric'],
            'rlon' => ['nullable', 'numeric'],
            'distance' => ['nullable', 'numeric'],
            'photoid' => ['nullable', 'numeric'],
            'revision' => ['required', 'numeric'],
            'videoid' => ['nullable', 'numeric'],
            'isaccess' => ['nullable', 'max:255'],
            'ishazard' => ['nullable', 'max:255'],
            'isplayspot' => ['nullable', 'max:255'],
            'isportage' => ['nullable', 'max:255'],
            'isputin' => ['nullable', 'max:255'],
            'istakeout' => ['nullable', 'max:255'],
            'iswaterfall' => ['nullable', 'max:255'],
            'isother' => ['nullable', 'max:255'],
            'israpid' => ['nullable', 'max:255'],
            'difficulty' => ['nullable', 'max:4', 'string'],
            'name' => ['required', 'max:80', 'string'],
            'description' => ['nullable', 'max:255', 'string'],
        ];
    }
}
