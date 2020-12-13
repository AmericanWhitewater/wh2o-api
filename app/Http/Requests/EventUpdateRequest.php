<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventUpdateRequest extends FormRequest
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
            'event_id' => ['required', 'exists:event_notify,id'],
            'title' => ['nullable', 'max:80', 'string'],
            'city' => ['nullable', 'max:80', 'string'],
            'description' => ['nullable', 'max:255', 'string'],
            'cat' => ['nullable', 'numeric'],
            'uid' => ['nullable', 'numeric'],
            'state' => ['nullable', 'max:2'],
            'url' => ['nullable', 'url'],
            'orgname' => ['nullable', 'max:50', 'string'],
            'orgaddress' => ['nullable', 'max:255', 'string'],
            'orgphone' => ['nullable', 'max:14', 'string'],
            'orgfax' => ['nullable', 'max:14', 'string'],
            'orgemail' => ['nullable', 'max:255', 'string'],
            'site' => ['nullable', 'max:255', 'string'],
            'rivid' => ['nullable', 'numeric'],
            'expectpart' => ['nullable', 'numeric'],
            'expectspec' => ['nullable', 'numeric'],
            'issue' => ['nullable', 'max:255', 'string'],
            'media' => ['nullable', 'max:255', 'string'],
            'nowreventinfo' => ['nullable', 'max:255'],
            'contact_id' => ['nullable', 'numeric'],
            'html_description' => ['nullable', 'max:255', 'string'],
            'retired' => ['required', 'max:255'],
        ];
    }
}
