<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use HasRoles;
    use HasFactory;
    use Searchable;
    use SoftDeletes;

    protected $fillable = [
        'password',
        'uid',
        'uname',
        'upass',
        'email',
        'google_id',
        'facebook_id',
        'epassword',
        'zip',
        'address',
        'city',
        'state',
        'country',
        'lastlogin',
        'volunteer',
        'alerts',
        'postal',
        'memnum',
        'address2',
        'home_phone',
        'work_phone',
        'journal',
        'aw_beta',
        'mbr_level',
        'bad_addr',
        'bad_email',
        'mod_date',
        'record_type',
        'name',
        'mem_transaction',
        'transaction_id',
        'expiration',
        'modifydate',
        'pushdate',
        'mbr_relation',
        'prefs',
        'annual_renew',
        'code',
        'social_profile',
    ];

    protected $searchableFields = ['*'];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'lastlogin' => 'date',
        'mod_date' => 'date',
        'expiration' => 'date',
        'modifydate' => 'date',
        'pushdate' => 'date',
    ];

    public function comment()
    {
        return $this->belongsTo(Comment::class, 'uid');
    }

    public function document()
    {
        return $this->belongsTo(Document::class, 'uid');
    }

    public function eventNotify()
    {
        return $this->belongsTo(EventNotify::class, 'uid');
    }

    public function isSuperAdmin()
    {
        return $this->hasRole('super-admin');
    }
}
