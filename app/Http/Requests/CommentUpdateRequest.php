<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentUpdateRequest extends FormRequest
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
            'uid' => ['required', 'max:255'],
            'sectionid' => ['required', 'max:255'],
            'name' => ['required', 'max:255', 'string'],
            'comments' => ['nullable', 'max:255', 'string'],
            'posted' => ['nullable', 'date', 'date'],
            'section' => ['required', 'max:25', 'string'],
            'type' => ['nullable', 'max:10', 'string'],
            'deleted' => ['nullable', 'date', 'date'],
            'duid' => ['nullable', 'max:255'],
            'is_final' => ['required', 'boolean', 'boolean'],
            'is_private' => ['required', 'boolean', 'boolean'],
        ];
    }
}
