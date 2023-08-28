<?php

require_once 'table.php';
require_once 'traits/open.php';

class Statistic extends Table
{
    use open;
    protected $id;
    protected $organisation_id;
    protected $tour_id;
    protected $number_of_clicks;


    public function __construct($id = null, $organisation_id=null, $tour_id=null, $number_of_clicks=null)
    {
        $this->id = $id;
        $this->organisation_id = $organisation_id;
        $this->tour_id = $tour_id;
        $this->number_of_clicks = $number_of_clicks;
    }

    public function insertStatistic()
    {
        $query = <<<EOD
                INSERT INTO `statistics` (`id`, `organisation_id`, `tour_id`, `number_of_clicks`)
                VALUES (NULL, :organisation_id, :tour_id, '1')
                ON DUPLICATE KEY UPDATE
                `number_of_clicks` = `number_of_clicks` + 1;
                EOD;
        $params = ['organisation_id','tour_id'];
        return parent::insert($query, $params);
    }

    public function selectOranisationStatistics()
    {
        $query = <<<EOD
                SELECT * FROM tour INNER JOIN statistics on statistics.tour_id = tour.id WHERE statistics.organisation_id = :id ORDER BY number_of_clicks DESC;
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

}