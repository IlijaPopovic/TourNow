<?php

require_once 'table.php';

class Comment extends Table
{
    protected $id;
    protected $grade;
    protected $opinion;
    protected $user_id;
    protected $destination_id;

    public function __construct($id=null, $grade=null, $opinion=null, $user_id=null, $destination_id=null)
    {
        $this->id = $id;
        $this->grade = $grade;
        $this->opinion = $opinion;
        $this->user_id = $user_id;
        $this->destination_id = $destination_id;
    }

    public function insertComment():array
    {
        $query = <<<EOD
                INSERT INTO `comment` (`id`, `grade`, `opinion`, `user_id`, `destination_id`) 
                VALUES (NULL, :grade, :opinion, :user_id, :destination_id)
                EOD;
        $params = ['grade','opinion', 'user_id', 'destination_id'];
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

    public function deleteUserComment():array
    {
        $query = <<<EOD
                DELETE FROM `comment` WHERE `comment`.`user_id` = :user_id AND `comment`.`destination_id` = :destination_id
                EOD;
        $params = ['user_id','destination_id'];
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

    public function selectComments():array
    {
        $query = <<<EOD
                SELECT * FROM `comment` INNER JOIN user ON comment.user_id = user.id WHERE `comment`.`destination_id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateComment():array
    {
        $query = <<<EOD
                UPDATE `comment` 
                SET `grade` = :grade, `opinion` = :opinion, `user_id` = :user_id, `destination_id` = :destination_id 
                WHERE `commnet`.`id` = :id;
                EOD;
        $params = ['id','grade','opinion','created','user_id', 'destination_id'];
        return parent::update($query, $params);
    }
}