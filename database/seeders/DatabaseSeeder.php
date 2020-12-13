<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Adding an admin user
        $user = \App\Models\User::factory()
            ->count(1)
            ->create([
                'email' => 'admin@admin.com',
                'password' => \Hash::make('admin'),
            ]);
        $this->call(PermissionsSeeder::class);

        $this->call(RegionSeeder::class);
        $this->call(CauseSeeder::class);
        $this->call(AccidentSeeder::class);
        $this->call(ReachSeeder::class);
        $this->call(FactorSeeder::class);
        $this->call(GaugeCorrelationSeeder::class);
        $this->call(GaugeCorrelationRangeSeeder::class);
        $this->call(GaugeNotifySeeder::class);
        $this->call(GaugePersonalSettingSeeder::class);
        $this->call(GageSourceSeeder::class);
        $this->call(InjurySeeder::class);
        $this->call(ReachReadingSummarySeeder::class);
        $this->call(GaugeReadingMetricSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(GaugeSeeder::class);
        $this->call(LinkSeeder::class);
        $this->call(ContactSeeder::class);
        $this->call(EventSeeder::class);
        $this->call(EventNotifySeeder::class);
        $this->call(EventDateSeeder::class);
        $this->call(ProjectSeeder::class);
        $this->call(PhotoSeeder::class);
        $this->call(JournalSeeder::class);
        $this->call(ListingSeeder::class);
        $this->call(DocumentSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(RapidSeeder::class);
        $this->call(StateSeeder::class);
        $this->call(ArticleSeeder::class);
        $this->call(NewsSeeder::class);
        $this->call(ContributorSeeder::class);
        $this->call(PermitSeeder::class);
        $this->call(AffiliateSeeder::class);
        $this->call(GaugeUpdateSeeder::class);
    }
}
