<?php

require 'table.php';

class TourImage extends Table
{
    protected $id;
    protected $name;
    protected $link;
    protected $tour_id;

    public function __construct($name=null, $link=null, $tour_id=null)
    {
        $this->name = $name;
        $this->link = $link;
        $this->tour_id = $tour_id;
    }

    public function insertTourImage():array
    {
        $query = <<<EOD
                INSERT INTO `tour_image` (`id`, `name`, `link`, `tour_id`) VALUES (NULL, :name, :link, :tour_id)
                EOD;
        $params = ['name', 'link', 'tour_id'];
        return parent::insert($query, $params);
    }

    public function deleteTourImage():array
    {
        $query = <<<EOD
                DELETE FROM `tour_image` WHERE `tour_image`.`id` = :id"
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectTourImage():array
    {
        $query = <<<EOD
                SELECT * FROM `tour_image` WHERE `tour_image`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateTourImage():array
    {
        $query = <<<EOD
                UPDATE `tour_image` SET `name` = :name, `link` = :link WHERE `tour_image`.`id` = :id;
                EOD;
        $params = ['id', 'name', 'link'];
        return parent::update($query, $params);
    }
}
