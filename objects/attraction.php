<?php

require_once 'table.php';

class Attraction extends Table
{
    protected $id;
    protected $name;
    protected $image;
    protected $date_start;
    protected $date_end;
    protected $description;
    protected $price;
    protected $max_people;
    protected $destination_id;

    public function __construct($id=null,$name=null ,$image=null, $date_start=null, $date_end=null, $description=null, $price=null, $max_people=null, $destination_id=null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->image = $image;
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
                INSERT INTO `attraction` (`id`, `name`,`image`, `date_start`, `date_end`, `description`, `price`, `max_people`,  `destination_id`) 
                VALUES (NULL, :name, :image, :date_start, :date_end, :description, :price, :max_people, :destination_id);
                EOD;
        $params = ['name', 'image', 'date_start', 'date_end', 'description', 'price', 'max_people', 'destination_id'];
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
                SELECT attraction.`id`, attraction.`name` as title, `date_start`, `date_end`, attraction.`description`, `price`, `max_people`, `destination_id`, destination.country, attraction.image, destination.name as `destination`  FROM `attraction` INNER JOIN destination ON attraction.destination_id = destination.id
                WHERE `attraction`.`reserved` < `attraction`.`max_people`;
                EOD;
        return parent::select($query);
    }

    public function selectCreateAttractionData():array
    {
        $query = <<<EOD
                SELECT id, name FROM `destination`;
                EOD;
        return parent::select($query);
    }

    public function selectChangeAttractionData():array
    {
        $query1 = <<<EOD
                SELECT `id`, `name`, `image`, date_start, date_end , `description`, `price`, `max_people`, `destination_id` FROM `attraction` WHERE `attraction`.`id` = :id
                EOD;
        $params = ['id'];
        $query2 = <<<EOD
                SELECT id, name FROM `destination`;
                EOD;
        return [parent::select($query1, $params),parent::select($query2)];
    }

    public function updateAttractionReservation():array
    {
        $query = <<<EOD
                UPDATE `attraction` SET `reserved` = `reserved` + '1' WHERE `attraction`.`id` = :id;
                EOD;
        $params = ['id'];
        return parent::update($query, $params);
    }

    public function updateAttraction():array
    {
        $query = <<<EOD
                UPDATE `attraction` SET `name` = :name, `image` = :image, `date_start` = :date_start, `date_end` = :date_end, `description` = :description, `max_people` = :max_people, `price` = :price, `destination_id` = :destination_id
                WHERE `attraction`.`id` = :id;
                EOD;
        $params = ['id', 'name', 'image', 'date_start', 'date_end', 'description', 'max_people', 'price', 'destination_id'];
        return parent::update($query, $params);
    }
}