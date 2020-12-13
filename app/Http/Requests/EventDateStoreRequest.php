<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventDateStoreRequest extends FormRequest
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
            'event_id' => ['required', 'exists:events,id'],
            'evdate' => ['required', 'date', 'date'],
            'detail_description' => ['nullable', 'max:240', 'string'],
            'batchid' => ['required', 'numeric'],
            'starttime' => ['required', 'date_format:H:i:s'],
            'endtime' => ['required', 'date_format:H:i:s'],
            'tz' => ['required', 'max:3', 'string'],
            'mincfs' => ['nullable', 'numeric'],
            'maxcfs' => ['nullable', 'numeric'],
        ];
    }
}
