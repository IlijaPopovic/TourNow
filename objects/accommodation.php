<?php

require_once 'table.php';

class Accommodation extends Table
{

    protected $id;
    protected $name;
    protected $stars;
    protected $image;
    protected $about;
    protected $enabled;

    public function __construct($id=null,$name=null, $stars=null, $image=null, $about=null, $enabled=null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->stars = $stars;
        $this->image = $image;
        $this->about = $about;
        $this->enabled = $enabled;
    }

    public function insertAccommodation():array
    {
        $query = <<<EOD
                INSERT INTO `accommodation` (`id`, `name`, `stars`, `image`, `about`) 
                VALUES (NULL, :name, :stars, :image, :about);
                EOD;
        $params = ['name','stars','image','about'];
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
                SET `name` = :name, `stars` = :stars, `image` = :image, `about` = :about, `enabled` = :enabled 
                WHERE `accommodation`.`id` = :id;
                EOD;
        $params = ['id','name','stars','image','about','enabled'];
        return parent::update($query, $params);
    }
}




