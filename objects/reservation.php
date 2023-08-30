<?php

require_once 'table.php';

class Reservation extends Table
{
    protected $id;
    protected $checked;
    protected $tour_group;
    protected $user_id;
    protected $tour_id;
    protected $transport_id;
    protected $room_id;

    public function __construct($id=null, $checked=null, $tour_group=null, $user_id=null, $tour_id=null, $transport_id=null, $room_id=null)
    {
        $this->id = $id;
        $this->checked = $checked;
        $this->tour_group = $tour_group;
        $this->user_id = $user_id;
        $this->tour_id = $tour_id;
        $this->transport_id = $transport_id;
        $this->room_id = $room_id;
    }

    public function insertReservation():array
    {
        $query = <<<EOD
                INSERT INTO `reservation` (`id`, `tour_group`, `user_id`, `tour_id`,`transport_id`,`room_id`) 
                VALUES (NULL, :tour_group, :user_id, :tour_id, :transport_id, :room_id);
                EOD;
        $params = ['tour_group','user_id','tour_id','transport_id','room_id'];
        return parent::insert($query, $params);
    }

    public function deleteReservation():array
    {
        $query = <<<EOD
                DELETE FROM `reservation` WHERE `reservation`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectReservation():array
    {
        $query = <<<EOD
                SELECT * FROM `reservation` WHERE `reservation`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateReservation():array
    {
        $query = <<<EOD
                UPDATE `reservation` 
                SET `checked` = :checked, `tour_group` = :tour_group 
                WHERE `reservation`.`id` = :id;
                EOD;
        $params = ['id','checked','tour_group'];
        return parent::update($query, $params);
    }

    public function selectUserReservations():array
    {
        $query = <<<EOD
                SELECT destination.name as destination, tour.name as tour, tour.date_start, tour.date_end, tour.price as tour_price, transport.type as transport, transport.price as transport_price, room.name as room, reservation.id as reservation_id FROM destination INNER JOIN tour on tour.destination_id = destination.id INNER JOIN reservation on reservation.tour_id = tour.id LEFT JOIN room on reservation.room_id = room.id LEFT JOIN transport on reservation.transport_id = transport.id WHERE reservation.user_id = :id;
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }
}