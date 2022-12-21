<?php

require_once 'table.php';

class Organisation extends Table
{
    protected $id;
    protected $name;
    protected $mail;
    protected $password;
    protected $image;
    protected $about;
    protected $enabled;

    public function __construct($id = null,$name=null, $mail=null, $password=null, $image=null, $about=null, $enabled=null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->mail = $mail;
        $this->password = $password;
        $this->image = $image;
        $this->about = $about;
        $this->enabled = $enabled;
    }

    public function insertOrganisation():array
    {
        $query = <<<EOD
                INSERT INTO `organisation` (`id`, `name`, `mail`, `password`, `image`, `about`, `enabled`) 
                VALUES (NULL, :name, :mail, :password, :image, :about, :enabled);
                EOD;
        $params = ['name','mail','password','image','about','enabled'];
        return parent::insert($query, $params);
    }

    public function deleteOrganisation():array
    {
        $query = <<<EOD
                DELETE FROM `organisation` WHERE `organisation`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectOrganisation():array
    {
        $query = <<<EOD
                SELECT * FROM `organisation` WHERE `organisation`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateOrganisation():array
    {
        $query = <<<EOD
                UPDATE `organisation` 
                SET `name` = :name, `mail` = :mail, `password` = :password, `image` = :image, `about` = :about, `enabled` = :enabled 
                WHERE `organisation`.`id` = :id;
                EOD;
        $params = ['id','name','mail','password','image','about','enabled'];
        return parent::update($query, $params);
    }
}