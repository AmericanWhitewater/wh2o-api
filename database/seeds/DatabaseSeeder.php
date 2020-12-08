<?php

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
        $this->call(RoleTableSeeder::class);
        $this->call(UserStorySeeder::class);
        $this->call(AccidentsSeeder::class);
        $this->call(AffiliatesSeeder::class);
        $this->call(ArticlesSeeder::class);
        $this->call(CausesSeeder::class);
        $this->call(CommentsSeeder::class);
        $this->call(ContactsSeeder::class);
        $this->call(DocumentsSeeder::class);
        $this->call(EventsSeeder::class);
        $this->call(ReachesSeeder::class);
        $this->call(EventDatesSeeder::class);
        $this->call(EventNotifiesSeeder::class);
        $this->call(FactorsSeeder::class);
        $this->call(GaugesSeeder::class);
        $this->call(GaugeCorrelationsSeeder::class);
        $this->call(GaugeNotifiesSeeder::class);
        $this->call(GaugePersonalSettingsSeeder::class);
        $this->call(GaugeReadingMetricsSeeder::class);
        $this->call(GaugeSourcesSeeder::class);
        $this->call(GaugeUpdatesSeeder::class);
        $this->call(InjuriesSeeder::class);
        $this->call(LinksSeeder::class);
        $this->call(NewsSeeder::class);
        $this->call(PhotosSeeder::class);
        $this->call(POISSeeder::class);
        $this->call(PostsSeeder::class);
        $this->call(ProjectsSeeder::class);
        $this->call(ReachNextEventsSeeder::class);
        $this->call(ReachObservationsSeeder::class);
        $this->call(ReachReadingSummariesSeeder::class);
        $this->call(ReachWarningsSeeder::class);
        $this->call(RegionsSeeder::class);
        $this->call(StatesSeeder::class);
    }
}
