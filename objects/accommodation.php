<?php

require 'table.php';

class Accommodation extends Table
{

    protected $id;
    protected $name;
    protected $stars;
    protected $picture;
    protected $about;
    protected $enabled;

    public function __construct($name=null, $stars=null, $picture=null, $about=null, $enabled=null)
    {
        $this->name = $name;
        $this->stars = $stars;
        $this->picture = $picture;
        $this->about = $about;
        $this->enabled = $enabled;
    }

    public function insertAccommodation():array
    {
        $query = <<<EOD
                INSERT INTO `accommodation` (`id`, `name`, `stars`, `picture`, `about`, `enabled`) 
                VALUES (NULL, :name, :stars, :picture, :about, :enabled);
                EOD;
        $params = ['name','stars','picture','about','enabled'];
        return parent::insert($query, $params);
    }

    public function deleteAccommodation():array
    {
        $query = <<<EOD
                DELETE FROM `accommodation` WHERE `accommodation`.`id` = :id"
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectAccommodation():array
    {
        $query = <<<EOD
                SELECT * FROM `accommodation` WHERE `accommodation`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateAccommodation():array
    {
        $query = <<<EOD
                UPDATE `accommodation` 
                SET `name` = :name, `stars` = :stars, `picture` = :picture, `about` = :about, `enabled` = :enabled 
                WHERE `accommodation`.`id` = :id;
                EOD;
        $params = ['id','name','stars','picture','about','enabled'];
        return parent::update($query, $params);
    }
}



// require '../config/database.php';

// $db = new Database();
// $a = new Accommodation('ilija','1','nekaslika','ja sam ilija',true);
// $a->setConnection($db->getConnection());

// $a->id=2;
// var_dump($a->updateAccommodation());



