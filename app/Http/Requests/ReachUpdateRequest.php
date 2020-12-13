<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReachUpdateRequest extends FormRequest
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
            'accident_id' => ['required', 'exists:accidents,id'],
            'ploc' => ['nullable', 'max:255'],
            'tloc' => ['nullable', 'max:255'],
            'geom' => ['nullable', 'max:255'],
            'river' => ['required', 'max:80', 'string'],
            'section' => ['required', 'max:255', 'string'],
            'altname' => ['nullable', 'max:80', 'string'],
            'county' => ['nullable', 'max:80', 'string'],
            'zipcode' => ['nullable', 'max:5', 'string'],
            'length' => ['nullable', 'numeric'],
            'avggradient' => ['nullable', 'numeric'],
            'maxgradient' => ['nullable', 'numeric'],
            'agency' => ['nullable', 'max:255', 'string'],
            'gaugeinfo' => ['nullable', 'max:255', 'string'],
            'description' => ['nullable', 'max:255', 'string'],
            'photoid' => ['nullable', 'numeric'],
            'permitid' => ['nullable', 'numeric'],
            'huc' => ['nullable', 'max:8', 'string'],
            'plat' => ['nullable', 'numeric'],
            'plon' => ['nullable', 'numeric'],
            'prrn' => ['nullable', 'max:20', 'string'],
            'tlat' => ['nullable', 'numeric'],
            'tlon' => ['nullable', 'numeric'],
            'trrn' => ['nullable', 'max:20', 'string'],
            'skid' => ['nullable', 'numeric'],
            'status' => ['required', 'max:255', 'string'],
            'edited' => ['nullable', 'date', 'date'],
            'is_final' => ['nullable', 'boolean', 'boolean'],
            'revision' => ['required', 'numeric'],
            'class' => ['required', 'in:none,I,I(II),I(III),I(IV),I(V),I(V+)'],
            'was_final' => ['required', 'boolean', 'boolean'],
            'thumboverride' => ['nullable', 'boolean', 'boolean'],
            'shuttledetails' => ['nullable', 'max:255', 'string'],
            'abstract' => ['nullable', 'max:255', 'string'],
            'direction_default' => ['nullable', 'numeric'],
            'custom_destination' => ['nullable', 'max:255', 'string'],
            'revision_comment' => ['nullable', 'max:255', 'string'],
            'permiturl' => ['nullable', 'max:255', 'string'],
            'permitinfo' => ['nullable', 'max:255', 'string'],
            'image_override' => ['nullable', 'max:255', 'string'],
        ];
    }
}
