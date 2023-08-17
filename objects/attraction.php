<?php

require_once 'table.php';

class Attraction extends Table
{
    protected $id;
    protected $name;
    protected $picture;
    protected $date_start;
    protected $date_end;
    protected $description;
    protected $price;
    protected $max_people;
    protected $destination_id;

    public function __construct($id=null,$name=null ,$picture=null, $date_start=null, $date_end=null, $description=null, $price=null, $max_people=null, $destination_id=null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->picture = $picture;
        $this->date_start = $date_start;
        $this->date_end = $date_end;
        $this->description = $description;
        $this->max_people = $max_people;
        $this->price = $price;
        $this->destination_id = $destination_id;
    }

    public function insertAttraction():array
    {
        $query = <<<EOD
                INSERT INTO `attraction` (`id`, `name`,`picture`, `date_start`, `date_end`, `description`, `price`, `max_people`,  `destination_id`) 
                VALUES (NULL, :name, :picture, :date_start, :date_end, :description, :price, :max_people, :destination_id);
                EOD;
        $params = ['name', 'picture', 'date_start', 'date_end', 'description', 'price', 'max_people', 'destination_id'];
        return parent::insert($query, $params);
    }

    public function deleteAttraction():array
    {
        $query = <<<EOD
                DELETE FROM `attraction` WHERE `attraction`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectAttraction():array
    {
        $query = <<<EOD
                SELECT * FROM `attraction` WHERE `attraction`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function selectAttractions():array
    {
        $query = <<<EOD
                SELECT attraction.`id`, attraction.`name` as title, `date_start`, `date_end`, attraction.`description`, `price`, `max_people`, `destination_id`, destination.country, destination.image, destination.name as `destination`  FROM `attraction` INNER JOIN destination ON attraction.destination_id = destination.id;
                EOD;
        return parent::select($query);
    }

    public function updateAttraction():array
    {
        $query = <<<EOD
                UPDATE `tour` SET `name` = :name, `picture` = :picture, `date_start` = :date_start, `date_end` = :date_end, `description` = :description, `max_people` = :max_people, `price` = :price
                WHERE `tour`.`id` = :id;
                EOD;
        $params = ['id', 'name', 'picture', 'date_start', 'date_end', 'description', 'max_people', 'price'];
        return parent::update($query, $params);
    }
}