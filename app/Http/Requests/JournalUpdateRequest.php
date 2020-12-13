<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JournalUpdateRequest extends FormRequest
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
            'startpage' => ['required', 'max:255'],
            'endpage' => ['required', 'max:255'],
            'volume' => ['required', 'max:255'],
            'issuenumber' => ['required', 'max:255'],
            'issueyear' => ['required', 'max:255'],
            'scanner_uid' => ['nullable', 'max:255'],
            'arttitle' => ['required', 'max:255', 'string'],
            'artdate' => ['required', 'max:255', 'string'],
            'pdfsize' => ['nullable', 'max:255', 'string'],
            'forpublic' => ['nullable', 'max:255'],
        ];
    }
}
