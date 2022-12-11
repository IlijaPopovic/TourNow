<?php

require 'table.php';

class Transport extends Table
{
    protected $id;
    protected $name;
    protected $type;
    protected $start;
    protected $end;
    protected $tour_id;

    public function __construct($name=null, $type=null, $start=null, $end=null, $tour_id=null)
    {
        $this->name=$name;
        $this->type=$type;
        $this->start=$start;
        $this->end=$end;
        $this->tour_id=$tour_id;
    }

    public function insertTransport():array
    {
        $query = <<<EOD
                INSERT INTO `Transport` (`id`, `name`, `type`, `start`, `end`, `tour_id`) 
                VALUES (NULL, :name, :type, :start, :end, :tour_id);
                EOD;
        $params = ['name', 'type', 'start', 'end', 'tour_id'];
        return parent::insert($query, $params);
    }

    public function deleteTransport():array
    {
        $query = <<<EOD
                DELETE FROM `transport` WHERE `transport`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectTransport():array
    {
        $query = <<<EOD
                SELECT * FROM `transport` WHERE `transport`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateTransport():array
    {
        $query = <<<EOD
                UPDATE `Transport` 
                SET `name` = :name, `type` = :type, `start` = :start, `end` = :end 
                WHERE `Transport`.`id` = :id;
                EOD;
        $params = ['id', 'name', 'type', 'start', 'end'];
        return parent::update($query, $params);
    }
}