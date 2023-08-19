<?php

require_once 'table.php';

class Tour extends Table
{
    protected $id;
    protected $name;
    protected $date_start;
    protected $date_end;
    protected $description;
    protected $max_people;
    protected $type;
    protected $price;
    protected $enabled;
    protected $organisation_id;
    protected $destination_id;

    public function __construct($id=null,$name=null, $date_start=null, $date_end=null, $description=null, $max_people=null, $type=null, $price=null, $enabled=null, $organisation_id=null, $destination_id=null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->date_start = $date_start;
        $this->date_end = $date_end;
        $this->description = $description;
        $this->max_people = $max_people;
        $this->type = $type;
        $this->price = $price;
        $this->enabled = $enabled;
        $this->organisation_id = $organisation_id;
        $this->destination_id = $destination_id;
    }

    public function insertTour():array
    {
        $query = <<<EOD
                INSERT INTO `tour` (`id`, `name`, `date_start`, `date_end`, `description`, `max_people`, `type`, `price`, `enabled`, `organisation_id`, `destination_id`) 
                VALUES (NULL, :name, :date_start, :date_end, :description, :max_people, :type, :price, :enabled, :organisation_id, :destination_id);
                EOD;
        $params = ['name', 'date_start', 'date_end', 'description', 'max_people', 'type', 'price', 'enabled', 'organisation_id', 'destination_id'];
        return parent::insert($query, $params);
    }

    public function deleteTour():array
    {
        $query = <<<EOD
                DELETE FROM `tour` WHERE `tour`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectTour():array
    {
        $query = <<<EOD
                SELECT * FROM `tour` WHERE `tour`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function selectTours():array
    {
        $query = <<<EOD
                SELECT `tour`.`id`, `tour`.`name` as title, `tour`.`date_start`, `tour`.`date_end`, `tour`.`description`, `tour`.`max_people`, `tour`.`type`, `tour`.`price`, `tour`.`enabled`,`tour`.`created`, `tour`.`organisation_id`, `tour`.`destination_id`, (SELECT name from tour_image WHERE tour_image.tour_id = tour.id ORDER BY tour.id LIMIT 1) as `image`, destination.name as destination, destination.country FROM `tour` INNER JOIN destination ON tour.destination_id = destination.id;
                EOD;
        return parent::select($query);
    }

    public function updateTour():array
    {
        $query = <<<EOD
                UPDATE `tour` SET `name` = :name, `date_start` = :date_start, `date_end` = :date_end, `description` = :description, `max_people` = :max_people, `type` = :type, `price` = :price, `enabled` = :enabled
                WHERE `tour`.`id` = :id;
                EOD;
        $params = ['id', 'name', 'date_start', 'date_end', 'description', 'max_people', 'type', 'price', 'enabled',];
        return parent::update($query, $params);
    }
}