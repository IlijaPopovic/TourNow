<?php

require_once 'table.php';

class Comment extends Table
{
    protected $id;
    protected $grade;
    protected $opinion;
    protected $user_id;
    protected $tour_id;

    public function __construct($grade=null, $opinion=null, $user_id=null, $tour_id=null)
    {
        $this->grade = $grade;
        $this->opinion = $opinion;
        $this->user_id = $user_id;
        $this->tour_id = $tour_id;
    }

    public function insertComment():array
    {
        $query = <<<EOD
                INSERT INTO `commnet` (`id`, `grade`, `opinion`, `created`, `user_id`, `tour_id`) 
                VALUES (NULL, :grade, :opinion, :created, :user_id, :tour_id)
                EOD;
        $params = ['grade','opinion','created','user_id', 'tour_id'];
        return parent::insert($query, $params);
    }

    public function deleteComment():array
    {
        $query = <<<EOD
                DELETE FROM `comment` WHERE `comment`.`id` = :id"
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectComment():array
    {
        $query = <<<EOD
                SELECT * FROM `comment` WHERE `comment`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateComment():array
    {
        $query = <<<EOD
                UPDATE `commnet` 
                SET `grade` = :grade, `opinion` = :opinion, `user_id` = :user_id, `tour_id` = :tour_id 
                WHERE `commnet`.`id` = :id;
                EOD;
        $params = ['id','grade','opinion','created','user_id', 'tour_id'];
        return parent::update($query, $params);
    }
}