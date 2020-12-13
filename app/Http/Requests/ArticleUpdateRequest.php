<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleUpdateRequest extends FormRequest
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
            'news_article_id' => ['required', 'exists:news,id'],
            'title' => ['nullable', 'max:80', 'string'],
            'author' => ['nullable', 'max:50', 'string'],
            'abstract' => ['nullable', 'max:255', 'string'],
            'abstract_photo' => ['nullable', 'max:24', 'string'],
            'icon' => ['nullable', 'max:50', 'string'],
            'has_contents' => ['nullable', 'max:255'],
            'contents' => ['nullable', 'max:255', 'string'],
            'contents_photo' => ['nullable', 'max:24', 'string'],
            'contact' => ['nullable', 'max:50', 'string'],
            'posted' => ['nullable', 'date', 'date'],
            'short_name' => ['required', 'max:65', 'string'],
            'uid' => ['required', 'max:255'],
            'release_date' => ['nullable', 'date', 'date'],
            'deleted' => ['required', 'max:255'],
        ];
    }
}
