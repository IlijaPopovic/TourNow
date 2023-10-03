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

    public function updateActivationOrDeactivationReservation():array
    {
        $query = <<<EOD
                UPDATE `reservation`
                SET `checked` = CASE
                    WHEN `checked` = 1 THEN 0
                    WHEN `checked` = 0 THEN 1
                    ELSE `checked`  -- In case the current value is neither 0 nor 1
                END
                WHERE `id` = :id;
                EOD;
        $params = ['id'];
        return parent::update($query, $params);
    }
    public function updateActivationReservation():array
    {
        $query = <<<EOD
                UPDATE `reservation`
                SET `checked` = 1
                WHERE `id` = :id;
                EOD;
        $params = ['id'];
        return parent::update($query, $params);
    }

    public function selectUserReservations():array
    {
        $query = <<<EOD
                SELECT destination.name as destination,tour.id as tour_id, tour.description, tour.name as tour, (SELECT name FROM tour_image WHERE tour_image.tour_id = tour.id LIMIT 1) as image, tour.date_start, tour.date_end, tour.price as tour_price, transport.type as transport, transport.price as transport_price, room.name as room, reservation.id as reservation_id FROM destination INNER JOIN tour on tour.destination_id = destination.id INNER JOIN reservation ON reservation.tour_id = tour.id LEFT JOIN room on reservation.room_id = room.id LEFT JOIN transport on reservation.transport_id = transport.id WHERE reservation.user_id = :id;
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }
}