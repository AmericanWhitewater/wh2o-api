<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionsSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create default permissions
        Permission::create(['name' => 'list regions']);
        Permission::create(['name' => 'view regions']);
        Permission::create(['name' => 'create regions']);
        Permission::create(['name' => 'update regions']);
        Permission::create(['name' => 'delete regions']);

        Permission::create(['name' => 'list causes']);
        Permission::create(['name' => 'view causes']);
        Permission::create(['name' => 'create causes']);
        Permission::create(['name' => 'update causes']);
        Permission::create(['name' => 'delete causes']);

        Permission::create(['name' => 'list accidents']);
        Permission::create(['name' => 'view accidents']);
        Permission::create(['name' => 'create accidents']);
        Permission::create(['name' => 'update accidents']);
        Permission::create(['name' => 'delete accidents']);

        Permission::create(['name' => 'list reaches']);
        Permission::create(['name' => 'view reaches']);
        Permission::create(['name' => 'create reaches']);
        Permission::create(['name' => 'update reaches']);
        Permission::create(['name' => 'delete reaches']);

        Permission::create(['name' => 'list accidents_factors']);
        Permission::create(['name' => 'view accidents_factors']);
        Permission::create(['name' => 'create accidents_factors']);
        Permission::create(['name' => 'update accidents_factors']);
        Permission::create(['name' => 'delete accidents_factors']);

        Permission::create(['name' => 'list gaugecorrelations']);
        Permission::create(['name' => 'view gaugecorrelations']);
        Permission::create(['name' => 'create gaugecorrelations']);
        Permission::create(['name' => 'update gaugecorrelations']);
        Permission::create(['name' => 'delete gaugecorrelations']);

        Permission::create(['name' => 'list gaugecorrelationranges']);
        Permission::create(['name' => 'view gaugecorrelationranges']);
        Permission::create(['name' => 'create gaugecorrelationranges']);
        Permission::create(['name' => 'update gaugecorrelationranges']);
        Permission::create(['name' => 'delete gaugecorrelationranges']);

        Permission::create(['name' => 'list gaugenotifies']);
        Permission::create(['name' => 'view gaugenotifies']);
        Permission::create(['name' => 'create gaugenotifies']);
        Permission::create(['name' => 'update gaugenotifies']);
        Permission::create(['name' => 'delete gaugenotifies']);

        Permission::create(['name' => 'list gaugepersonalsettings']);
        Permission::create(['name' => 'view gaugepersonalsettings']);
        Permission::create(['name' => 'create gaugepersonalsettings']);
        Permission::create(['name' => 'update gaugepersonalsettings']);
        Permission::create(['name' => 'delete gaugepersonalsettings']);

        Permission::create(['name' => 'list gagesources']);
        Permission::create(['name' => 'view gagesources']);
        Permission::create(['name' => 'create gagesources']);
        Permission::create(['name' => 'update gagesources']);
        Permission::create(['name' => 'delete gagesources']);

        Permission::create(['name' => 'list injuries']);
        Permission::create(['name' => 'view injuries']);
        Permission::create(['name' => 'create injuries']);
        Permission::create(['name' => 'update injuries']);
        Permission::create(['name' => 'delete injuries']);

        Permission::create(['name' => 'list reachreadingsummaries']);
        Permission::create(['name' => 'view reachreadingsummaries']);
        Permission::create(['name' => 'create reachreadingsummaries']);
        Permission::create(['name' => 'update reachreadingsummaries']);
        Permission::create(['name' => 'delete reachreadingsummaries']);

        Permission::create(['name' => 'list gaugereadingmetrics']);
        Permission::create(['name' => 'view gaugereadingmetrics']);
        Permission::create(['name' => 'create gaugereadingmetrics']);
        Permission::create(['name' => 'update gaugereadingmetrics']);
        Permission::create(['name' => 'delete gaugereadingmetrics']);

        Permission::create(['name' => 'list comments']);
        Permission::create(['name' => 'view comments']);
        Permission::create(['name' => 'create comments']);
        Permission::create(['name' => 'update comments']);
        Permission::create(['name' => 'delete comments']);

        Permission::create(['name' => 'list gauges']);
        Permission::create(['name' => 'view gauges']);
        Permission::create(['name' => 'create gauges']);
        Permission::create(['name' => 'update gauges']);
        Permission::create(['name' => 'delete gauges']);

        Permission::create(['name' => 'list links']);
        Permission::create(['name' => 'view links']);
        Permission::create(['name' => 'create links']);
        Permission::create(['name' => 'update links']);
        Permission::create(['name' => 'delete links']);

        Permission::create(['name' => 'list contacts']);
        Permission::create(['name' => 'view contacts']);
        Permission::create(['name' => 'create contacts']);
        Permission::create(['name' => 'update contacts']);
        Permission::create(['name' => 'delete contacts']);

        Permission::create(['name' => 'list events']);
        Permission::create(['name' => 'view events']);
        Permission::create(['name' => 'create events']);
        Permission::create(['name' => 'update events']);
        Permission::create(['name' => 'delete events']);

        Permission::create(['name' => 'list eventnotifies']);
        Permission::create(['name' => 'view eventnotifies']);
        Permission::create(['name' => 'create eventnotifies']);
        Permission::create(['name' => 'update eventnotifies']);
        Permission::create(['name' => 'delete eventnotifies']);

        Permission::create(['name' => 'list eventdates']);
        Permission::create(['name' => 'view eventdates']);
        Permission::create(['name' => 'create eventdates']);
        Permission::create(['name' => 'update eventdates']);
        Permission::create(['name' => 'delete eventdates']);

        Permission::create(['name' => 'list projects']);
        Permission::create(['name' => 'view projects']);
        Permission::create(['name' => 'create projects']);
        Permission::create(['name' => 'update projects']);
        Permission::create(['name' => 'delete projects']);

        Permission::create(['name' => 'list photos']);
        Permission::create(['name' => 'view photos']);
        Permission::create(['name' => 'create photos']);
        Permission::create(['name' => 'update photos']);
        Permission::create(['name' => 'delete photos']);

        Permission::create(['name' => 'list journals']);
        Permission::create(['name' => 'view journals']);
        Permission::create(['name' => 'create journals']);
        Permission::create(['name' => 'update journals']);
        Permission::create(['name' => 'delete journals']);

        Permission::create(['name' => 'list listings']);
        Permission::create(['name' => 'view listings']);
        Permission::create(['name' => 'create listings']);
        Permission::create(['name' => 'update listings']);
        Permission::create(['name' => 'delete listings']);

        Permission::create(['name' => 'list documents']);
        Permission::create(['name' => 'view documents']);
        Permission::create(['name' => 'create documents']);
        Permission::create(['name' => 'update documents']);
        Permission::create(['name' => 'delete documents']);

        Permission::create(['name' => 'list rapids']);
        Permission::create(['name' => 'view rapids']);
        Permission::create(['name' => 'create rapids']);
        Permission::create(['name' => 'update rapids']);
        Permission::create(['name' => 'delete rapids']);

        Permission::create(['name' => 'list states']);
        Permission::create(['name' => 'view states']);
        Permission::create(['name' => 'create states']);
        Permission::create(['name' => 'update states']);
        Permission::create(['name' => 'delete states']);

        Permission::create(['name' => 'list articles']);
        Permission::create(['name' => 'view articles']);
        Permission::create(['name' => 'create articles']);
        Permission::create(['name' => 'update articles']);
        Permission::create(['name' => 'delete articles']);

        Permission::create(['name' => 'list news']);
        Permission::create(['name' => 'view news']);
        Permission::create(['name' => 'create news']);
        Permission::create(['name' => 'update news']);
        Permission::create(['name' => 'delete news']);

        Permission::create(['name' => 'list contributors']);
        Permission::create(['name' => 'view contributors']);
        Permission::create(['name' => 'create contributors']);
        Permission::create(['name' => 'update contributors']);
        Permission::create(['name' => 'delete contributors']);

        Permission::create(['name' => 'list permits']);
        Permission::create(['name' => 'view permits']);
        Permission::create(['name' => 'create permits']);
        Permission::create(['name' => 'update permits']);
        Permission::create(['name' => 'delete permits']);

        Permission::create(['name' => 'list affiliates']);
        Permission::create(['name' => 'view affiliates']);
        Permission::create(['name' => 'create affiliates']);
        Permission::create(['name' => 'update affiliates']);
        Permission::create(['name' => 'delete affiliates']);

        Permission::create(['name' => 'list gaugeupdates']);
        Permission::create(['name' => 'view gaugeupdates']);
        Permission::create(['name' => 'create gaugeupdates']);
        Permission::create(['name' => 'update gaugeupdates']);
        Permission::create(['name' => 'delete gaugeupdates']);

        // Create user role and assign existing permissions
        $currentPermissions = Permission::all();
        $userRole = Role::create(['name' => 'user']);
        $userRole->givePermissionTo($currentPermissions);

        // Create admin exclusive permissions
        Permission::create(['name' => 'list roles']);
        Permission::create(['name' => 'view roles']);
        Permission::create(['name' => 'create roles']);
        Permission::create(['name' => 'update roles']);
        Permission::create(['name' => 'delete roles']);

        Permission::create(['name' => 'list permissions']);
        Permission::create(['name' => 'view permissions']);
        Permission::create(['name' => 'create permissions']);
        Permission::create(['name' => 'update permissions']);
        Permission::create(['name' => 'delete permissions']);

        Permission::create(['name' => 'list users']);
        Permission::create(['name' => 'view users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'update users']);
        Permission::create(['name' => 'delete users']);

        // Create admin role and assign all permissions
        $allPermissions = Permission::all();
        $adminRole = Role::create(['name' => 'super-admin']);
        $adminRole->givePermissionTo($allPermissions);

        $user = \App\Models\User::whereEmail('admin@admin.com')->first();

        if ($user) {
            $user->assignRole($adminRole);
        }
    }
}
