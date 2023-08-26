<?php

require_once 'table.php';
require_once 'traits/open.php';

class Transport extends Table
{
    use open;
    protected $id;
    protected $name;
    protected $type;
    protected $start;
    protected $end;
    protected $tour_id;

    public function __construct($id = null,$name=null, $type=null, $start=null, $end=null, $tour_id=null)
    {
        $this->id = $id;
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

    public function selectCreateTransportData():array
    {
        $query1 = <<<EOD
                SHOW COLUMNS FROM transport WHERE Field = 'type';
                EOD;

        $query2 = <<<EOD
                SELECT id as id, name as name FROM `tour`;
                EOD;
        $params = ['id'];
        return [parent::select($query1)[0]['Type'],parent::select($query2)];
    }

    public function selectChangeTransportData():array
    {
        $query1 = <<<EOD
                SHOW COLUMNS FROM transport WHERE Field = 'type';
                EOD;

        $query2 = <<<EOD
                SELECT id as id, name as name FROM `tour`;
                EOD;
        $query3 = <<<EOD
                SELECT * FROM `transport` WHERE `transport`.`id` = :id
                EOD;
        $params = ['id'];
        return [parent::select($query1)[0]['Type'],parent::select($query2),parent::select($query3,$params)];
    }

    public function selectTransports():array
    {
        $query = <<<EOD
                SELECT * FROM `transport` WHERE `transport`.`tour_id` = :tour_id
                EOD;
        $params = ['tour_id'];
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