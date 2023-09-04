<?php

require_once 'table.php';
require_once 'traits/open.php';

class Room extends Table
{
    use open;
    protected $id;
    protected $beds_number;
    protected $name;
    protected $kid_number;
    protected $service;
    protected $booked;
    protected $tour_id;
    protected $accommodation_id;

    public function __construct($id=null, $beds_number=null, $name=null, $kid_number=null, $service=null, $booked=null, $tour_id=null, $accommodation_id=null)
    {
        $this->id = $id;
        $this->beds_number = $beds_number;
        $this->name = $name;
        $this->kid_number = $kid_number;
        $this->service = $service;
        $this->booked = $booked;
        $this->tour_id = $tour_id;
        $this->accommodation_id = $accommodation_id;
    }

    public function insertRoom():array
    {
        $query = <<<EOD
                INSERT INTO `room` (`id`, `beds_number`, `name`, `kid_number`, `service`, `booked`, `tour_id`, `accommodation_id`) 
                VALUES (NULL, :beds_number, :name, :kid_number, :service, :booked, :tour_id, :accommodation_id)
                EOD;
        $params = ['beds_number', 'name', 'kid_number', 'service', 'booked', 'tour_id', 'accommodation_id'];
        return parent::insert($query, $params);
    }

    public function deleteRoom():array
    {
        $query = <<<EOD
                DELETE FROM `room` WHERE `room`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectRoom():array
    {
        $query = <<<EOD
                SELECT * FROM `room` WHERE `room`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function selectCreateRoomRoomData():array
    {
        $query1 = <<<EOD
                SHOW COLUMNS FROM room WHERE Field = 'service';
                EOD;

        $query2 = <<<EOD
                SELECT id as id, name as name FROM `tour`;
                EOD;

        $query3 = <<<EOD
                SELECT id as id, name as name FROM `accommodation`;
                EOD;

        return array(parent::select($query1)[0]['Type'],parent::select($query2),parent::select($query3)) ;
    }

    public function selectChangeRoomRoomData():array
    {
        $query1 = <<<EOD
                SHOW COLUMNS FROM room WHERE Field = 'service';
                EOD;

        $query2 = <<<EOD
                SELECT id as id, name as name FROM `tour`;
                EOD;

        $query3 = <<<EOD
                SELECT id as id, name as name FROM `accommodation`;
                EOD;
        $query4 = <<<EOD
                SELECT * FROM `room` WHERE `room`.`id` = :id
                EOD;
        $params = ['id'];

        return [parent::select($query1)[0]['Type'],parent::select($query2),parent::select($query3),parent::select($query4, $params)] ;
    }

    public function selectRooms():array
    {
        $query = <<<EOD
                SELECT room.`id`,`beds_number`,room.`name`,`kid_number`,`service`,`booked`,`tour_id`,`accommodation_id`, accommodation.name AS accommodation_name, stars, about, image  FROM `room` 
                INNER JOIN accommodation ON room.accommodation_id = accommodation.id  
                WHERE tour_id = :tour_id AND room.booked = 0
                ORDER BY `room`.`beds_number` ASC;
                EOD;
        $params = ['tour_id'];
        return parent::select($query, $params);
    }

    public function updateRoomBooking():array
    {
        $query = <<<EOD
                UPDATE `room` 
                SET `room`.`booked` = "1" 
                WHERE `room`.`id` = :id;
                EOD;
        $params = ['id'];
        return parent::update($query, $params);
    }


    public function updateRoom():array
    {
        $query = <<<EOD
                UPDATE `room` SET `beds_number` = :beds_number, `name` = :name, `kid_number` = :kid_number, `service` = :service, `tour_id` = :tour_id,`booked` = :booked, `accommodation_id` = :accommodation_id WHERE `room`.`id` = :id;
                EOD;
        $params = ['id', 'beds_number', 'name', 'kid_number', 'service', 'booked', 'tour_id', 'accommodation_id'];
        return parent::update($query, $params);
    }
}