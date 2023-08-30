<?php

require_once 'table.php';

class AttractionReservation extends Table
{
    protected $id;
    protected $user_id;
    protected $attraction_id;

    public function __construct($id=null, $user_id=null, $attraction_id=null)
    {
        $this->id = $id;
        $this->user_id = $user_id;
        $this->attraction_id = $attraction_id;
    }

    public function insertAttractionReservation():array
    {
        $query = <<<EOD
                INSERT INTO `attraction_reservation` (`id`, `user_id`, `attraction_id`) 
                VALUES (NULL, :user_id, :attraction_id);
                EOD;
        $params = ['user_id','attraction_id'];
        return parent::insert($query, $params);
    }

    public function deleteAttractionReservation():array
    {
        $query = <<<EOD
                DELETE FROM `attraction_reservation` WHERE `attraction_reservation`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectAttractionReservation():array
    {
        $query = <<<EOD
                SELECT * FROM `attraction_reservation` WHERE `attraction_reservation`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    // public function updateAttractionReservation():array
    // {
    //     $query = <<<EOD
    //             UPDATE `attraction_reservation` 
    //             SET `checked` = :checked, `tour_group` = :tour_group 
    //             WHERE `reservation`.`id` = :id;
    //             EOD;
    //     $params = ['id','checked','tour_group'];
    //     return parent::update($query, $params);
    // }

    public function selectUserAttractionReservation():array
    {
        $query = <<<EOD
                SELECT destination.name as destination, attraction.name as attraction, attraction.date_start, attraction.date_end, attraction.price, attraction_reservation.id as attraction_reservation_id
                FROM destination 
                INNER JOIN attraction on attraction.destination_id = destination.id
                INNER JOIN attraction_reservation on attraction.id = attraction_reservation.attraction_id
                WHERE attraction_reservation.user_id = :id;
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }
}