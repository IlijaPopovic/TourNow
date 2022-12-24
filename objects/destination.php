<?php

require_once 'table.php';

class Destination extends Table
{
    protected $id;
    protected $name;
    protected $coordinates;
    protected $country;
    protected $description;
    protected $image;

    public function __construct($id=null, $name=null, $coordinates=null, $country=null, $description=null, $image=null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->coordinates = $coordinates;
        $this->country = $country;
        $this->description = $description;
        $this->image = $image;
    }

    public function insertDestination():array
    {
        $query = <<<EOD
                INSERT INTO `destination` (`id`, `name`, `coordinates`, `country`, `description`, `image`) 
                VALUES (NULL, :name, :coordinates, :country, :description, :image);
                EOD;
        $params = ['name','coordinates','country', 'description', 'image'];
        return parent::insert($query, $params);
    }

    public function deleteDestination():array
    {
        $query = <<<EOD
                DELETE FROM `destination` WHERE `destination`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectDestination():array
    {
        $query = <<<EOD
                SELECT * FROM `destination` WHERE `destination`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateDestination():array
    {
        $query = <<<EOD
                UPDATE `destination` 
                SET `name` = :name, `coordinates` = :coordinates, `country` = :country, `description` = :description, `image` = :image
                WHERE `destination`.`id` = :id;
                EOD;
        $params = ['id','name','coordinates','country','description','image'];
        return parent::update($query, $params);
    }
}