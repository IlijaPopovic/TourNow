<?php

require 'table.php';

class Destination extends Table
{
    protected $id;
    protected $name;
    protected $coordinates;
    protected $country;

    public function __construct($name=null, $coordinates=null, $country=null)
    {
        $this->name = $name;
        $this->coordinates = $coordinates;
        $this->country = $country;
    }

    public function insertDestination():array
    {
        $query = <<<EOD
                INSERT INTO `destination` (`id`, `name`, `coordinates`, `country`) 
                VALUES (NULL, :name, :coordinates, :country);
                EOD;
        $params = ['name','coordinates','country'];
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
                SET `name` = :name, `coordinates` = :coordinates, `country` = :country 
                WHERE `destination`.`id` = :id;
                EOD;
        $params = ['id','name','coordinates','country'];
        return parent::update($query, $params);
    }
}