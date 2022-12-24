<?php

require_once 'table.php';

class Reservation extends Table
{
    protected $id;
    protected $checked;
    protected $tour_group;
    protected $user_id;
    protected $tour_id;

    public function __construct($id=null, $checked=null, $tour_group=null, $user_id=null, $tour_id=null)
    {
        $this->id = $id;
        $this->checked = $checked;
        $this->tour_group = $tour_group;
        $this->user_id = $user_id;
        $this->tour_id = $tour_id;
    }

    public function insertReservation():array
    {
        $query = <<<EOD
                INSERT INTO `reservation` (`id`, `tour_group`, `user_id`, `tour_id`) 
                VALUES (NULL, :tour_group, :user_id, :tour_id);
                EOD;
        $params = ['tour_group','user_id','tour_id'];
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
}